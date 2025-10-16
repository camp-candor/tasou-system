import * as clone from "clone-deep";
import * as Act from "./mythos.action";
import { MythosModel } from "./mythos.model";
import * as Buzz from "./mythos.buzzer";
import State from "../99.core/state";

export function reducer(model: MythosModel = new MythosModel(), act: Act.Actions, state?: State) {
    switch (act.type) {

        case Act.UPDATE_MYTHOS:
            return Buzz.updateMythos(clone(model), act.bale, state);

        case Act.INIT_MYTHOS:
            return Buzz.initMythos(clone(model), act.bale, state);

        case Act.OPEN_MYTHOS:
            return Buzz.openMythos(clone(model), act.bale, state);

        case Act.CREATE_MYTHOS:
            return Buzz.createMythos(clone(model), act.bale, state);

        case Act.TEST_MYTHOS:
            return Buzz.testMythos(clone(model), act.bale, state);

        case Act.ACCESS_MYTHOS:
            return Buzz.accessMythos(clone(model), act.bale, state);

        case Act.OUTPUT_MYTHOS:
            return Buzz.outputMythos(clone(model), act.bale, state);

        case Act.ADVANCE_MYTHOS:
            return Buzz.advanceMythos(clone(model), act.bale, state);

        case Act.INCREMENT_MYTHOS:
            return Buzz.incrementMythos(clone(model), act.bale, state);


        case Act.DATA_MYTHOS:
            return Buzz.dataMythos(clone(model), act.bale, state);

case Act.STATUS_MYTHOS:
 return Buzz.statusMythos(clone(model), act.bale, state);
 
case Act.COMPILE_MYTHOS:
            try {
                return Buzz.compileMythos(clone(model), act.bale, state);
            } catch (e) {
                console.error(e);
                return Buzz.errorMythos(clone(model), { src: e, val: 1 }, state);
            }

        case Act.ERROR_MYTHOS:
            return Buzz.errorMythos(clone(model), act.bale, state);

        default:
            return model;
    }
}
