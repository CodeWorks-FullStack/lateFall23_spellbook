import { AppState } from "../AppState.js";
import { sandboxSpellsService } from "../services/SandboxSpellsService.js";
import { Pop } from "../utils/Pop.js";




export class SandboxSpellsController{
  constructor(){
    console.log('🥪✨🎮');
    // this.getSandboxSpells()//🧪 Can't get spells on load, cause we aren't logged in on load
    AppState.on('user', this.getSandboxSpells) //🧪 listener here waits for the user to log in, THEN gets their spells
  }

  async saveActiveSpell(){
    try {
        await sandboxSpellsService.saveActiveSpell()
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }

  async getSandboxSpells(){
    try {
      await sandboxSpellsService.getSandboxSpells()
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }
}