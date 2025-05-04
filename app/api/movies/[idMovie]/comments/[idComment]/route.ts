// app/api/movies/[idMovie]/comments/[idComment]/route.ts

import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { MongoClient, Db, ObjectId } from 'mongodb';

const AUTHOR_ID = 'Antony lozano'; // ID utilisateur en dur

/**
 * @swagger
 * /api/movies/{idMovie}/comments/{idComment}:
 *   get:
 *     summary: Get a comment by ID
 *     description: Retrieve a specific comment by ID.
 *     parameters:
 *       - in: path
 *         name: idMovie
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: idComment
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Comment found
 *       400:
 *         description: Invalid ID
 *       404:
 *         description: Comment not found
 *       500:
 *         description: Internal server error
 */
export async function GET(
  _: Request,
  { params }: { params: { idMovie: string; idComment: string } }
) {
  try {
    const { idComment } = params;

    if (!ObjectId.isValid(idComment)) {
      return NextResponse.json({ status: 400, message: 'Invalid comment ID' });
    }

    const client: MongoClient = await clientPromise;
    const db: Db = client.db('sample_mflix');

    const comment = await db.collection('comments').findOne({ _id: new ObjectId(idComment) });

    if (!comment) {
      return NextResponse.json({ status: 404, message: 'Comment not found' });
    }

    return NextResponse.json({ status: 200, data: comment });
  } catch (error: any) {
    return NextResponse.json({ status: 500, message: 'Internal Server Error', error: error.message });
  }
}

/**
 * @swagger
 * /api/movies/{idMovie}/comments/{idComment}:
 *   post:
 *     summary: Add a new comment
 *     description: Add a new comment to the movie (ID user en dur)
 *     parameters:
 *       - in: path
 *         name: idMovie
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       201:
 *         description: Comment added
 *       500:
 *         description: Internal Server Error
 */
export async function POST(
  _: Request,
  { params }: { params: { idMovie: string; idComment: string } }
) {
  try {
    const { idMovie } = params;
    const client: MongoClient = await clientPromise;
    const db: Db = client.db('sample_mflix');

    const comment = {
      movie_id: new ObjectId(idMovie),
      author: AUTHOR_ID,
      text: 'Super film !',
      date: new Date()
    };

    const result = await db.collection('comments').insertOne(comment);

    return NextResponse.json({
      status: 201,
      message: 'Comment added',
      data: { insertedId: result.insertedId }
    });
  } catch (error: any) {
    return NextResponse.json({
      status: 500,
      message: 'Internal Server Error',
      error: error.message
    });
  }
}

/**
 * @swagger
 * /api/movies/{idMovie}/comments/{idComment}:
 *   put:
 *     summary: Update a comment by ID
 *     description: Modify the content of a comment identified by its ID.
 *     parameters:
 *       - in: path
 *         name: idMovie
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: idComment
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Comment updated
 *       400:
 *         description: Invalid ID
 *       404:
 *         description: Comment not found
 *       500:
 *         description: Internal server error
 */
export async function PUT(
  _: Request,
  { params }: { params: { idMovie: string; idComment: string } }
) {
  try {
    const { idComment } = params;

    if (!ObjectId.isValid(idComment)) {
      return NextResponse.json({ status: 400, message: 'Invalid comment ID' });
    }

    const client: MongoClient = await clientPromise;
    const db: Db = client.db('sample_mflix');

    const result = await db.collection('comments').updateOne(
      { _id: new ObjectId(idComment) },
      {
        $set: {
          text: 'Commentaire modifié',
          updated_at: new Date()
        }
      }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json({ status: 404, message: 'Comment not found' });
    }

    return NextResponse.json({ status: 200, message: 'Comment updated' });
  } catch (error: any) {
    return NextResponse.json({
      status: 500,
      message: 'Internal Server Error',
      error: error.message
    });
  }
}

/**
 * @swagger
 * /api/movies/{idMovie}/comments/{idComment}:
 *   delete:
 *     summary: Delete a comment by ID
 *     description: Delete a comment linked to a specific movie using its ID.
 *     parameters:
 *       - in: path
 *         name: idMovie
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: idComment
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Comment deleted successfully
 *       400:
 *         description: Invalid ID
 *       404:
 *         description: Comment not found
 *       500:
 *         description: Internal server error
 */
export async function DELETE(
  _: Request,
  { params }: { params: { idMovie: string; idComment: string } }
) {
  try {
    const { idComment } = params;

    if (!ObjectId.isValid(idComment)) {
      return NextResponse.json({ status: 400, message: 'Invalid comment ID' });
    }

    const client: MongoClient = await clientPromise;
    const db: Db = client.db('sample_mflix');

    const result = await db.collection('comments').deleteOne({ _id: new ObjectId(idComment) });

    if (result.deletedCount === 0) {
      return NextResponse.json({ status: 404, message: 'Comment not found' });
    }

    return NextResponse.json({ status: 200, message: 'Comment deleted' });
  } catch (error: any) {
    return NextResponse.json({
      status: 500,
      message: 'Internal Server Error',
      error: error.message
    });
  }
}
