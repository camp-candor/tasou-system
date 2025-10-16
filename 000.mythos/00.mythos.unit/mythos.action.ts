import { Action } from "../99.core/interface/action.interface";
import  MythosBit  from "./fce/mythos.bit";

// Mythos actions

export const INIT_MYTHOS = "[Mythos action] Init Mythos";
export class InitMythos implements Action {
 readonly type = INIT_MYTHOS;
 constructor(public bale: MythosBit) {}
}

export const UPDATE_MYTHOS = "[Mythos action] Update Mythos";
export class UpdateMythos implements Action {
 readonly type = UPDATE_MYTHOS;
 constructor(public bale: MythosBit) {}
}

export const OPEN_MYTHOS = "[Open action] Open Mythos";
 export class OpenMythos implements Action {
 readonly type = OPEN_MYTHOS;
 constructor(public bale: MythosBit) {}
 }

export const CREATE_MYTHOS = "[Create action] Create Mythos";
 export class CreateMythos implements Action {
 readonly type = CREATE_MYTHOS;
 constructor(public bale: MythosBit) {}
 }

export const TEST_MYTHOS = "[Test action] Test Mythos";
 export class TestMythos implements Action {
 readonly type = TEST_MYTHOS;
 constructor(public bale: MythosBit) {}
 }

export const ACCESS_MYTHOS = "[Access action] Access Mythos";
 export class AccessMythos implements Action {
 readonly type = ACCESS_MYTHOS;
 constructor(public bale: MythosBit) {}
 }

export const OUTPUT_MYTHOS = "[Output action] Output Mythos";
 export class OutputMythos implements Action {
 readonly type = OUTPUT_MYTHOS;
 constructor(public bale: MythosBit) {}
 }

export const ADVANCE_MYTHOS = "[Advance action] Advance Mythos";
 export class AdvanceMythos implements Action {
 readonly type = ADVANCE_MYTHOS;
 constructor(public bale: MythosBit) {}
 }

export const INCREMENT_MYTHOS = "[Increment action] Increment Mythos";
 export class IncrementMythos implements Action {
 readonly type = INCREMENT_MYTHOS;
 constructor(public bale: MythosBit) {}
 }

 export const DATA_MYTHOS = "[Mythos action] Data Mythos";
 export class DataMythos implements Action {
 readonly type = DATA_MYTHOS;
 constructor(public bale: MythosBit) {}
 }

export const STATUS_MYTHOS = "[Status action] Status Mythos";
 export class StatusMythos implements Action {
 readonly type = STATUS_MYTHOS;
 constructor(public bale: MythosBit) {}
 }
 
export const COMPILE_MYTHOS = "[Compile action] Compile Mythos";
 export class CompileMythos implements Action {
 readonly type = COMPILE_MYTHOS;
 constructor(public bale: MythosBit) {}
 }

export const ERROR_MYTHOS = "[Error action] Error Mythos";
 export class ErrorMythos implements Action {
 readonly type = ERROR_MYTHOS;
 constructor(public bale: MythosBit) {}
 }

export type Actions = | InitMythos | UpdateMythos
| OpenMythos
| CreateMythos
| TestMythos
| AccessMythos
| OutputMythos
| AdvanceMythos
| IncrementMythos
| DataMythos
| StatusMythos
| CompileMythos
| ErrorMythos