import * as clone from "clone-deep";
import * as Act from "./battle.action";
import { BattleModel } from "./battle.model";
import * as Buzz from "./battle.buzzer";
import State from "../99.core/state";

export function reducer(model: BattleModel = new BattleModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {

 case Act.UPDATE_BATTLE:
 return Buzz.updateBattle(clone(model), act.bale, state);

 case Act.READ_BATTLE:
 return Buzz.readBattle(clone(model), act.bale, state);

 case Act.WRITE_BATTLE:
 return Buzz.writeBattle(clone(model), act.bale, state);

 case Act.REMOVE_BATTLE:
 return Buzz.removeBattle(clone(model), act.bale, state);

 case Act.DELETE_BATTLE:
 return Buzz.deleteBattle(clone(model), act.bale, state);

 case Act.CREATE_BATTLE:
 return Buzz.createBattle(clone(model), act.bale, state);

 case Act.LIST_BATTLE:
 return Buzz.listBattle(clone(model), act.bale, state);

 case Act.INIT_BATTLE:
 return Buzz.initBattle(clone(model), act.bale, state);

case Act.OPEN_BATTLE:
 return Buzz.openBattle(clone(model), act.bale, state);

 default:
 return model;
 }
}