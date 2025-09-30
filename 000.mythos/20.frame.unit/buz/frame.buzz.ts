import { FrameModel } from "../frame.model";
import FrameBit from "../fce/frame.bit";
import State from "../../99.core/state";
import SignalBit from "../fce/signal.bit";
import * as Act from '../frame.action'
import * as ActCol from "../../97.collect.unit/collect.action";

let bit, dat, lst, dex, src, idx;

export const initFrame = (cpy: FrameModel, bal: FrameBit, ste: State) => {
    debugger
    return cpy;
};

export const updateFrame = (cpy: FrameModel, bal: FrameBit, ste: State) => {
    return cpy;
};

export const listFrame = async (cpy: FrameModel, bal: SignalBit, ste: State) => {

    dat = null

    bit = await ste.hunt(ActCol.LIST_COLLECT, { val: 0, bit: Act.LIST_FRAME })
    lst = bit.clcBit.lst

    bal.slv({ frmBit: { idx: 'list-frame', lst } });

    return cpy;
};


export const createFrame = async (cpy: FrameModel, bal: SignalBit, ste: State) => {

    if (bal.dat == null) bal.dat = {}

    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, dat: bal.dat, bit: Act.CREATE_FRAME });

    dat = bit.clcBit.dat

    bal.slv({ frmBit: { idx: "create-frame", dat: bit.clcBit.dat } });
    return cpy;
};

export const readFrame = async (cpy: FrameModel, bal: SignalBit, ste: State) => {

    if (bal.idx == null) bal.idx = 'frm00';

    // The READ_COLLECT action is smart: it ensures data exists by attempting a write/create if not found.
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: Act.CREATE_FRAME });

    bal.slv({ frmBit: { idx: "read-frame" } });

    return cpy;
};

export const writeFrame = async (cpy: FrameModel, bal: SignalBit, ste: State) => {

    if (bal.dat == null) bal.dat = {}
    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, dat: bal.dat, bit: Act.CREATE_FRAME });

    dat = bit.clcBit.dat

    bal.slv({ frmBit: { idx: "write-frame", dat: bit.clcBit.dat } });
    return cpy;

};

export const removeFrame = async (cpy: FrameModel, bal: SignalBit, ste: State) => {
    bit = await ste.hunt(ActCol.REMOVE_COLLECT, { idx: bal.idx, bit: Act.CREATE_FRAME });
    bal.slv({ frmBit: { idx: "remove-frame", dat: bit.clcBit.dat } });
    return cpy;
};

export const deleteFrame = async (cpy: FrameModel, bal: SignalBit, ste: State) => {
    bit = await ste.hunt(ActCol.DELETE_COLLECT, { idx: bal.idx, bit: Act.CREATE_FRAME });
    bal.slv({ frmBit: { idx: "delete-frame", dat: bit.clcBit.dat } });
    return cpy;
};