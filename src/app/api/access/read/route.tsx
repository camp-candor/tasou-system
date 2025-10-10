import { NextRequest, NextResponse } from 'next/server';
// Import only the necessary function from the backend package
import { verifyToken } from '@clerk/backend';

export async function GET(
  request: NextRequest,
  context: { params: { idx: string } }
) {
  const authHeader = request.headers.get('authorization');
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return NextResponse.json({ message: 'Authentication failed: No token provided.' }, { status: 401 });
  }

  const token = authHeader.substring(7);

  try {
    // 1. Call `verifyToken` with the token string.
    //    The SDK uses environment variables for configuration.
    const claims = await verifyToken(token, { jwtKey: process.env.CLERK_JWT_KEY, });

    // 2. The `userId` is in the `sub` (subject) claim of the token.
    const userId = claims.sub;

    if (!userId) {
      return NextResponse.json({ message: 'Invalid token: User ID missing from claims' }, { status: 401 });
    }

    console.log(`Request authenticated for user: ${userId}`);
    
    // Proceed with your business logic...
    // var bit = await global.MYTHOS(ActDat.READ_DATUM, { idx: context.params.idx, userId: userId });
    
    return NextResponse.json({ message: `Signed In to Mythos.tattoo as ${userId}` });

  } catch (error) {
    // 3. ANY error thrown by `verifyToken` indicates a validation failure.
    //    We catch the generic error, log its message, and return a 401.
    //    This is the intended pattern.
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error("Authentication error:", errorMessage);
    
    return NextResponse.json(
      { message: 'Authentication failed', error: errorMessage },
      { status: 401 }
    );
  }
}