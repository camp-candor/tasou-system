import * as clone from "clone-deep";
import * as Act from "./openrouter.action";
import { OpenrouterModel } from "./openrouter.model";
import * as Buzz from "./openrouter.buzzer";
import State from "../99.core/state";

export function reducer(model: OpenrouterModel = new OpenrouterModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_OPENROUTER:
 return Buzz.updateOpenrouter(clone(model), act.bale, state);

 case Act.INIT_OPENROUTER:
 return Buzz.initOpenrouter(clone(model), act.bale, state);

 default:
 return model;
 }
}
