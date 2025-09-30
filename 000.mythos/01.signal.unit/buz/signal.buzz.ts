import { SignalModel } from "../signal.model";
import SignalBit from "../fce/signal.bit";
import State from "../../99.core/state";

import * as ActSig from "../../01.signal.unit/signal.action";
import * as ActCol from "../../97.collect.unit/collect.action";
import TagBit from "../fce/tag.bit";

var bit, dat, lst;

export const initSignal = async (cpy: SignalModel, bal: SignalBit, ste: State) => {


    lst = cpy.signalList
    lst.forEach((itm) => { ste.hunt(ActSig.WRITE_SIGNAL, { idx:itm.src }) })

    
    bal.slv({ intBit: { idx: "init-signal" } });

    return cpy;
};

export const updateSignal = async (cpy: SignalModel, bal: SignalBit, ste: State) => {

    bal.slv({ sigBit: { idx: "update-signal" } });
    return cpy;
};

export const createSignal = async (cpy: SignalModel, bal: SignalBit, ste: State) => {

    if (bal.dat == null) bal.dat = {}
    var datBit: TagBit = { idx: bal.idx, src: null }

    bal.slv({ sigBit: { idx: "create-signal", dat: datBit } });
    return cpy;

};

export const readSignal = async (cpy: SignalModel, bal: SignalBit, ste: State) => {

    if (bal.idx == null) bal.idx = 'sig00';

    // The READ_COLLECT action is smart: it ensures data exists by attempting a write/create if not found.
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActSig.CREATE_SIGNAL });

    bal.slv({ sigBit: { idx: "read-signal" } });

    return cpy;
};

export const writeSignal = async (cpy: SignalModel, bal: SignalBit, ste: State) => {

    if (bal.dat == null) bal.dat = {}
    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, dat: bal.dat, bit: ActSig.CREATE_SIGNAL });

    bal.slv({ sigBit: { idx: "write-signal", dat: bit.clcBit.dat } });
    return cpy;

};

export const removeSignal = async (cpy: SignalModel, bal: SignalBit, ste: State) => {
    bit = await ste.hunt(ActCol.REMOVE_COLLECT, { idx: bal.idx, bit: ActSig.CREATE_SIGNAL });

    bal.slv({ sigBit: { idx: "remove-signal", dat: bit.clcBit.dat } });
    return cpy;
};

export const deleteSignal = (cpy: SignalModel, bal: SignalBit, ste: State) => {

    bal.slv({ sigBit: { idx: "delete-signal" } });
    return cpy;
};

export const listSignal = async (cpy: SignalModel, bal: SignalBit, ste: State) => {

    dat = null

    bit = await ste.hunt(ActCol.LIST_COLLECT, { val: 0, bit: ActSig.LIST_SIGNAL })
    lst = bit.clcBit.lst

    bal.slv({ sigBit: { idx: 'list-signal', lst } });

    return cpy;
};