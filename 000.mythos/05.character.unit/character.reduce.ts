import * as clone from "clone-deep";
import * as Act from "./character.action";
import { CharacterModel } from "./character.model";
import * as Buzz from "./character.buzzer";
import State from "../99.core/state";

export function reducer(model: CharacterModel = new CharacterModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_CHARACTER:
 return Buzz.updateCharacter(clone(model), act.bale, state);

 case Act.READ_CHARACTER:
 return Buzz.readCharacter(clone(model), act.bale, state);

 case Act.WRITE_CHARACTER:
 return Buzz.writeCharacter(clone(model), act.bale, state);

 case Act.REMOVE_CHARACTER:
 return Buzz.removeCharacter(clone(model), act.bale, state);

 case Act.DELETE_CHARACTER:
 return Buzz.deleteCharacter(clone(model), act.bale, state);

 case Act.CREATE_CHARACTER:
 return Buzz.createCharacter(clone(model), act.bale, state);

 case Act.LIST_CHARACTER:
 return Buzz.listCharacter(clone(model), act.bale, state);

 case Act.INIT_CHARACTER:
 return Buzz.initCharacter(clone(model), act.bale, state);

case Act.OPEN_CHARACTER:
 return Buzz.openCharacter(clone(model), act.bale, state);
 
 default:
 return model;
 }
}
