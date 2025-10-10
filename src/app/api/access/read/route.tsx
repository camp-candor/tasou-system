import { NextRequest, NextResponse } from 'next/server';
// Import only the necessary function from the backend package
import { verifyToken } from '@clerk/backend';

// Define the allowed origins. For development, '*' is fine, but for production, you should be more specific.
const allowedOrigins = ['*'];

const corsHeaders = {
  'Access-Control-Allow-Origin': allowedOrigins.join(', '),
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export async function GET(
  request: NextRequest,
  context: { params: { idx: string } }
) {
  const authHeader = request.headers.get('authorization');
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return NextResponse.json(
      { message: 'Authentication failed: No token provided.' },
      { status: 401, headers: corsHeaders }
    );
  }

  const token = authHeader.substring(7);

  try {
    // 1. Call `verifyToken` with the token string.
    const claims = await verifyToken(token, { jwtKey: process.env.CLERK_JWT_KEY });

    
    // 2. The `userId` is in the `sub` (subject) claim of the token.
    const userId = claims.sub;

    if (!userId) {
      return NextResponse.json(
        { message: 'Invalid token: User ID missing from claims' },
        { status: 401, headers: corsHeaders }
      );
    }

    console.log(`Request authenticated for user: ${userId}`);
    
    // Proceed with your business logic...
    // var bit = await global.MYTHOS(ActDat.READ_DATUM, { idx: context.params.idx, userId: userId });
    
    return NextResponse.json(
      { message: `Signed In to Mythos.tattoo as ${userId}` },
      { headers: corsHeaders }
    );

  } catch (error) {
    // 3. ANY error thrown by `verifyToken` indicates a validation failure.
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error("Authentication error:", errorMessage);
    
    return NextResponse.json(
      { message: 'Authentication failed', error: errorMessage },
      { status: 401, headers: corsHeaders }
    );
  }
}

// Handler for the preflight OPTIONS request
export async function OPTIONS(request: NextRequest) {
  return new Response(null, {
    status: 204, // No Content
    headers: corsHeaders,
  });
}