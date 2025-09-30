import { Action } from "../99.core/interface/action.interface";
import  GithubBit  from "./fce/github.bit";

// Github actions

export const INIT_GITHUB = "[Github action] Init Github";
export class InitGithub implements Action {
 readonly type = INIT_GITHUB;
 constructor(public bale: GithubBit) {}
}

export const UPDATE_GITHUB = "[Github action] Update Github";
export class UpdateGithub implements Action {
 readonly type = UPDATE_GITHUB;
 constructor(public bale: GithubBit) {}
}

export const COMMIT_GITHUB = "[Commit action] Commit Github";
 export class CommitGithub implements Action {
 readonly type = COMMIT_GITHUB;
 constructor(public bale: GithubBit) {}
 }
 

 export const WRITE_GITHUB = "[Write action] Write Github";
 export class WriteGithub implements Action {
 readonly type = WRITE_GITHUB;
 constructor(public bale: GithubBit) {}
 }

 export const LIST_GITHUB = "[List action] List Github";
 export class ListGithub implements Action {
 readonly type = LIST_GITHUB;
 constructor(public bale: GithubBit) {}
 }

 export const READ_GITHUB = "[Read action] Read Github";
 export class ReadGithub implements Action {
 readonly type = READ_GITHUB;
 constructor(public bale: GithubBit) {}
 }


export type Actions = | InitGithub | UpdateGithub 
| CommitGithub
| WriteGithub
| ListGithub
| ReadGithub