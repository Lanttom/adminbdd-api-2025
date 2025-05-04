// app/api/movies/[idMovie]/comments/[idComment]/route.ts

import { NextResponse, type NextRequest } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { MongoClient, Db, ObjectId } from 'mongodb';

const AUTHOR_ID = 'Antony Lozano';

/**
 * @swagger
 * /api/movies/{idMovie}/comments/{idComment}:
 *   get:
 *     summary: Get a specific comment of a movie
 *     description: Retrieve a specific comment associated with a movie using comment ID and movie ID.
 *     parameters:
 *       - in: path
 *         name: idMovie
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the movie.
 *       - in: path
 *         name: idComment
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the comment.
 *     responses:
 *       200:
 *         description: Comment found and returned successfully.
 *       400:
 *         description: Invalid ID format.
 *       404:
 *         description: Comment not found.
 *       500:
 *         description: Internal Server Error.
 */
export async function GET(_: NextRequest, { params }: { params: any }): Promise<NextResponse> {
  try {
    const { idMovie, idComment } = params;

    if (!ObjectId.isValid(idMovie) || !ObjectId.isValid(idComment)) {
      return NextResponse.json({ message: 'Invalid ID format' }, { status: 400 });
    }

    const client: MongoClient = await clientPromise;
    const db: Db = client.db('sample_mflix');

    const comment = await db.collection('comments').findOne({
      _id: new ObjectId(idComment),
      movie_id: new ObjectId(idMovie),
    });

    if (!comment) {
      return NextResponse.json({ message: 'Comment not found' }, { status: 404 });
    }

    return NextResponse.json({ data: comment }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: 'Internal Server Error', error: error.message }, { status: 500 });
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
 *       400:
 *         description: Invalid movie ID format
 *       500:
 *         description: Internal Server Error
 */
export async function POST(_: NextRequest, { params }: { params: any }): Promise<NextResponse> {
  try {
    const { idMovie } = params;

    if (!ObjectId.isValid(idMovie)) {
      return NextResponse.json({ message: 'Invalid movie ID format' }, { status: 400 });
    }

    const client: MongoClient = await clientPromise;
    const db: Db = client.db('sample_mflix');

    const comment = {
      movie_id: new ObjectId(idMovie),
      author: AUTHOR_ID,
      text: 'Super film !',
      date: new Date(),
    };

    const result = await db.collection('comments').insertOne(comment);
    return NextResponse.json({ message: 'Comment added', data: { insertedId: result.insertedId } }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ message: 'Internal Server Error', error: error.message }, { status: 500 });
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
 *         description: Invalid ID format
 *       404:
 *         description: Comment not found
 *       500:
 *         description: Internal server error
 */
export async function PUT(_: NextRequest, { params }: { params: any }): Promise<NextResponse> {
  try {
    const { idMovie, idComment } = params;

    if (!ObjectId.isValid(idMovie) || !ObjectId.isValid(idComment)) {
      return NextResponse.json({ message: 'Invalid ID format' }, { status: 400 });
    }

    const client: MongoClient = await clientPromise;
    const db: Db = client.db('sample_mflix');

    const result = await db.collection('comments').updateOne(
      { _id: new ObjectId(idComment), movie_id: new ObjectId(idMovie) },
      { $set: { text: 'Commentaire modifié', updated_at: new Date() } }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json({ message: 'Comment not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Comment updated' }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: 'Internal Server Error', error: error.message }, { status: 500 });
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
 *         description: Invalid ID format
 *       404:
 *         description: Comment not found
 *       500:
 *         description: Internal server error
 */
export async function DELETE(_: NextRequest, { params }: { params: any }): Promise<NextResponse> {
  try {
    const { idMovie, idComment } = params;

    if (!ObjectId.isValid(idMovie) || !ObjectId.isValid(idComment)) {
      return NextResponse.json({ message: 'Invalid ID format' }, { status: 400 });
    }

    const client: MongoClient = await clientPromise;
    const db: Db = client.db('sample_mflix');

    const result = await db.collection('comments').deleteOne({
      _id: new ObjectId(idComment),
      movie_id: new ObjectId(idMovie),
    });

    if (result.deletedCount === 0) {
      return NextResponse.json({ message: 'Comment not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Comment deleted' }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: 'Internal Server Error', error: error.message }, { status: 500 });
  }
}
