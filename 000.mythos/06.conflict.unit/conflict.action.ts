import { Action } from "../99.core/interface/action.interface";
import  ConflictBit  from "./fce/conflict.bit";

// Conflict actions

export const INIT_CONFLICT = "[Conflict action] Init Conflict";
export class InitConflict implements Action {
 readonly type = INIT_CONFLICT;
 constructor(public bale: ConflictBit) {}
}

export const UPDATE_CONFLICT = "[Conflict action] Update Conflict";
export class UpdateConflict implements Action {
 readonly type = UPDATE_CONFLICT;
 constructor(public bale: ConflictBit) {}
}

export const READ_CONFLICT = "[Conflict action] Read Conflict";
export class ReadConflict implements Action {
  readonly type = READ_CONFLICT;
  constructor(public bale: ConflictBit) {}
}

export const WRITE_CONFLICT = "[Conflict action] Write Conflict";
export class WriteConflict implements Action {
  readonly type = WRITE_CONFLICT;
  constructor(public bale: ConflictBit) {}
}

export const REMOVE_CONFLICT = "[Conflict action] Remove Conflict";
export class RemoveConflict implements Action {
  readonly type = REMOVE_CONFLICT;
  constructor(public bale: ConflictBit) {}
}

export const DELETE_CONFLICT = "[Conflict action] Delete Conflict";
export class DeleteConflict implements Action {
  readonly type = DELETE_CONFLICT;
  constructor(public bale: ConflictBit) {}
}

export const CREATE_CONFLICT = "[Conflict action] Create Conflict";
export class CreateConflict implements Action {
  readonly type = CREATE_CONFLICT;
  constructor(public bale: ConflictBit) {}
}

export const LIST_CONFLICT = "[Conflict action] List Conflict";
export class ListConflict implements Action {
  readonly type = LIST_CONFLICT;
  constructor(public bale: ConflictBit) {}
}

export const OPEN_CONFLICT = "[Open action] Open Conflict";
 export class OpenConflict implements Action {
 readonly type = OPEN_CONFLICT;
 constructor(public bale: ConflictBit) {}
 }

export type Actions =
  | InitConflict
  | UpdateConflict
  | ReadConflict
  | WriteConflict
  | RemoveConflict
  | DeleteConflict
  | CreateConflict
  | ListConflict
| OpenConflict