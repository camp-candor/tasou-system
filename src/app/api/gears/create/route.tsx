

import { createGears } from '@base/000.mythos'

import FS from 'fs-extra';
import path from 'path';

export async function GET() {

  var bit = await createGears( {fs:FS} )
  return Response.json( bit )
}




