import Model from "./99.core/interface/model.interface";

import MythosUnit from "./00.mythos.unit/mythos.unit";
import SignalUnit from "./01.signal.unit/signal.unit";
import GearsUnit from "./02.gears.unit/gears.unit";
import DatumUnit from "./03.datum.unit/datum.unit";
import TitleUnit from "./10.title.unit/title.unit";
import FrameUnit from "./20.frame.unit/frame.unit";
import OpenrouterUnit from "./81.openrouter.unit/openrouter.unit";
import SupabaseUnit from "./84.supabase.unit/supabase.unit";
import GithubUnit from "./85.github.unit/github.unit";
import CollectUnit from "./97.collect.unit/collect.unit";
import BusUnit from "./99.bus.unit/bus.unit";


import Mythos from "./00.mythos.unit/fce/mythos.interface";
import { MythosModel } from "./00.mythos.unit/mythos.model";
import Signal from "./01.signal.unit/fce/signal.interface";
import { SignalModel } from "./01.signal.unit/signal.model";
import Gears from "./02.gears.unit/fce/gears.interface";
import { GearsModel } from "./02.gears.unit/gears.model";
import Datum from "./03.datum.unit/fce/datum.interface";
import { DatumModel } from "./03.datum.unit/datum.model";
import Title from "./10.title.unit/fce/title.interface";
import { TitleModel } from "./10.title.unit/title.model";
import Frame from "./20.frame.unit/fce/frame.interface";
import { FrameModel } from "./20.frame.unit/frame.model";
import Openrouter from "./81.openrouter.unit/fce/openrouter.interface";
import { OpenrouterModel } from "./81.openrouter.unit/openrouter.model";
import Supabase from "./84.supabase.unit/fce/supabase.interface";
import { SupabaseModel } from "./84.supabase.unit/supabase.model";
import Github from "./85.github.unit/fce/github.interface";
import { GithubModel } from "./85.github.unit/github.model";
import Collect from "./97.collect.unit/fce/collect.interface";
import { CollectModel } from "./97.collect.unit/collect.model";
import Bus from "./99.bus.unit/fce/bus.interface";
import { BusModel } from "./99.bus.unit/bus.model";


export const list: Array<any> = [MythosUnit,SignalUnit,GearsUnit,DatumUnit,TitleUnit,FrameUnit,OpenrouterUnit,SupabaseUnit,GithubUnit,CollectUnit,BusUnit];

import * as reduceFromMythos from "./00.mythos.unit/mythos.reduce";
import * as reduceFromSignal from "./01.signal.unit/signal.reduce";
import * as reduceFromGears from "./02.gears.unit/gears.reduce";
import * as reduceFromDatum from "./03.datum.unit/datum.reduce";
import * as reduceFromTitle from "./10.title.unit/title.reduce";
import * as reduceFromFrame from "./20.frame.unit/frame.reduce";
import * as reduceFromOpenrouter from "./81.openrouter.unit/openrouter.reduce";
import * as reduceFromSupabase from "./84.supabase.unit/supabase.reduce";
import * as reduceFromGithub from "./85.github.unit/github.reduce";
import * as reduceFromCollect from "./97.collect.unit/collect.reduce";
import * as reduceFromBus from "./99.bus.unit/bus.reduce";


export const reducer: any = {
 mythos : reduceFromMythos.reducer, 
signal : reduceFromSignal.reducer, 
gears : reduceFromGears.reducer, 
datum : reduceFromDatum.reducer, 
title : reduceFromTitle.reducer, 
frame : reduceFromFrame.reducer, 
openrouter : reduceFromOpenrouter.reducer, 
supabase : reduceFromSupabase.reducer, 
github : reduceFromGithub.reducer, 
collect : reduceFromCollect.reducer, 
bus : reduceFromBus.reducer, 

};

export default class UnitData implements Model {
 
 mythos : Mythos = new MythosModel();
signal : Signal = new SignalModel();
gears : Gears = new GearsModel();
datum : Datum = new DatumModel();
title : Title = new TitleModel();
frame : Frame = new FrameModel();
openrouter : Openrouter = new OpenrouterModel();
supabase : Supabase = new SupabaseModel();
github : Github = new GithubModel();
collect : Collect = new CollectModel();
bus : Bus = new BusModel();

 
}
