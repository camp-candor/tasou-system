import { updateOpenrouter } from '@base/000.mythos'


import FS from 'fs-extra';

export async function GET() {

  var bit = await updateOpenrouter( {fs:FS} )
  return Response.json( bit )
}




