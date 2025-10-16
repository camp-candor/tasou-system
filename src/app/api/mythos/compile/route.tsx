import { compileMythos } from '@base/000.mythos'

import FS from 'fs-extra';

export async function GET() {

  var bit = await compileMythos( {fs:FS} )
  return Response.json(bit)
}




