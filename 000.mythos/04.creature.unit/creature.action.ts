import { Action } from "../99.core/interface/action.interface";
import  CreatureBit  from "./fce/creature.bit";

// Creature actions

export const INIT_CREATURE = "[Creature action] Init Creature";
export class InitCreature implements Action {
 readonly type = INIT_CREATURE;
 constructor(public bale: CreatureBit) {}
}

export const UPDATE_CREATURE = "[Creature action] Update Creature";
export class UpdateCreature implements Action {
 readonly type = UPDATE_CREATURE;
 constructor(public bale: CreatureBit) {}
}

export const READ_CREATURE = "[Creature action] Read Creature";
export class ReadCreature implements Action {
  readonly type = READ_CREATURE;
  constructor(public bale: CreatureBit) {}
}

export const WRITE_CREATURE = "[Creature action] Write Creature";
export class WriteCreature implements Action {
  readonly type = WRITE_CREATURE;
  constructor(public bale: CreatureBit) {}
}

export const REMOVE_CREATURE = "[Creature action] Remove Creature";
export class RemoveCreature implements Action {
  readonly type = REMOVE_CREATURE;
  constructor(public bale: CreatureBit) {}
}

export const DELETE_CREATURE = "[Creature action] Delete Creature";
export class DeleteCreature implements Action {
  readonly type = DELETE_CREATURE;
  constructor(public bale: CreatureBit) {}
}

export const CREATE_CREATURE = "[Creature action] Create Creature";
export class CreateCreature implements Action {
  readonly type = CREATE_CREATURE;
  constructor(public bale: CreatureBit) {}
}

export const LIST_CREATURE = "[Creature action] List Creature";
export class ListCreature implements Action {
  readonly type = LIST_CREATURE;
  constructor(public bale: CreatureBit) {}
}

export const OPEN_CREATURE = "[Open action] Open Creature";
 export class OpenCreature implements Action {
 readonly type = OPEN_CREATURE;
 constructor(public bale: CreatureBit) {}
 }

export type Actions =
  | InitCreature
  | UpdateCreature
  | ReadCreature
  | WriteCreature
  | RemoveCreature
  | DeleteCreature
  | CreateCreature
  | ListCreature
| OpenCreature