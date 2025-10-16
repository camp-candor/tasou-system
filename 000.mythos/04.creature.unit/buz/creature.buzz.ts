import { CreatureModel } from "../creature.model";
import CreatureBit from "../fce/creature.bit";
import CreBit from "../fce/cre.bit";
import State from "../../99.core/state";

import * as ActCre from "../../04.creature.unit/creature.action";

import * as ActGit from "../../85.github.unit/github.action";


import * as ActCol from "../../97.collect.unit/collect.action";

var bit, cre, lst, dex, src, idx;

export const initCreature = (cpy: CreatureModel, bal: CreatureBit, ste: State) => {
    debugger
    return cpy;
};

export const openCreature = async (cpy: CreatureModel, bal: CreatureBit, ste: State) => {

    bit = await ste.hunt(ActGit.LIST_GITHUB, {})

    const processItem = async (item) => {

        item
        idx = item.name
        src = item.url

        //bit = await ste.hunt(ActGit.READ_GITHUB, { src })
        //var content = bit.gitBit.cre
        bit = await ste.hunt(ActCre.WRITE_CREATURE, { idx,  cre: { src } })

        //bit =
        console.log(`add creature: ${idx}`);
        // Simulate an asynchronous task (e.g., waiting for 50ms)
        //await new Promise(resolve => setTimeout(resolve, 50));
        //console.log(`...Finished processing item: ${item}`);
    };

    const lst = bit.gitBit.lst; // e.g., ['A', 'B', 'C']


    try {
        for (const item of lst) {
            await processItem(item);
        }
        bal.slv({ creBit: { idx: "open-creature", cre: {} } });
    } catch (error) {
        console.error("An error occurred during processing:", error);
        // Handle the error state here.
    }



    return cpy;
};

export const updateCreature = async (cpy: CreatureModel, bal: CreatureBit, ste: State) => {

    bal.slv({ creBit: { idx: "update-creature" } });
    return cpy;
};

export const createCreature = async (cpy: CreatureModel, bal: CreatureBit, ste: State) => {

    var content = bal.cre.content

    if (bal.cre == null) bal.cre = {}
    var creBit: CreBit = { idx: bal.idx, src: bal.cre.src }
    creBit.label = 'label'
    creBit.url = 'url'
    creBit.update = 'update'
    creBit.tags = []
    creBit.creators = []
    creBit.muse = []

    creBit




    bal.slv({ creBit: { idx: "create-creature", cre: creBit } });
    return cpy;

};

export const readCreature = async (cpy: CreatureModel, bal: CreatureBit, ste: State) => {

    if (bal.idx == null) bal.idx = 'cre00';

    // The READ_COLLECT action is smart: it ensures data exists by attempting a write/create if not found.
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActCre.CREATE_CREATURE });

    bal.slv({ creBit: { idx: "read-creature" } });

    return cpy;
};

export const writeCreature = async (cpy: CreatureModel, bal: CreatureBit, ste: State) => {

    if (bal.cre == null) bal.cre = {}
    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, cre: bal.cre, bit: ActCre.CREATE_CREATURE });

    cre = bit.clcBit.cre


    bal.slv({ creBit: { idx: "write-creature", cre: bit.clcBit.cre } });
    return cpy;

};

export const removeCreature = async (cpy: CreatureModel, bal: CreatureBit, ste: State) => {
    bit = await ste.hunt(ActCol.REMOVE_COLLECT, { idx: bal.idx, bit: ActCre.CREATE_CREATURE });

    bal.slv({ creBit: { idx: "remove-creature", cre: bit.clcBit.cre } });
    return cpy;
};

export const deleteCreature = (cpy: CreatureModel, bal: CreatureBit, ste: State) => {

    bal.slv({ creBit: { idx: "delete-creature" } });
    return cpy;
};

export const listCreature = async (cpy: CreatureModel, bal: CreatureBit, ste: State) => {

    cre = null

    bit = await ste.hunt(ActCol.LIST_COLLECT, { val: 0, bit: ActCre.LIST_CREATURE })
    lst = bit.clcBit.lst



    bal.slv({ creBit: { idx: 'list-creature', lst } });

    return cpy;
};