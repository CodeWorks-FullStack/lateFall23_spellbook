import { AppState } from "../AppState.js";
import { baseURL } from "../env.js"
import { Spell } from "../models/Spell.js";


// @ts-ignore
// axios is brought in through a CDN link in the index.html, your code doesn't know axios exists until the HTML is loaded
const dndApi = axios.create({
  baseURL: 'https://www.dnd5eapi.co/api/'
})


class DndSpellsService{
  async getActiveSpell(spellIndex) {
    const response = await dndApi.get(`spells/${spellIndex}`)
    console.log('📖📡', response.data); // 🧪 did i get the right spell ?
    let activeSpell = new Spell(response.data)
    console.log('✨📖', activeSpell); //🧪 did the API data map correctly to my CLASS Spell data
    AppState.activeSpell = activeSpell
  }

  async getApiSpells(){
    const response = await dndApi.get('spells')
    console.log('📚📡', response.data); //🧪 what does it's structure look like?
    //NOTE the DND API returns very small objects, that only reference their larger counter parts, we can't exactly make out Spell class out of them so we will leave them as objects
    AppState.apiSpells = response.data.results
  }
}

export const dndSpellsService = new DndSpellsService()