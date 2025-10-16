import { MythosModel } from "../mythos.model";
import MythosBit from "../fce/mythos.bit";
import State from "../../99.core/state";

export const errorMythos = (clone: MythosModel, bal: MythosBit, ste: State) => {
 clone.error = bal.src;
  clone.errorLevel = bal.val;
  return clone;
};