import { Action } from "../99.core/interface/action.interface";
import  SignalBit  from "./fce/signal.bit";

// Signal actions

export const INIT_SIGNAL = "[Signal action] Init Signal";
export class InitSignal implements Action {
 readonly type = INIT_SIGNAL;
 constructor(public bale: SignalBit) {}
}

export const UPDATE_SIGNAL = "[Signal action] Update Signal";
export class UpdateSignal implements Action {
 readonly type = UPDATE_SIGNAL;
 constructor(public bale: SignalBit) {}
}

export const READ_SIGNAL = "[Signal action] Read Signal";
export class ReadSignal implements Action {
  readonly type = READ_SIGNAL;
  constructor(public bale: SignalBit) {}
}

export const WRITE_SIGNAL = "[Signal action] Write Signal";
export class WriteSignal implements Action {
  readonly type = WRITE_SIGNAL;
  constructor(public bale: SignalBit) {}
}

export const REMOVE_SIGNAL = "[Signal action] Remove Signal";
export class RemoveSignal implements Action {
  readonly type = REMOVE_SIGNAL;
  constructor(public bale: SignalBit) {}
}

export const DELETE_SIGNAL = "[Signal action] Delete Signal";
export class DeleteSignal implements Action {
  readonly type = DELETE_SIGNAL;
  constructor(public bale: SignalBit) {}
}

export const CREATE_SIGNAL = "[Signal action] Create Signal";
export class CreateSignal implements Action {
  readonly type = CREATE_SIGNAL;
  constructor(public bale: SignalBit) {}
}

export const LIST_SIGNAL = "[Signal action] List Signal";
export class ListSignal implements Action {
  readonly type = LIST_SIGNAL;
  constructor(public bale: SignalBit) {}
}

export type Actions =
  | InitSignal
  | UpdateSignal
  | ReadSignal
  | WriteSignal
  | RemoveSignal
  | DeleteSignal
  | CreateSignal
  | ListSignal;
