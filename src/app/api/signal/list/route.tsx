import * as ActSig from '@mythos/01.signal.unit/signal.action'

export async function GET() {
  var bit = await global.MYTHOS(ActSig.LIST_SIGNAL, {} )
  return Response.json( bit )
}
