import { Action } from "../99.core/interface/action.interface";
import  OpenrouterBit  from "./fce/openrouter.bit";

// Openrouter actions

export const INIT_OPENROUTER = "[Openrouter action] Init Openrouter";
export class InitOpenrouter implements Action {
 readonly type = INIT_OPENROUTER;
 constructor(public bale: OpenrouterBit) {}
}

export const UPDATE_OPENROUTER = "[Openrouter action] Update Openrouter";
export class UpdateOpenrouter implements Action {
 readonly type = UPDATE_OPENROUTER;
 constructor(public bale: OpenrouterBit) {}
}

export type Actions = | InitOpenrouter | UpdateOpenrouter ;
