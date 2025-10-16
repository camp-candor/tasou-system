import { Action } from "../99.core/interface/action.interface";
import  BattleBit  from "./fce/battle.bit";

// Battle actions

export const INIT_BATTLE = "[Battle action] Init Battle";
export class InitBattle implements Action {
 readonly type = INIT_BATTLE;
 constructor(public bale: BattleBit) {}
}

export const UPDATE_BATTLE = "[Battle action] Update Battle";
export class UpdateBattle implements Action {
 readonly type = UPDATE_BATTLE;
 constructor(public bale: BattleBit) {}
}

export const READ_BATTLE = "[Battle action] Read Battle";
export class ReadBattle implements Action {
  readonly type = READ_BATTLE;
  constructor(public bale: BattleBit) {}
}

export const WRITE_BATTLE = "[Battle action] Write Battle";
export class WriteBattle implements Action {
  readonly type = WRITE_BATTLE;
  constructor(public bale: BattleBit) {}
}

export const REMOVE_BATTLE = "[Battle action] Remove Battle";
export class RemoveBattle implements Action {
  readonly type = REMOVE_BATTLE;
  constructor(public bale: BattleBit) {}
}

export const DELETE_BATTLE = "[Battle action] Delete Battle";
export class DeleteBattle implements Action {
  readonly type = DELETE_BATTLE;
  constructor(public bale: BattleBit) {}
}

export const CREATE_BATTLE = "[Battle action] Create Battle";
export class CreateBattle implements Action {
  readonly type = CREATE_BATTLE;
  constructor(public bale: BattleBit) {}
}

export const LIST_BATTLE = "[Battle action] List Battle";
export class ListBattle implements Action {
  readonly type = LIST_BATTLE;
  constructor(public bale: BattleBit) {}
}

export const OPEN_BATTLE = "[Open action] Open Battle";
 export class OpenBattle implements Action {
 readonly type = OPEN_BATTLE;
 constructor(public bale: BattleBit) {}
 }

export type Actions =
  | InitBattle
  | UpdateBattle
  | ReadBattle
  | WriteBattle
  | RemoveBattle
  | DeleteBattle
  | CreateBattle
  | ListBattle
| OpenBattle