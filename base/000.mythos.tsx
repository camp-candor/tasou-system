'use server'

import { mythos } from '@mythos/000.mythos.pvt';
import * as ActMth from "@mythos/00.mythos.unit/mythos.action"
import * as ActSig from "@mythos/01.signal.unit/signal.action"
import * as ActGrs from "@mythos/02.gears.unit/gears.action"
import * as ActDat from "@mythos/03.datum.unit/datum.action"
import * as ActFrm from "@mythos/20.frame.unit/frame.action"
import * as ActOpr from "@mythos/81.openrouter.unit/openrouter.action"
import * as ActGit from "@mythos/85.github.unit/github.action"

var dex = 0;

export const listGithub = async (dat) => {
  var bit = await mythos(ActGit.LIST_GITHUB, {});
  dex += 1;
  return bit
}

export const listFrame = async (dat) => {
  var bit = await mythos(ActFrm.LIST_FRAME, {});
  return bit
}

export const listSignal = async (dat) => {
  var bit = await mythos(ActSig.LIST_SIGNAL, {});
  dex += 1;
  return bit
}

export const writeGithub = async (dat) => {
  var bit = await mythos(ActGit.WRITE_GITHUB, {});
  dex += 1;
  return bit
}


export const listDatum = async (dat) => {
  var bit = await mythos(ActDat.LIST_DATUM, {});
  dex += 1;
  return bit
}

export const commitGithub = async (dat) => {
  var bit = await mythos(ActGit.COMMIT_GITHUB, {});
  dex += 1;
  return bit
}

export const createGears = async (dat) => {
  var bit = await mythos(ActGrs.CREATE_GEARS, { dat });
  dex += 1;
  return bit
}

export const searchGears = async (dat) => {
  var bit = await mythos(ActGrs.SEARCH_GEARS, { dat });
  dex += 1;
  return bit
}

export const updateOpenrouter = async (dat) => {
  var bit = await mythos(ActOpr.UPDATE_OPENROUTER, { dat });
  dex += 1;
  return bit
}

export const statusMythos = async (val) => {
  var bit = await mythos(ActMth.STATUS_MYTHOS, { val: 0 });
  dex += 1;
  return bit
}

export const initMythos = async (val) => {
  global.MYTHOS = mythos
  var bit = await global.MYTHOS(ActMth.INIT_MYTHOS, { val: 0 });
  dex += 1;
  return bit
}

export const openDatum = async (val) => {
  var bit = await global.MYTHOS(ActDat.OPEN_DATUM, { val: 0 });
  dex += 1;
  return bit
}

export const initSignal = async (val) => {
  var bit = await mythos(ActSig.INIT_SIGNAL, { val });
  dex += 1;
  return bit
}


