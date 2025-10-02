import * as ActChr from '@mythos/05.character.unit/character.action'
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest,
  context: { params: {} }
) {

  var bit = await global.MYTHOS( ActChr.INIT_CHARACTER, {})
  return Response.json(bit)

}