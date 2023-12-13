

// NOTE because we want to save spells to the sandbox, we are going to format our spell to match that one
export class Spell{
  constructor(data){
    this.id = data.id
    this.name = data.name
    this.description = data.desc ? data.desc.join('\n\n') : data.description
    this.damage = this.convertDamage(data.damage, data.level)
    this.level = data.level
    this.range = data.range
    this.material = data.material || 'no materials required'
    this.ritual = data.ritual
    this.concentration = data.concentration
    this.castingTime = data.castingTime || data.casting_time
    this.duration = data.duration
    this.components = data.components
    this.prepared = data.prepared // TODO ??? whats this mean?

  }

  convertDamage(damageObj, spellLevel){
    if(damageObj == undefined) return '✨'
    if( typeof damageObj == 'string') return damageObj
    if(spellLevel == 0) return `🫰${damageObj.damage_at_character_level[1]} ${damageObj.damage_type.name}`
    return `☄️${damageObj.damage_at_slot_level[spellLevel]} ${damageObj.damage_type.name}`
  }

  // SPELL TEMPLATE?

  // NOTE a static method does not exist on the instantiated class instance but the class definition itself
  static SpellListTemplate(spell){
    return `<p role="button" onclick="app.DndSpellsController.getActiveSpell('${spell.index}')" class="text-light selectable py-2 mb-1">${spell.name}</p>`
  }

  get ActiveSpellTemplate(){
    return `
<div class="card col-11 p-1">
  <h1 class="fw-bold text-center">${this.name} </h1>
  <h4 class="text-primary text-center">${this.level}🎚️ | ${this.range}🦶 | ${this.castingTime}⏲️ | ${this.duration}⏱️ | ${this.concentration ? 'requires concentration' : 'na'}🧠 | ${this.ritual ? 'Cast as ritual' : 'not a ritual'}🔮</h4>
  <p class="text-center">${this.components} | ${this.material}</p>
  <hr />
  <h4>${this.damage}</h4>
  <p>${this.description}</p>
  <button onclick="app.SandboxSpellsController.saveActiveSpell()" class="btn btn-primary" title="add ${this.name} to spellbook">Add to 📕</button>
</div>
`
  }

  get SpellCard(){
    return `
    <div class="col-4 text-center">
      <div class="card shadow ${this.prepared ? 'bg-dark text-light' : ''}" >
        <h3>${this.name} <input type="checkbox" ${this.prepared ? 'checked' : ''} onchange="app.SandboxSpellsController.togglePrepared('${this.id}')"/></h3>
        <p>${this.damage}</p>
        <b class="${this.prepared ? 'text-danger' : 'text-primary'} text-center">${this.level}🎚️ | ${this.range}🦶 | ${this.castingTime}⏲️ | ${this.duration}⏱️ | ${this.concentration ? 'requires concentration' : 'na'}🧠 | ${this.ritual ? 'Cast as ritual' : 'not a ritual'}🔮</b>
  <p class="text-center ">${this.components} | ${this.material}</p>
        <div role="button" class="px-2 selectable" data-bs-toggle="collapse" data-bs-target="#spell-body-${this.id}"><i class="mdi mdi-dots-horizontal"></i></div>
        <p class="collapse text-start p-2" id="spell-body-${this.id}">${this.description}</p>
      </div>
    </div>
    `
  }
}

/**!SECTION{
  "name": {
    "type": "String",
    "required": true,
    "maxLength": 100
  },
  "description": {
    "type": "String",
    "required": true,
    "maxLength": 5000
  },
  "damage": {
    "type": "String",
    "maxLength": 100
  },
  "level": {
    "type": "Number"
  },
  "range": {
    "type": "String",
    "required": true,
    "maxLength": 100
  },
  "material": {
    "type": "String",
    "maxLength": 100
  },
  "ritual": {
    "type": "Boolean"
  },
  "concentration": {
    "type": "Boolean"
  },
  "castingTime": {
    "type": "String",
    "maxLength": 100
  },
  "duration": {
    "type": "String",
    "required": true,
    "maxLength": 100
  },
  "components": [
    {
      "type": "String",
      "maxLength": 500
    }
  ],
  "prepared": {
    "type": "Boolean"
  },
  "creatorId": {
    "type": "ObjectId",
    "required": true,
    "ref": "Account"
  }
} */