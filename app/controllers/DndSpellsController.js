import { AppState } from "../AppState.js";
import { Spell } from "../models/Spell.js";
import { dndSpellsService } from "../services/DndSpellsService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";


function _drawApiSpellList(){
  let spells = AppState.apiSpells
  let content = ''
  spells.forEach(spell => content += Spell.SpellListTemplate(spell))//🧪🧪 test with hard coded name, like cloud kill, then passing in the spell so it's data can be accessed
  setHTML('api-spells-list', content)//🧪 do the spell's name draw to the page
}

function _drawActiveSpell(){
  let activeSpell = AppState.activeSpell
  let content = activeSpell.ActiveSpellTemplate
  setHTML('active-spell', content)// 🧪🤞 wrote a lot of template stuff here before drawing
}


export class DndSpellsController{
  constructor(){
    console.log('🧙‍♂️📚');
    this.getApiSpells() // 🧪 Write the get, test the response
    AppState.on('apiSpells', _drawApiSpellList)
    AppState.on('activeSpell', _drawActiveSpell) // 🧪
  }

  async getApiSpells(){
    try {
      await dndSpellsService.getApiSpells()
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }

  async getActiveSpell(spellIndex){
    try {
      await dndSpellsService.getActiveSpell(spellIndex)
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }
}