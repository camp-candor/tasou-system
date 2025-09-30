import { Action } from "../99.core/interface/action.interface";
import  FrameBit  from "./fce/frame.bit";
import  SignalBit  from "./fce/signal.bit";

// Frame actions

export const INIT_FRAME = "[Frame action] Init Frame";
export class InitFrame implements Action {
 readonly type = INIT_FRAME;
 constructor(public bale: FrameBit) {}
}

export const UPDATE_FRAME = "[Frame action] Update Frame";
export class UpdateFrame implements Action {
 readonly type = UPDATE_FRAME;
 constructor(public bale: FrameBit) {}
}

export const LIST_FRAME = "[Frame action] List Frame";
export class ListFrame implements Action {
 readonly type = LIST_FRAME;
 constructor(public bale: SignalBit) {}
}

export const READ_FRAME = "[Frame action] Read Frame";
export class ReadFrame implements Action {
 readonly type = READ_FRAME;
 constructor(public bale: SignalBit) {}
}

export const WRITE_FRAME = "[Frame action] Write Frame";
export class WriteFrame implements Action {
 readonly type = WRITE_FRAME;
 constructor(public bale: SignalBit) {}
}

export const REMOVE_FRAME = "[Frame action] Remove Frame";
export class RemoveFrame implements Action {
 readonly type = REMOVE_FRAME;
 constructor(public bale: SignalBit) {}
}

export const DELETE_FRAME = "[Frame action] Delete Frame";
export class DeleteFrame implements Action {
 readonly type = DELETE_FRAME;
 constructor(public bale: SignalBit) {}
}

export const CREATE_FRAME = "[Frame action] Create Frame";
export class CreateFrame implements Action {
 readonly type = CREATE_FRAME;
 constructor(public bale: SignalBit) {}
}


export type Actions = | InitFrame | UpdateFrame | ListFrame | ReadFrame | WriteFrame | RemoveFrame | DeleteFrame | CreateFrame;
