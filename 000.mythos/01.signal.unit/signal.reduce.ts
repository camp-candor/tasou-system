import * as clone from "clone-deep";
import * as Act from "./signal.action";
import { SignalModel } from "./signal.model";
import * as Buzz from "./signal.buzzer";
import State from "../99.core/state";

export function reducer(model: SignalModel = new SignalModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_SIGNAL:
 return Buzz.updateSignal(clone(model), act.bale, state);

 case Act.READ_SIGNAL:
 return Buzz.readSignal(clone(model), act.bale, state);

 case Act.WRITE_SIGNAL:
 return Buzz.writeSignal(clone(model), act.bale, state);

 case Act.REMOVE_SIGNAL:
 return Buzz.removeSignal(clone(model), act.bale, state);

 case Act.DELETE_SIGNAL:
 return Buzz.deleteSignal(clone(model), act.bale, state);

 case Act.CREATE_SIGNAL:
 return Buzz.createSignal(clone(model), act.bale, state);

 case Act.LIST_SIGNAL:
 return Buzz.listSignal(clone(model), act.bale, state);

 case Act.INIT_SIGNAL:
 return Buzz.initSignal(clone(model), act.bale, state);

 default:
 return model;
 }
}
