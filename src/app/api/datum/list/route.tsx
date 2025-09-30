import * as ActDat from '@mythos/03.datum.unit/datum.action'
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest,
  context: { params: {} }
) {

  var bit = await global.MYTHOS(ActDat.LIST_DATUM, {})
  return Response.json(bit)

}