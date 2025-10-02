import { CharacterModel } from "../character.model";
import CharacterBit from "../fce/character.bit";
import DatBit from "../fce/dat.bit";
import State from "../../99.core/state";

import * as ActDat from "../../03.datum.unit/datum.action";

import * as ActGit from "../../85.github.unit/github.action";


import * as ActCol from "../../97.collect.unit/collect.action";

var bit, dat, lst, dex, src, idx;

export const initCharacter = (cpy: CharacterModel, bal: CharacterBit, ste: State) => {
    
     bal.slv({ intBit: { idx: "init-character" } });

    return cpy;
};

export const openCharacter = async (cpy: CharacterModel, bal: CharacterBit, ste: State) => {

    bit = await ste.hunt(ActGit.LIST_GITHUB, {})

    const processItem = async (item) => {

        item
        idx = item.name
        src = item.url

        //bit = await ste.hunt(ActGit.READ_GITHUB, { src })
        //var content = bit.gitBit.dat
        bit = await ste.hunt(ActDat.WRITE_DATUM, { idx,  dat: { src } })

        //bit = 
        console.log(`add datum: ${idx}`);
        // Simulate an asynchronous task (e.g., waiting for 50ms)
        //await new Promise(resolve => setTimeout(resolve, 50));
        //console.log(`...Finished processing item: ${item}`);
    };

    const lst = bit.gitBit.lst; // e.g., ['A', 'B', 'C']

 
    try {
        for (const item of lst) {
            await processItem(item);
        }
        bal.slv({ datBit: { idx: "open-datum", dat: {} } });
    } catch (error) {
        console.error("An error occurred during processing:", error);
        // Handle the error state here.
    }



    return cpy;
};

export const updateCharacter = async (cpy: CharacterModel, bal: CharacterBit, ste: State) => {

    bal.slv({ datBit: { idx: "update-datum" } });
    return cpy;
};

export const createCharacter = async (cpy: CharacterModel, bal: CharacterBit, ste: State) => {

    var content = bal.dat.content

    if (bal.dat == null) bal.dat = {}
    var datBit: DatBit = { idx: bal.idx, src: bal.dat.src }
    datBit.label = 'label'
    datBit.url = 'url'
    datBit.update = 'update'
    datBit.tags = []
    datBit.creators = []
    datBit.muse = []

    datBit

    


    bal.slv({ datBit: { idx: "create-datum", dat: datBit } });
    return cpy;

};

export const readCharacter = async (cpy: CharacterModel, bal: CharacterBit, ste: State) => {

    if (bal.idx == null) bal.idx = 'dat00';

    // The READ_COLLECT action is smart: it ensures data exists by attempting a write/create if not found.
    bit = await ste.hunt(ActCol.READ_COLLECT, { idx: bal.idx, bit: ActDat.CREATE_DATUM });

    bal.slv({ datBit: { idx: "read-datum" } });

    return cpy;
};

export const writeCharacter = async (cpy: CharacterModel, bal: CharacterBit, ste: State) => {

    if (bal.dat == null) bal.dat = {}
    bit = await ste.hunt(ActCol.WRITE_COLLECT, { idx: bal.idx, dat: bal.dat, bit: ActDat.CREATE_DATUM });

    dat = bit.clcBit.dat


    bal.slv({ datBit: { idx: "write-datum", dat: bit.clcBit.dat } });
    return cpy;

};

export const removeCharacter = async (cpy: CharacterModel, bal: CharacterBit, ste: State) => {
    bit = await ste.hunt(ActCol.REMOVE_COLLECT, { idx: bal.idx, bit: ActDat.CREATE_DATUM });

    bal.slv({ datBit: { idx: "remove-datum", dat: bit.clcBit.dat } });
    return cpy;
};

export const deleteCharacter = (cpy: CharacterModel, bal: CharacterBit, ste: State) => {

    bal.slv({ datBit: { idx: "delete-datum" } });
    return cpy;
};

export const listCharacter = async (cpy: CharacterModel, bal: CharacterBit, ste: State) => {

    dat = null

    bit = await ste.hunt(ActCol.LIST_COLLECT, { val: 0, bit: ActDat.LIST_DATUM })
    lst = bit.clcBit.lst

    

    bal.slv({ datBit: { idx: 'list-data', lst } });

    return cpy;
};