import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';
import clientPromise from '@/lib/mongodb';
import type { Db } from 'mongodb';

/**
 * @swagger
 * /api/theaters/{idTheater}:
 *   get:
 *     summary: Get a theater by ID
 *     description: Retrieve a specific theater or cinema by its ID.
 *     parameters:
 *       - in: path
 *         name: idTheater
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Theater found
 *       400:
 *         description: Invalid ID
 *       404:
 *         description: Theater not found
 *       500:
 *         description: Internal server error
 */
export async function GET(_: Request, { params }: { params: { idTheater: string } }) {
  try {
    const { idTheater } = params;
    if (!ObjectId.isValid(idTheater)) {
      return NextResponse.json({ status: 400, message: 'Invalid theater ID' });
    }

    const db: Db = (await clientPromise).db('sample_mflix');
    const theater = await db.collection('theaters').findOne({ _id: new ObjectId(idTheater) });

    if (!theater) {
      return NextResponse.json({ status: 404, message: 'Theater not found' });
    }

    return NextResponse.json({ status: 200, data: theater });
  } catch (error: any) {
    return NextResponse.json({ status: 500, message: 'Internal server error', error: error.message });
  }
}

/**
 * @swagger
 * /api/theaters/{idTheater}:
 *   post:
 *     summary: Create a new theater (with ID override)
 *     description: Add a new theater or cinema with a specific ID.
 *     parameters:
 *       - in: path
 *         name: idTheater
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               theaterId:
 *                 type: integer
 *                 example: 1000
 *               location:
 *                 type: object
 *                 properties:
 *                   address:
 *                     type: object
 *                     properties:
 *                       street1:
 *                         type: string
 *                         example: 340 W Market
 *                       city:
 *                         type: string
 *                         example: Bloomington
 *                       state:
 *                         type: string
 *                         example: MN
 *                       zipcode:
 *                         type: string
 *                         example: "55425"
 *                   geo:
 *                     type: object
 *                     properties:
 *                       type:
 *                         type: string
 *                         example: Point
 *                       coordinates:
 *                         type: array
 *                         items:
 *                           type: number
 *                         example: [-93.24565, 44.85466]
 *     responses:
 *       201:
 *         description: Theater created
 *       500:
 *         description: Internal server error
 */
export async function POST(request: Request, { params }: { params: { idTheater: string } }) {
  try {
    const { idTheater } = params;
    const data = await request.json();

    const theater = {
      _id: new ObjectId(idTheater),
      ...data
    };

    const db: Db = (await clientPromise).db('sample_mflix');
    const result = await db.collection('theaters').insertOne(theater);

    return NextResponse.json({ status: 201, message: 'Theater created', data: { insertedId: result.insertedId } });
  } catch (error: any) {
    return NextResponse.json({ status: 500, message: 'Internal server error', error: error.message });
  }
}

/**
 * @swagger
 * /api/theaters/{idTheater}:
 *   put:
 *     summary: Update a theater by ID
 *     description: Update the information of a theater using its ID.
 *     parameters:
 *       - in: path
 *         name: idTheater
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               location:
 *                 type: object
 *                 properties:
 *                   address:
 *                     type: object
 *                     properties:
 *                       street1:
 *                         type: string
 *                       city:
 *                         type: string
 *                       state:
 *                         type: string
 *                       zipcode:
 *                         type: string
 *                   geo:
 *                     type: object
 *                     properties:
 *                       type:
 *                         type: string
 *                         example: "Point"
 *                       coordinates:
 *                         type: array
 *                         items:
 *                           type: number
 *                         example: [2.343123, 48.875561]
 *     responses:
 *       200:
 *         description: Theater updated successfully
 *       404:
 *         description: Theater not found
 *       500:
 *         description: Internal server error
 */
export async function PUT(request: Request, { params }: { params: { idTheater: string } }) {
  try {
    const { idTheater } = params;
    const data = await request.json();

    const db: Db = (await clientPromise).db('sample_mflix');
    const result = await db.collection('theaters').updateOne(
      { _id: new ObjectId(idTheater) },
      { $set: data }
    );

    return NextResponse.json({ status: 200, message: 'Theater updated', data: { modifiedCount: result.modifiedCount } });
  } catch (error: any) {
    return NextResponse.json({ status: 500, message: 'Internal server error', error: error.message });
  }
}

/**
 * @swagger
 * /api/theaters/{idTheater}:
 *   delete:
 *     summary: Delete a theater by ID
 *     description: Remove a theater or cinema from the database.
 *     parameters:
 *       - in: path
 *         name: idTheater
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Theater deleted
 *       500:
 *         description: Internal server error
 */
export async function DELETE(_: Request, { params }: { params: { idTheater: string } }) {
  try {
    const { idTheater } = params;

    const db: Db = (await clientPromise).db('sample_mflix');
    const result = await db.collection('theaters').deleteOne({ _id: new ObjectId(idTheater) });

    return NextResponse.json({ status: 200, message: 'Theater deleted', data: { deletedCount: result.deletedCount } });
  } catch (error: any) {
    return NextResponse.json({ status: 500, message: 'Internal server error', error: error.message });
  }
}