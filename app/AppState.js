import { Spell } from './models/Spell.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
class ObservableAppState extends EventEmitter {

  user = null
  /**@type {import('./models/Account.js').Account | null} */
  account = null

/** @type {{name: string, index: string, url: string}[]} */
  apiSpells = []
}

export const AppState = createObservableProxy(new ObservableAppState())