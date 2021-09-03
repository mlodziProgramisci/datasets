import { randomArrayElement, randomIntInRange } from "./tools"

const streets = ['Polna', 'Leśna', 'Słoneczna', 'Krótka', 'Szkolna', 'Ogrodowa', 'Lipowa', 'Łąkowa', 'Brzozowa', 'Kwiatowa']

export function randomShelter() {
  const address = `ul. ${randomArrayElement(streets)} ${randomIntInRange(1,99)}${randomArrayElement(['','','','','','','','','','A','B','C','D','E','F'])}`;
  
}

export function randomShelters(n:number) {
  
}