


import * as ActTme from "../../act/time.action";
import { MythosModel } from "../mythos.model";
import MythosBit from "../fce/mythos.bit";
import State from "../../99.core/state";


var bit, val, idx, dex, lst, dat, src;

export const initMythos = async (cpy: MythosModel, bal: MythosBit, ste: State) => {


  if ( bal != null && bal.slv != null ) bal.slv({ intBit: { idx: "init-mythos" } });

  return cpy;
};






export const createMythos = (cpy: MythosModel, bal: MythosBit, ste: State) => {

  // const { exec } = require('child_process');

  // exec('npx quasar build', async (err, stdout, stderr) => {

  //   if (bal.slv != null) bal.slv({ condBit: { idx: "create-mythos", dat: {} } });

  // })


  return cpy;
};

export const testMythos = async (cpy: MythosModel, bal: MythosBit, ste: State) => {

  //bit = await ste.bus(ActCrd.READ_CARDANO, {})

  bit = await window['TIME'](ActTme.RANDOM_TIME, { idx: 'clk00' })

  if (bal.slv != null) bal.slv({ condBit: { idx: "test-mythos", val: 1, dat: { tmeBit: bit } } });

  return cpy;
};


export const statusMythos = (cpy: MythosModel, bal: MythosBit, ste: State) => {

  bal.slv({ mytBit: { idx: "status-mythos", val: 1 } });

  return cpy;
};



var patch = (ste, type, bale) => ste.dispatch({ type, bale });
