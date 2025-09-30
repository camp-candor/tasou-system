import * as clone from "clone-deep";
import * as Act from "./supabase.action";
import { SupabaseModel } from "./supabase.model";
import * as Buzz from "./supabase.buzzer";
import State from "../99.core/state";

export function reducer(model: SupabaseModel = new SupabaseModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_SUPABASE:
 return Buzz.updateSupabase(clone(model), act.bale, state);

 case Act.INIT_SUPABASE:
 return Buzz.initSupabase(clone(model), act.bale, state);

 default:
 return model;
 }
}
