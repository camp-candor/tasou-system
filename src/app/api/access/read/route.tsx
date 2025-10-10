
import { NextRequest, NextResponse } from 'next/server';
import { createClerkClient } from '@clerk/backend'

export async function GET(request: NextRequest,
  context: { params: { idx: string } }
) {

  const clerkClient = createClerkClient({
    secretKey: process.env.CLERK_SECRET_KEY,
    publishableKey: process.env.CLERK_PUBLISHABLE_KEY,
  })

  const { isSignedIn } = await clerkClient.authenticateRequest(request, {
    jwtKey: process.env.CLERK_JWT_KEY,
    authorizedParties: ['mythos.tattoo', 'http://localhost:3000/'],
  })

    if (!isSignedIn) {
    return Response.json( { message: 'Not Signed In' })
  }

  //var bit = await global.MYTHOS(ActDat.READ_DATUM, { idx})
  return Response.json({ message: 'Signed In' })
}