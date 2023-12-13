import { AppState } from "../AppState.js"
import { Spell } from "../models/Spell.js";
import { api } from "./AxiosService.js";





class SandboxSpellsService{
  async togglePrepared(spellId) {
    let foundSpell = AppState.sandboxSpells.find(spell => spell.id == spellId)
    foundSpell.prepared = !foundSpell.prepared // quick way to flip a bool from true to false, or vice versa
    console.log('🐬📖', foundSpell); // 🧪 check to see if the change happened the way you expected it to
    const response = await api.put(`api/spells/${spellId}`, foundSpell) // PUT needs and Identifier in the URL to specify WHAT ITEM you want to update, and 'Update data' so it knows what has changed
    console.log('🐬📖📡', response.data);// 🧪 does the API accept the change
    AppState.emit('sandboxSpells')
  }
  async getSandboxSpells() {
    const response = await api.get('api/spells')
    console.log('🥪📖📡', response.data); // 🧪 did it get the spells I saved?
    // TODO finish this
    const newSpells = response.data.map(spellData => new Spell(spellData))
    console.log('🥪✨🗺️', newSpells); //🧪 did the data map correctly over?
    AppState.sandboxSpells = newSpells //🧪 how can i test if i don't have a draw?
  }
  async saveActiveSpell() {
    let activeSpell = AppState.activeSpell
    console.log('🥪💾', activeSpell); //🧪 did it log the spell you expected?
    const response = await api.post('api/spells', activeSpell)
    console.log('🥪💾📡', response.data); // 🧪 did I get a good response? (200) or did i get an error? (400, 401)
    // TODO finish this
    const newSpell = new Spell(response.data)
    console.log('🥪✨', newSpell); //🧪 did it map the properties over correctly?
    AppState.sandboxSpells.push(newSpell) // 🧪 did it get added in? did it trigger a draw?
  }

}

export const sandboxSpellsService = new SandboxSpellsService()