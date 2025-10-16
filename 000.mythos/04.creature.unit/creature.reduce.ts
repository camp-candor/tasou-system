import * as clone from "clone-deep";
import * as Act from "./creature.action";
import { CreatureModel } from "./creature.model";
import * as Buzz from "./creature.buzzer";
import State from "../99.core/state";

export function reducer(model: CreatureModel = new CreatureModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {

 case Act.UPDATE_CREATURE:
 return Buzz.updateCreature(clone(model), act.bale, state);

 case Act.READ_CREATURE:
 return Buzz.readCreature(clone(model), act.bale, state);

 case Act.WRITE_CREATURE:
 return Buzz.writeCreature(clone(model), act.bale, state);

 case Act.REMOVE_CREATURE:
 return Buzz.removeCreature(clone(model), act.bale, state);

 case Act.DELETE_CREATURE:
 return Buzz.deleteCreature(clone(model), act.bale, state);

 case Act.CREATE_CREATURE:
 return Buzz.createCreature(clone(model), act.bale, state);

 case Act.LIST_CREATURE:
 return Buzz.listCreature(clone(model), act.bale, state);

 case Act.INIT_CREATURE:
 return Buzz.initCreature(clone(model), act.bale, state);

case Act.OPEN_CREATURE:
 return Buzz.openCreature(clone(model), act.bale, state);

 default:
 return model;
 }
}