

// NOTE because we want to save spells to the sandbox, we are going to format our spell to match that one
export class Spell{
  constructor(data){
    this.id = data.id
    this.name = data.name
    this.description = data.description
    this.damage = data.damage
    this.level = data.level
    this.range = data.range
    this.material = data.material
    this.ritual = data.ritual
    this.concentration = data.concentration
    this.castingTime = data.castingTime
    this.duration = data.duration
    this.components = data.components
    this.prepared = data.prepared // TODO ??? whats this mean?

  }

  // SPELL TEMPLATE?

  // NOTE a static method does not exist on the instantiated class instance but the class definition itself
  static SpellListTemplate(spell){
    return `<p class="text-light">${spell.name}</p>`
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