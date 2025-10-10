// app/api/your-route/[idx]/route.ts

import { NextRequest } from 'next/server';
// Import only the necessary function from the backend package
import { verifyToken } from '@clerk/backend';

// Define the allowed origins.
const allowedOrigins = ['*']; // For production, specify your frontend URL

const corsHeaders = {
  'Access-Control-Allow-Origin': allowedOrigins.join(', '),
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export async function GET(
  request: NextRequest,
  context: { params: { token: string } }
) {
  // --- 1. Authentication Stage (Same as before) ---
  //const authHeader = request.headers.get('authorization');
  
  //if (!authHeader || !authHeader.startsWith('Bearer ')) {
  //  return new Response(
  //    JSON.stringify({ message: 'Authentication failed: No token provided.' }),
  //    { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
  //  );
  //}

  //const token = authHeader.substring(7);
  const token = context.params.token
  let userId: string;

  try {
    const claims = await verifyToken(token, { jwtKey: process.env.CLERK_JWT_KEY });
    userId = claims.sub; // The userId is in the `sub` (subject) claim

    if (!userId) {
      throw new Error('User ID missing from token claims');
    }

    console.log(`Request authenticated for user: ${userId}`);

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error("Authentication error:", errorMessage);
    
    return new Response(
      JSON.stringify({ message: 'Authentication failed', error: errorMessage }),
      { status: 401, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }

  // --- 2. Streaming Stage (New Logic) ---
  const stream = new ReadableStream({
    start(controller) {
      const encoder = new TextEncoder();

      // Helper function to format and send an SSE message
      const sendEvent = (eventName: string, data: object) => {
        const message = `event: ${eventName}\ndata: ${JSON.stringify(data)}\n\n`;
        controller.enqueue(encoder.encode(message));
      };

      // Immediately send a confirmation event
      sendEvent('connected', { message: `Signed In to Mythos.tattoo as ${userId}` });
      
      // This is where your continuous business logic would go.
      // We'll simulate it with a timer that sends an update every 2 seconds.
      const intervalId = setInterval(() => {
        const mockData = {
          timestamp: new Date().toISOString(),
          update: `This is a real-time update for user ${userId}.`,
          // In a real app, you might get this from your `MYTHOS` function
          // e.g., data: await global.MYTHOS(ActDat.READ_DATUM, ...)
        };
        sendEvent('message', mockData);
      }, 2000);

      // Clean up when the client closes the connection
      request.signal.onabort = () => {
        console.log(`Connection closed for user: ${userId}`);
        clearInterval(intervalId);
        controller.close();
      };
    },
  });

  // Return the stream with the appropriate SSE headers
  return new Response(stream, {
    headers: {
      ...corsHeaders,
      'Content-Type': 'text/event-stream',
      'Connection': 'keep-alive',
      'Cache-Control': 'no-cache, no-transform',
    },
  });
}

// Handler for the preflight OPTIONS request remains the same
export async function OPTIONS(request: NextRequest) {
  return new Response(null, {
    status: 204, // No Content
    headers: corsHeaders,
  });
}