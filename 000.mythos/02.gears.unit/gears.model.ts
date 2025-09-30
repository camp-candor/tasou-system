import Gears from "./fce/gears.interface";
import GearsBit from "./fce/gears.interface";

export class GearsModel implements Gears {
 //idx:string;
 //gearsBitList: GearsBit[] = [];
 //gearsBits: any = {};

 scale: number = 10;
  seed: number = 92125;
  dex:number = 0;
  //idx:string;
  //searchBitList: SearchBit[] = [];
  //searchBits: any = {};
  srcDir: string = "./data/gears/";
  cacheDir: string = "./data/search/";
}
