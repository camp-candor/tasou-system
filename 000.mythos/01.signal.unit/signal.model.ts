import Signal from "./fce/signal.interface";
import SignalBit from "./fce/signal.interface";

export class SignalModel implements Signal {
    //idx:string;
    //signalBitList: SignalBit[] = [];
    //signalBits: any = {};
    signalList = [
        { src: 'gene', type: 0 },
        { src: 'character', type: 0 },
        { src: 'plot', type: 0 },
        { src: 'setting', type: 0 },
        { src: 'kershaw', type: 1 },
        { src: 'dodging-ds', type: 1 },
    ]
}
