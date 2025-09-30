"use server"

import { GearsModel } from "../gears.model";
import GearsBit from "../fce/gears.bit";
import State from "../../99.core/state";

export const initGears = async (cpy: GearsModel, bal: GearsBit, ste: State) => {
    debugger
    return cpy;
};

export const updateGears = async (cpy: GearsModel, bal: GearsBit, ste: State) => {
    return cpy;
};

export const searchGears = async (cpy: GearsModel, bal: GearsBit, ste: State) => {

    if (bal.src == null) bal.src = 'alligator'

    var FS = bal.dat.fs

    var doT = require("dot");
    var Chance = require("chance");
    var fate = new Chance(cpy.seed);
    var S = require('string')
    //var fate = new Chance(); //random every time
    //var FS = require('fs')

    cpy.seed += 1;

    var clear = [];
    var nightTrap = [];

    var tmp1 = `cd..
  cd gears
  cd {{=it.rpg}}
  
  `;

    if (FS.pathExistsSync(cpy.cacheDir + bal.src + ".txt") == true) {
        nightTrap = FS.readFileSync(cpy.cacheDir + bal.src + ".txt")
            .toString()
            .split("\n");

        nightTrap.forEach((a, b) => {
            nightTrap[b] = JSON.parse(a);
            clear[b] = JSON.parse(a);
        });
    } else {
        if (bal.slv != null) bal.slv({ srcBit: { idx: "error-search", src: bal.src } });
        return;
    }

    var itm = fate["pickone"](clear);
    //if (count != null) itm = clear[count];

    var rpg = itm.idx;
    var bok = itm.src;
    var num = itm.val;

    var lineList = tmp1.split("\n");
    var gel = { rpg, bok, num };

    lineList.forEach((a, b) => {
        //console.log("line " + a);
        var doTCompiled = doT.template(a);
        var outLine = doTCompiled(gel);
        lineList[b] = outLine;
    });

    nightTrap.forEach((a, b) => {
        nightTrap[b] = JSON.stringify(a);
    });

    var cacheFile = cpy.cacheDir + bal.src + ".txt";
    FS.writeFileSync(cacheFile, nightTrap.join("\n"));
    console.log("writing " + cacheFile);

    

    var line = lineList.join("\n");
    var night = nightTrap.join("\n");

    //console.log("line " + line);
    //console.log("night " + night);

    var dat = JSON.parse(fate["pickone"](nightTrap));
    //return console.log("idx " + dat.idx + " src " + dat.src);

    var nightTrap = [];

    //so its just going to give you a random one
    var idx = cpy.srcDir + dat.idx + "/" + dat.src;
    // console.log(list.length + " ;;; " + idx);
    var fileList = FS.readFileSync(idx).toString().split("\n");
    var dex = dat.val;

    var loc = idx;
    nightTrap.push(idx + " :::: " + dex);
    nightTrap.push("  ");
    nightTrap.push("  ");

    for (var i = dex - cpy.scale; i < dex + cpy.scale; i++) {

        if (fileList[i] != null) {

            fileList[i] = S(fileList[i]).replaceAll(bal.src, '**' + bal.src.toUpperCase() + '**')

        }


        if (fileList[i] != null) nightTrap.push(fileList[i]);
    }

    nightTrap.push("  ");
    nightTrap.push("  ");
    nightTrap.push("  ");

    //process.nextTick(spin);

    nightTrap
    debugger

    bal.slv({ grsBit: { idx: "search-gears", lst: nightTrap } });

    return cpy;
};


export const testGears = async (cpy: GearsModel, bal: GearsBit, ste: State) => {
    debugger
    return cpy;
};

export const createGears = async (cpy: GearsModel, bal: GearsBit, ste: State) => {

    var S = require('string')

    var FS = bal.dat.fs
    if (bal.src == null) bal.src = 'alligator'

    FS.ensureDirSync(cpy.srcDir);
    FS.ensureDirSync(cpy.cacheDir);

    var tmp1 = `cd..
  cd gears
  cd {{=it.rpg}}
  
  `;


    var nightTrap = [];

    var clear = [];
    var count;

    //creating the night trap

    if (FS.pathExistsSync(cpy.cacheDir + bal.src + ".txt") == true) {
        var clear = [];
        nightTrap = FS.readFileSync(cpy.cacheDir + bal.src + ".txt")
            .toString()
            .split("\n");

        nightTrap.forEach((a, b) => {
            nightTrap[b] = JSON.parse(a);
            clear[b] = JSON.parse(a);
        });
    } else {
        nightTrap = [];

        var list = FS.readdirSync(cpy.srcDir);
        list.forEach(async (a, x) => {
            if (a == ".git") return;

            if (FS.lstatSync(cpy.srcDir + a).isDirectory() == false) return;

            var count = 0;

            var list0 = FS.readdirSync(cpy.srcDir + a);
            list0.forEach((b, c) => {
                var cheese = FS.readFileSync(cpy.srcDir + a + "/" + b)
                    .toString()
                    .split("\n");
                cheese.forEach((c, d) => {
                    c = c.toLowerCase();

                    if (S(c).contains(" " + bal.src + " ")) {
                        clear.push({ idx: a, src: b, val: d });
                        nightTrap.push({ idx: a, src: b, val: d });
                        count += 1;
                    }
                });
            });

            var msg = x + " - " + list.length + " found : " + a + " : " + count + "   "
            console.log(msg)

            //await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src:msg })

        });
    }

    //console.log("swamp search ::: " + clear.length);
    var doT = require("dot");
    var Chance = require("chance");
    //var fate = new Chance("092125");
    var fate = new Chance();

    //var rpg = fate.pickone(list)
    //var bookLst = FS.readdirSync(srcDir + rpg)

    if (clear.length == 0) return console.log("NO options present");

    var itm = fate["pickone"](clear);
    if (count != null) itm = clear[count];

    var rpg = itm.idx;
    var bok = itm.src;
    var num = itm.val;

    var lineList = tmp1.split("\n");
    var gel = { rpg, bok, num };

    lineList.forEach((a, b) => {
        //console.log("line " + a);
        var doTCompiled = doT.template(a);
        var outLine = doTCompiled(gel);
        lineList[b] = outLine;
    });

    nightTrap.forEach((a, b) => {
        nightTrap[b] = JSON.stringify(a);
    });

    var cacheFile = cpy.cacheDir + bal.src + ".txt";
    FS.writeFileSync(cacheFile, nightTrap.join("\n"));
    console.log("writing " + cacheFile);

    var line = lineList.join("\n");
    var night = nightTrap.join("\n");

    //console.log("line " + line);
    //console.log("night " + night);

    var dat = JSON.parse(fate["pickone"](nightTrap));
    //return console.log("idx " + dat.idx + " src " + dat.src);

    var nightTrap = [];

    //so its just going to give you a random one
    var idx = cpy.srcDir + dat.idx + "/" + dat.src;
    // console.log(list.length + " ;;; " + idx);
    var fileList = FS.readFileSync(idx).toString().split("\n");
    var dex = dat.val;

    var loc = idx;
    nightTrap.push(idx + " :::: " + dex);
    nightTrap.push("  ");
    nightTrap.push("  ");

    for (var i = dex - cpy.scale; i < dex + cpy.scale; i++) {
        if (fileList[i] != null) nightTrap.push(fileList[i]);
    }

    nightTrap.push("  ");
    nightTrap.push("  ");
    nightTrap.push("  ");

    //process.nextTick(spin);

    nightTrap

    bal.slv({ grsBit: { idx: "create-gears", lst: nightTrap } });


    return cpy;
};

