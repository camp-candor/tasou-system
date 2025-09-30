import Mythos from "./fce/mythos.interface";
import MythosBit from "./fce/mythos.interface";

export class MythosModel implements Mythos {
    idx: string = '111.mythos';
    //mythosBitList: MythosBit[] = [];
    //mythosBits: any = {};
    opened: number = 0
    
    access: number = 0
    dex: number = 0;

    lastUpdateTimeLong: number = 0;
    deltaHoldLong: number = 0;
    maxLong: number = 1000;
    
    lastUpdateTimeShort: number = 0;
    deltaHoldShort: number = 0;
    maxShort: number = 100;

    shortValue:number =0 ;

    tinyCount:number = 0;
    tinyMax:number = 20;

    maxTiny: number = 50;

    delayUntil: number = 0;

    timeBit:any;

    colorListSize:number =0;

    clientLocal:boolean = true;
    serverLocal:boolean = false;

    localLocation:string = 'http://localhost:3005/api/'
    remoteLocation:string = "https://zero01-alligator-quest.onrender.com/api"

}
