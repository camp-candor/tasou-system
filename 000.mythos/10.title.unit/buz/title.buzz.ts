import { TitleModel } from "../title.model";
import TitleBit from "../fce/title.bit";
import State from "../../99.core/state";

import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActTtl from "../title.action";
import TtlBit from "../fce/ttl.bit";

var bit, dat, lst;

export const initTitle = (cpy: TitleModel, bal: TitleBit, ste: State) => {
    debugger
    return cpy;
};

export const updateTitle = (cpy: TitleModel, bal: TitleBit, ste: State) => {
    return cpy;
};


export const readTitle = async (cpy: TitleModel, bal: TitleBit, ste: State) => {

    if (bal.idx == null) bal.idx = 'ttl00';

    // The READ_COLLECT action is smart: it ensures data exists by attempting a write/create if not found.
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActTtl.CREATE_TITLE });

    if (bal.slv != null) bal.slv({ ttlBit: { idx: "read-title", dat: bit.clcBit.dat } });

    return cpy;
};

export const writeTitle = async (cpy: TitleModel, bal: TitleBit, ste: State) => {

    if (bal.dat == null) bal.dat = {}
    if (bal.dat.dat == null) bal.dat.dat = {}

    //if (bal.ttl != null) bal.dat.ttl = bal.ttl;


    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, dat: bal.dat, bit: ActTtl.CREATE_TITLE });


    bal.slv({ ttlBit: { idx: "write-title", dat: bit.clcBit.dat } });
    return cpy;
};


export const removeTitle = async (cpy: TitleModel, bal: TitleBit, ste: State) => {

    bit = await ste.hunt(ActCol.REMOVE_COLLECT, { idx: bal.idx, bit: ActTtl.DELETE_TITLE });

    bal.slv({ ttlBit: { idx: "remove-title", dat: bit.clcBit.dat } });
    return cpy;
};

export const deleteTitle = (cpy: TitleModel, bal: TitleBit, ste: State) => {
    debugger
    return cpy;
};


export const createTitle = (cpy: TitleModel, bal: TitleBit, ste: State) => {

    if (bal.dat == null) bal.dat = {}

    if (bal.dat.ttl == null) {

        var ttlBit: TtlBit = { idx: bal.idx, src: null }
        bal.dat.ttl = ttlBit;

    }

    var ttl = bal.dat.ttl;
    ttl.idx = bal.idx

    for (var key in ttl) {

        if (key == 'idx') continue

        if (ttl[key] == '' || ttl[key] == null) ttl[key] = 0
        ttl[key] = Number(ttl[key])
    }

    ttl

    //bit = await ste.hunt(ActClk.REFRESH_CLOCK, { val, dat: { clk } })
    //dat = bit.ttlBit.dat


    bal.slv({ ttlBit: { idx: "create-title", dat: ttl } });

    return cpy;
};


export const listTitle = async (cpy: TitleModel, bal: TitleBit, ste: State) => {

    dat = null

    bit = await ste.hunt(ActCol.LIST_COLLECT, { val: 0, bit: ActTtl.LIST_TITLE })
    lst = bit.clcBit.lst

    bal.slv({ ttlBit: { idx: 'list-title', lst } });

    return cpy;
};
