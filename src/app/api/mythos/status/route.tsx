import { statusMythos } from '@base/000.mythos'



export async function GET() {

  var bit = await statusMythos(0)
  return Response.json(bit)
}




