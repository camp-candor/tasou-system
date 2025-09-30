import { Action } from "../99.core/interface/action.interface";
import  DatumBit  from "./fce/datum.bit";

// Datum actions

export const INIT_DATUM = "[Datum action] Init Datum";
export class InitDatum implements Action {
 readonly type = INIT_DATUM;
 constructor(public bale: DatumBit) {}
}

export const UPDATE_DATUM = "[Datum action] Update Datum";
export class UpdateDatum implements Action {
 readonly type = UPDATE_DATUM;
 constructor(public bale: DatumBit) {}
}

export const READ_DATUM = "[Datum action] Read Datum";
export class ReadDatum implements Action {
  readonly type = READ_DATUM;
  constructor(public bale: DatumBit) {}
}

export const WRITE_DATUM = "[Datum action] Write Datum";
export class WriteDatum implements Action {
  readonly type = WRITE_DATUM;
  constructor(public bale: DatumBit) {}
}

export const REMOVE_DATUM = "[Datum action] Remove Datum";
export class RemoveDatum implements Action {
  readonly type = REMOVE_DATUM;
  constructor(public bale: DatumBit) {}
}

export const DELETE_DATUM = "[Datum action] Delete Datum";
export class DeleteDatum implements Action {
  readonly type = DELETE_DATUM;
  constructor(public bale: DatumBit) {}
}

export const CREATE_DATUM = "[Datum action] Create Datum";
export class CreateDatum implements Action {
  readonly type = CREATE_DATUM;
  constructor(public bale: DatumBit) {}
}

export const LIST_DATUM = "[Datum action] List Datum";
export class ListDatum implements Action {
  readonly type = LIST_DATUM;
  constructor(public bale: DatumBit) {}
}

export const OPEN_DATUM = "[Open action] Open Datum";
 export class OpenDatum implements Action {
 readonly type = OPEN_DATUM;
 constructor(public bale: DatumBit) {}
 }
 
export type Actions =
  | InitDatum
  | UpdateDatum
  | ReadDatum
  | WriteDatum
  | RemoveDatum
  | DeleteDatum
  | CreateDatum
  | ListDatum
| OpenDatum