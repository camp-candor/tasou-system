import * as clone from "clone-deep";
import * as Act from "./conflict.action";
import { ConflictModel } from "./conflict.model";
import * as Buzz from "./conflict.buzzer";
import State from "../99.core/state";

export function reducer(model: ConflictModel = new ConflictModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {

 case Act.UPDATE_CONFLICT:
 return Buzz.updateConflict(clone(model), act.bale, state);

 case Act.READ_CONFLICT:
 return Buzz.readConflict(clone(model), act.bale, state);

 case Act.WRITE_CONFLICT:
 return Buzz.writeConflict(clone(model), act.bale, state);

 case Act.REMOVE_CONFLICT:
 return Buzz.removeConflict(clone(model), act.bale, state);

 case Act.DELETE_CONFLICT:
 return Buzz.deleteConflict(clone(model), act.bale, state);

 case Act.CREATE_CONFLICT:
 return Buzz.createConflict(clone(model), act.bale, state);

 case Act.LIST_CONFLICT:
 return Buzz.listConflict(clone(model), act.bale, state);

 case Act.INIT_CONFLICT:
 return Buzz.initConflict(clone(model), act.bale, state);

case Act.OPEN_CONFLICT:
 return Buzz.openConflict(clone(model), act.bale, state);

 default:
 return model;
 }
}