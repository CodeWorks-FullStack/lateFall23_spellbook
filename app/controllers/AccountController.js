import { AppState } from "../AppState.js";
import { sandboxSpellsService } from "../services/SandboxSpellsService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawAccountSpellCards(){
  const spells = AppState.sandboxSpells
  let content = ''
  spells.forEach(spell => content += spell.SpellCard)
  setHTML('account-spells', content) //🧪 does it draw the accounts
}

export class AccountController {
  constructor() {
    // AppState.on('account', _drawAccount)
    // _drawAccount()
    // NOTE who wrote this busted thing?
    // NOTE this gets the users spells when they load the account page
    AppState.on('sandboxSpells', _drawAccountSpellCards)
    this.getAccountSpells()
  }

  async getAccountSpells(){
    try {
      await sandboxSpellsService.getSandboxSpells()
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }

}
