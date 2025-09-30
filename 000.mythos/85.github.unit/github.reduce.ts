import * as clone from "clone-deep";
import * as Act from "./github.action";
import { GithubModel } from "./github.model";
import * as Buzz from "./github.buzzer";
import State from "../99.core/state";

export function reducer(model: GithubModel = new GithubModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_GITHUB:
 return Buzz.updateGithub(clone(model), act.bale, state);

 case Act.INIT_GITHUB:
 return Buzz.initGithub(clone(model), act.bale, state);

case Act.COMMIT_GITHUB:
 return Buzz.commitGithub(clone(model), act.bale, state);
 
 case Act.WRITE_GITHUB:
 return Buzz.writeGithub(clone(model), act.bale, state);

 case Act.LIST_GITHUB:
 return Buzz.listGithub(clone(model), act.bale, state);

 case Act.READ_GITHUB:
 return Buzz.readGithub(clone(model), act.bale, state);

 default:
 return model;
 }
}
