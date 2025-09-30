import { OpenAI } from "openai";
import { OpenrouterModel } from "../openrouter.model";
import OpenrouterBit from "../fce/openrouter.bit";
import State from "../../99.core/state";

export const initOpenrouter = (cpy: OpenrouterModel, bal: OpenrouterBit, ste: State) => {

  bal.slv({ intBit: { idx: "init-openrouter" } });

  return cpy;
};

export const updateOpenrouter = async (cpy: OpenrouterModel, bal: OpenrouterBit, ste: State) => {

  var FS = bal.dat.fs

  const apiKey = process.env.OPENROUTER_API_KEY;

  if (!apiKey) {
    console.error("OPENROUTER_API_KEY is not set");
    return cpy;
  }

  const client = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: apiKey,
    dangerouslyAllowBrowser: true
  });

  var model = cpy.model
  //var model = "openai/gpt-3.5-turbo"

  var file0 = FS.readFileSync('./data/gears/000.heterocosmica/00.preface-prologue.txt').toString()
  var file1 = FS.readFileSync('./data/gears/000.heterocosmica/01.starter-terms.txt').toString()
  var file2 = FS.readFileSync('./data/gears/000.heterocosmica/02.one-person-worlds.txt').toString()
  var file3 = FS.readFileSync('./data/gears/000.heterocosmica/03.action-and-motavation.txt').toString()
  var file4 = FS.readFileSync('./data/gears/000.heterocosmica/04.multiperson-worlds.txt').toString()
  var file5 = FS.readFileSync('./data/gears/000.heterocosmica/05.interaction-and-power.txt').toString()
  var file6 = FS.readFileSync('./data/gears/000.heterocosmica/06.narrative-modalities.txt').toString()
  var file7 = FS.readFileSync('./data/constraint.md').toString()

  var record = file0 + file1 + file2 + file3 + file4 + file5 + file6 + file7

  var prompt = `
  Can you please replace the contents of the markdown

  # Story World Codex: Constraint as Creative Engine Protocol
  # Based on Doležel's Heterocosmica (Implications of Constraint)z

  with information related to the Narrative Modalities of a heterocosmica where Celibate women sell T-shirts to fund rocket research while avoiding assassination
  `

  try {
    const completion = await client.chat.completions.create({
      model: model,
      messages: bal.messages || [{ role: "user", content: record + prompt }],
    });

    if (bal.slv) {
      bal.slv({ chatBit: { idx: "update-openrouter", dat: completion } });
    }
  } catch (error) {
    console.error("Error calling OpenRouter API:", error);
  }

  return cpy;
};