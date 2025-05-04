// app/api/movies/[idMovie]/comments/route.ts

import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { MongoClient, Db, ObjectId } from 'mongodb';

/**
 * @swagger
 * /api/movies/{idMovie}/comments:
 *   get:
 *     summary: Get all comments for a movie
 *     description: Retrieve all comments related to a specific movie by its ID.
 *     parameters:
 *       - in: path
 *         name: idMovie
 *         required: true
 *         schema:
 *           type: string
 *         description: MongoDB ObjectId of the movie
 *     responses:
 *       200:
 *         description: List of comments
 *       400:
 *         description: Invalid movie ID
 *       500:
 *         description: Internal Server Error
 */
export async function GET(_: Request, { params }: { params: any }): Promise<NextResponse> {
  try {
    const { idMovie } = params;

    if (!ObjectId.isValid(idMovie)) {
      return NextResponse.json(
        { message: 'Invalid movie ID', error: 'ID format incorrect' },
        { status: 400 }
      );
    }

    const client: MongoClient = await clientPromise;
    const db: Db = client.db('sample_mflix');

    const comments = await db.collection('comments')
      .find({ movie_id: new ObjectId(idMovie) })
      .toArray();

    return NextResponse.json(
      { data: comments },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: 'Internal Server Error', error: error.message },
      { status: 500 }
    );
  }
}