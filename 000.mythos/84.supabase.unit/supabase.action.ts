import { Action } from "../99.core/interface/action.interface";
import  SupabaseBit  from "./fce/supabase.bit";

// Supabase actions

export const INIT_SUPABASE = "[Supabase action] Init Supabase";
export class InitSupabase implements Action {
 readonly type = INIT_SUPABASE;
 constructor(public bale: SupabaseBit) {}
}

export const UPDATE_SUPABASE = "[Supabase action] Update Supabase";
export class UpdateSupabase implements Action {
 readonly type = UPDATE_SUPABASE;
 constructor(public bale: SupabaseBit) {}
}

export type Actions = | InitSupabase | UpdateSupabase ;
