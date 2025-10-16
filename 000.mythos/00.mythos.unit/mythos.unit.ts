import State from "../99.core/state";
import * as Act from "./mythos.action";
import MythosBit from "./fce/mythos.bit";

export default class MythosUnit {
 constructor(state: State) {
  this.state = state;
  state.dispatch({
   type: Act.INIT_MYTHOS,
   bale: null,
  });
 }

 compile = async (bale: MythosBit) => await this.state.dispatch({ type: Act.COMPILE_MYTHOS, bale });

 state: State;
}
