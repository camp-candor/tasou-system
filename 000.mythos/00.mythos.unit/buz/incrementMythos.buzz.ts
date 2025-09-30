import * as ActClk from "../../act/clock.action";
import * as ActTme from "../../act/time.action";

import * as ActInc from "../../act/increment.action";
import * as ActBby from "../../act/babylon.action";
import * as ActMku from "../../act/miku.action";
import * as ActScr from "../../act/screen.action";

import * as ActPrg from "../../act/progress.action";

import { MythosModel } from "../mythos.model";
import MythosBit from "../fce/mythos.bit";
import State from "../../99.core/state";

var bit, val, idx, dex, lst, dat, src;


export const incrementMythos = (cpy: MythosModel, bal: MythosBit, ste: State) => {

 // cpy.idxInc = bal.src

  bal.slv({ ctlBit: { idx: "increment-mythos", src: bal.src } });

  return cpy;
};

