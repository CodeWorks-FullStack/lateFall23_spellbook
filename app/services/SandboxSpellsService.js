import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js";





class SandboxSpellsService{
  async getSandboxSpells() {
    const response = await api.get('api/spells')
    console.log('🥪📖📡', response.data); // 🧪 did it get the spells I saved?
  }
  async saveActiveSpell() {
    let activeSpell = AppState.activeSpell
    console.log('🥪💾', activeSpell); //🧪 did it log the spell you expected?
    const response = await api.post('api/spells', activeSpell)
    console.log('🥪💾📡', response.data); // 🧪 did I get a good response? (200) or did i get an error? (400, 401)
  }

}

export const sandboxSpellsService = new SandboxSpellsService()