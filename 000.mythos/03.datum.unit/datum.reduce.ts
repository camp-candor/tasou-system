import * as clone from "clone-deep";
import * as Act from "./datum.action";
import { DatumModel } from "./datum.model";
import * as Buzz from "./datum.buzzer";
import State from "../99.core/state";

export function reducer(model: DatumModel = new DatumModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_DATUM:
 return Buzz.updateDatum(clone(model), act.bale, state);

 case Act.READ_DATUM:
 return Buzz.readDatum(clone(model), act.bale, state);

 case Act.WRITE_DATUM:
 return Buzz.writeDatum(clone(model), act.bale, state);

 case Act.REMOVE_DATUM:
 return Buzz.removeDatum(clone(model), act.bale, state);

 case Act.DELETE_DATUM:
 return Buzz.deleteDatum(clone(model), act.bale, state);

 case Act.CREATE_DATUM:
 return Buzz.createDatum(clone(model), act.bale, state);

 case Act.LIST_DATUM:
 return Buzz.listDatum(clone(model), act.bale, state);

 case Act.INIT_DATUM:
 return Buzz.initDatum(clone(model), act.bale, state);

case Act.OPEN_DATUM:
 return Buzz.openDatum(clone(model), act.bale, state);
 
 default:
 return model;
 }
}
