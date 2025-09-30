import * as ActDat from '@mythos/03.datum.unit/datum.action'
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest,
  context: { params: { idx: string } }
) {

  const idx = context.params.idx;

  var bit = await global.MYTHOS(ActDat.READ_DATUM, { idx})
  return Response.json(bit)
}