## 

#### Dog kind entry
```TS
interface Kind {
  name: string, // eg. Labrador Retriver
  image: string, // svg link
  group: string,  // eg. Psy Pracujące
  colors: string[], // eg. ["czarny","kremowy","łaciaty"]
  description: string, // eg. "Bardzo miłe psy." but way longer 
  typicalActivityLevel: "hyperactive"|"average"|"lazy",
  typicalAggressiveness: "dangerous"|"safe for adults"|"safe for kids",
  size: "big"|"medium"|"small",
  minHealthyMass: number, // it's unhealthy for adult dog to be lighter
  maxHealthyMass: number, // it's unhealthy for adult dog to be heavier
  minTypicalLifespan: number, // dog should live at least this long
  maxTypicalLifespan: number, // dog is unlikely to live longer
}
```

#### Dog entry

```TS
interface Dog{
  nickname: string,
  kindName: string,
  color: string,
  mass:number,
  age:number,

  // flag addHelpOpportunities
  needsBathIn?: number,
  needsHealthCheckupIn?: number,
  lastWalk?: number,

  // flag addAccomodationNeeds
  needsCostantCheckups?: boolean,
  needsSpecialFood?: boolean,
  needsPeaceAndQuiet?: boolean,
  needsAction?: boolean,
  needsSolitaryRoom?: boolean,
  needsBiggerKennel?: boolean,

  // flag addBehaviour
  tolerateOtherDogs?: boolean,
  tolerateCats?: boolean,
  tolerateChildren?:boolean,
  hasHurtAnimals?:boolean,
  hasHurtHumans?:boolean
}
```


In any app using this API you must credit the creator of dog icons used:
<a href="https://www.freepik.com/vectors/icons">Icons vector created by macrovector - www.freepik.com</a>