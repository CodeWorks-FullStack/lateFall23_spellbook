import { AppState } from "../AppState.js";
import { sandboxSpellsService } from "../services/SandboxSpellsService.js";
import { Pop } from "../utils/Pop.js";


// NOTE the draw for our spells happens in the account controller, since that controller dictates that page

export class SandboxSpellsController{
  constructor(){
    console.log('🥪✨🎮');
    // this.getSandboxSpells()//🧪 Can't get spells on load, cause we aren't logged in on load
    // NOTE this gets our spells when were one the explore vies
    AppState.on('user', this.getSandboxSpells) //🧪 listener here waits for the user to log in, THEN gets their spells
    // NOTE this gets our spells when were on the account page
    // if(AppState.user){
    //   this.getSandboxSpells()
    // }
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

  async togglePrepared(spellId){
    try {
      await sandboxSpellsService.togglePrepared(spellId)
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }
}