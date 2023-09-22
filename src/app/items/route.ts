import { NextResponse } from 'next/server'
 
export async function GET() {
  const res = await fetch('https://api.jsonbin.io/v3/b/650d039e12a5d37659816079', {
  })
  const data = await res.json()
 
  return NextResponse.json({ data })
}