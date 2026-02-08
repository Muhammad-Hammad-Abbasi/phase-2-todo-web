import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import pool from '@/lib/db';
import { randomUUID } from 'crypto';

export async function POST(request: Request) {
  try {
    const { email, password, name } = await request.json();
    
    if (!email || !password || !name) {
       return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    // Check if user exists
    const existing = await pool.query('SELECT id FROM "user" WHERE email = $1', [email]);
    if (existing.rows.length > 0) {
      return NextResponse.json({ error: 'Email already in use' }, { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const id = randomUUID();
    const now = new Date().toISOString();

    await pool.query(
      'INSERT INTO "user" (id, email, name, password_hash, created_at) VALUES ($1, $2, $3, $4, $5)',
      [id, email, name, hashedPassword, now]
    );

    return NextResponse.json({ success: true, userId: id });
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
