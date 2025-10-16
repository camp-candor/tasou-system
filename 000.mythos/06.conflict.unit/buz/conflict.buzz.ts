import { ConflictModel } from "../conflict.model";
import ConflictBit from "../fce/conflict.bit";
import ConBit from "../fce/con.bit";
import State from "../../99.core/state";

import * as ActCon from "../../06.conflict.unit/conflict.action";

import * as ActGit from "../../85.github.unit/github.action";


import * as ActCol from "../../97.collect.unit/collect.action";

var bit, con, lst, dex, src, idx;

export const initConflict = (cpy: ConflictModel, bal: ConflictBit, ste: State) => {
    debugger
    return cpy;
};

export const openConflict = async (cpy: ConflictModel, bal: ConflictBit, ste: State) => {

    bit = await ste.hunt(ActGit.LIST_GITHUB, {})

    const processItem = async (item) => {

        item
        idx = item.name
        src = item.url

        //bit = await ste.hunt(ActGit.READ_GITHUB, { src })
        //var content = bit.gitBit.dat
        bit = await ste.hunt(ActCon.WRITE_CONFLICT, { idx,  dat: { src } })

        //bit =
        console.log(`add conflict: ${idx}`);
        // Simulate an asynchronous task (e.g., waiting for 50ms)
        //await new Promise(resolve => setTimeout(resolve, 50));
        //console.log(`...Finished processing item: ${item}`);
    };

    const lst = bit.gitBit.lst; // e.g., ['A', 'B', 'C']


    try {
        for (const item of lst) {
            await processItem(item);
        }
        bal.slv({ conBit: { idx: "open-conflict", dat: {} } });
    } catch (error) {
        console.error("An error occurred during processing:", error);
        // Handle the error state here.
    }



    return cpy;
};

export const updateConflict = async (cpy: ConflictModel, bal: ConflictBit, ste: State) => {

    bal.slv({ conBit: { idx: "update-conflict" } });
    return cpy;
};

export const createConflict = async (cpy: ConflictModel, bal: ConflictBit, ste: State) => {

    var content = bal.dat.content

    if (bal.dat == null) bal.dat = {}
    var conBit: ConBit = { idx: bal.idx, src: bal.dat.src }
    conBit.label = 'label'
    conBit.url = 'url'
    conBit.update = 'update'
    conBit.tags = []
    conBit.creators = []
    conBit.muse = []

    conBit




    bal.slv({ conBit: { idx: "create-conflict", dat: conBit } });
    return cpy;

};

export const readConflict = async (cpy: ConflictModel, bal: ConflictBit, ste: State) => {

    if (bal.idx == null) bal.idx = 'con00';

    // The READ_COLLECT action is smart: it ensures data exists by attempting a write/create if not found.
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActCon.CREATE_CONFLICT });

    bal.slv({ conBit: { idx: "read-conflict" } });

    return cpy;
};

export const writeConflict = async (cpy: ConflictModel, bal: ConflictBit, ste: State) => {

    if (bal.dat == null) bal.dat = {}
    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, dat: bal.dat, bit: ActCon.CREATE_CONFLICT });

    con = bit.clcBit.dat


    bal.slv({ conBit: { idx: "write-conflict", dat: bit.clcBit.dat } });
    return cpy;

};

export const removeConflict = async (cpy: ConflictModel, bal: ConflictBit, ste: State) => {
    bit = await ste.hunt(ActCol.REMOVE_COLLECT, { idx: bal.idx, bit: ActCon.CREATE_CONFLICT });

    bal.slv({ conBit: { idx: "remove-conflict", dat: bit.clcBit.dat } });
    return cpy;
};

export const deleteConflict = (cpy: ConflictModel, bal: ConflictBit, ste: State) => {

    bal.slv({ conBit: { idx: "delete-conflict" } });
    return cpy;
};

export const listConflict = async (cpy: ConflictModel, bal: ConflictBit, ste: State) => {

    con = null

    bit = await ste.hunt(ActCol.LIST_COLLECT, { val: 0, bit: ActCon.LIST_CONFLICT })
    lst = bit.clcBit.lst



    bal.slv({ conBit: { idx: 'list-data', lst } });

    return cpy;
};