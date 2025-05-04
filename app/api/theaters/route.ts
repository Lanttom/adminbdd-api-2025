import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { MongoClient, Db } from 'mongodb';

/**
 * @swagger
 * /api/theaters:
 *   get:
 *     summary: Get all theaters
 *     description: Retrieve a list of all theaters and cinemas.
 *     responses:
 *       200:
 *         description: List of theaters retrieved successfully
 *       500:
 *         description: Internal server error
 */
export async function GET(): Promise<NextResponse> {
  try {
    const client: MongoClient = await clientPromise;
    const db: Db = client.db('sample_mflix');
    const theaters = await db.collection('theaters').find({}).limit(10).toArray();

    return NextResponse.json({ status: 200, data: theaters });
  } catch (error: any) {
    return NextResponse.json({
      status: 500,
      message: 'Internal Server Error',
      error: error.message
    });
  }
}