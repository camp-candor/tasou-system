import { Action } from "../99.core/interface/action.interface";
import  CharacterBit  from "./fce/character.bit";

// Character actions

export const INIT_CHARACTER = "[Character action] Init Character";
export class InitCharacter implements Action {
 readonly type = INIT_CHARACTER;
 constructor(public bale: CharacterBit) {}
}

export const UPDATE_CHARACTER = "[Character action] Update Character";
export class UpdateCharacter implements Action {
 readonly type = UPDATE_CHARACTER;
 constructor(public bale: CharacterBit) {}
}

export const READ_CHARACTER = "[Character action] Read Character";
export class ReadCharacter implements Action {
  readonly type = READ_CHARACTER;
  constructor(public bale: CharacterBit) {}
}

export const WRITE_CHARACTER = "[Character action] Write Character";
export class WriteCharacter implements Action {
  readonly type = WRITE_CHARACTER;
  constructor(public bale: CharacterBit) {}
}

export const REMOVE_CHARACTER = "[Character action] Remove Character";
export class RemoveCharacter implements Action {
  readonly type = REMOVE_CHARACTER;
  constructor(public bale: CharacterBit) {}
}

export const DELETE_CHARACTER = "[Character action] Delete Character";
export class DeleteCharacter implements Action {
  readonly type = DELETE_CHARACTER;
  constructor(public bale: CharacterBit) {}
}

export const CREATE_CHARACTER = "[Character action] Create Character";
export class CreateCharacter implements Action {
  readonly type = CREATE_CHARACTER;
  constructor(public bale: CharacterBit) {}
}

export const LIST_CHARACTER = "[Character action] List Character";
export class ListCharacter implements Action {
  readonly type = LIST_CHARACTER;
  constructor(public bale: CharacterBit) {}
}

export const OPEN_CHARACTER = "[Open action] Open Character";
 export class OpenCharacter implements Action {
 readonly type = OPEN_CHARACTER;
 constructor(public bale: CharacterBit) {}
 }
 
export type Actions =
  | InitCharacter
  | UpdateCharacter
  | ReadCharacter
  | WriteCharacter
  | RemoveCharacter
  | DeleteCharacter
  | CreateCharacter
  | ListCharacter
| OpenCharacter