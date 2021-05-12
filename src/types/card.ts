export interface Card {
  id: string
  name: string
  supertype: string
  subtypes: string[]
  hp: number
  types: string[]
  evolvesTo: string[]
  attacks: Attack[]
  weaknesses: Weakness[]
  retreatCost: string[]
  convertedRetreatCost: number
  set: Set
  number: string
  artist: string
  rarity: string
  nationalPokedexNumbers: number[]
  legalities: Legalities2
  images: Images2
  tcgplayer: Tcgplayer
}

interface Attack {
  name: string
  cost: string[]
  convertedEnergyCost: number
  damage: string
  text: string
}

interface Weakness {
  type: string
  value: string
}

interface Set {
  id: string
  name: string
  series: string
  printedTotal: number
  total: number
  legalities: Legalities
  ptcgoCode: string
  releaseDate: string
  updatedAt: string
  images: Images
  _self: string
}

interface Legalities {
  unlimited: string
  expanded: string
}

interface Images {
  symbol: string
  logo: string
}

interface Legalities2 {
  unlimited: string
  expanded: string
}

interface Images2 {
  small: string
  large: string
}

interface Tcgplayer {
  url: string
  prices: Price[]
}

interface Price {
  holofoil: Holofoil
}

interface Holofoil {
  low: number
  mid: number
  high: number
  market: number
  directLow: number
}
