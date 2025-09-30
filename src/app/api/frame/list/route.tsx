import * as ActFrm from '@mythos/20.frame.unit/frame.action'
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest,
  context: { params: {} }
) {

  var bit = await global.MYTHOS(ActFrm.LIST_FRAME, {})
  return Response.json(bit)

}
