import type {Kind} from './kinds'
import { randomArrayElement, randomBinary, randomFloatInRange, randomIntInRange, uniqueArray } from './tools';

type DogGeneratorFlag = "addHelpOpportunities"|"addAccomodationNeeds"|"addBehaviour";

interface Dog{
  nickname: string,
  kindName: string,
  color: string,
  mass:number,
  age:number,

  // help oppurtunities
  needsBathIn?: number,
  needsHealthCheckupIn?: number,
  lastWalk?: number,

  needsCostantCheckups?: boolean,
  needsSpecialFood?: boolean,
  needsPeaceAndQuiet?: boolean,
  needsAction?: boolean,
  needsSolitaryRoom?: boolean,
  needsBiggerKennel?: boolean,

  tolerateOtherDogs?: boolean,
  tolerateCats?: boolean,
  tolerateChildren?:boolean,
  hasHurtAnimals?:boolean,
  hasHurtHumans?:boolean
}

export function randomDog(kinds:Kind[],nicknames:string[], flags:DogGeneratorFlag[] ) {
  const kind = randomArrayElement(uniqueArray(kinds, kind => kind.name));
  const dog:Dog = {
    nickname: randomArrayElement(nicknames),
    kindName: kind.name,
    color: randomArrayElement(kind.colors),
    mass: randomFloatInRange(kind.minHealthyMass*0.75, kind.maxHealthyMass*1.35, 1),
    age: randomIntInRange(1,kind.maxTypicalLifespan),
  }

  if(flags.includes("addHelpOpportunities")){
    dog.needsBathIn = randomBinary(0.05) ? 0 : randomIntInRange(1,30);
    dog.needsHealthCheckupIn = randomBinary(0.05) ? 0 : randomIntInRange(1,30);
    dog.lastWalk = randomBinary(0.02) ? randomIntInRange(4,7) : randomIntInRange(0,3);
  }

  if(flags.includes("addAccomodationNeeds")){
    dog.needsCostantCheckups = randomBinary(0.1);
    dog.needsSpecialFood = randomBinary(0.25);
    dog.needsPeaceAndQuiet = randomBinary(0.01);
    dog.needsAction = (!dog.needsPeaceAndQuiet) && kind.typicalActivityLevel === "hyperactive" || randomBinary(0.35);
    dog.needsSolitaryRoom = randomBinary(0.08);
    dog.needsBiggerKennel = kind.typicalActivityLevel==="hyperactive"&&randomBinary(0.4) || randomBinary(0.07);
  }

  if(flags.includes("addBehaviour")){
    dog.tolerateOtherDogs = 
      (kind.typicalAggressiveness === "dangerous" && randomBinary(0.65)) || 
      (kind.typicalAggressiveness === "safe for adults" && randomBinary(0.95)) || 
      (kind.typicalAggressiveness === "safe for kids" && randomBinary(1)) 
    dog.tolerateCats = 
      (kind.typicalAggressiveness === "dangerous" && randomBinary(0.5)) || 
      (kind.typicalAggressiveness === "safe for adults" && randomBinary(0.95)) || 
      (kind.typicalAggressiveness === "safe for kids" && randomBinary(1)) 
    dog.tolerateChildren = 
      (kind.typicalAggressiveness === "dangerous" && randomBinary(0.45)) || 
      (kind.typicalAggressiveness === "safe for adults" && randomBinary(0.9)) || 
      (kind.typicalAggressiveness === "safe for kids" && randomBinary(1)) 
    dog.hasHurtAnimals = 
        (kind.typicalAggressiveness === "dangerous" && randomBinary(0.6)) || 
        (kind.typicalAggressiveness === "safe for adults" && randomBinary(0.1)) || 
        (kind.typicalAggressiveness === "safe for kids" && randomBinary(0.001)) 
    dog.hasHurtHumans = 
      (kind.typicalAggressiveness === "dangerous" && randomBinary(0.4)) || 
      (kind.typicalAggressiveness === "safe for adults" && randomBinary(0.05)) || 
      (kind.typicalAggressiveness === "safe for kids" && randomBinary(0)) 
  }

  return dog;
}


export function randomDogs(kinds:Kind[],nicknames:string[], flags:DogGeneratorFlag[], n:number ) {
  const arr: Dog[] = [];
  for (let i = 0; i < n; i++) {
    arr.push(randomDog(kinds,nicknames,flags))    
  }
  return arr;
}