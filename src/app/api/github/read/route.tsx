import * as ActGit from '@mythos/85.github.unit/github.action'

export async function GET() {
  var bit = await global.MYTHOS( ActGit.READ_GITHUB, {} )
  return Response.json( bit )
}
