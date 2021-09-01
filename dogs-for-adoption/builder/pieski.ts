import fs from "fs";

type ActivityLevel = "hyperactive"|"average"|"lazy";
type AggressivenessLevel = "dangerous"|"safe for adults"|"safe for kids";
type DogSize = "big"|"medium"|"small";

interface Kind {
  name: string, // Labrador Retriver
  image: string, // svg link
  group: string,
  colors: string[],
  description: string,
  typicalActivityLevel: ActivityLevel,
  typicalAggressiveness: AggressivenessLevel,
  size: DogSize,
  minHealthyMass: number,
  maxHealthyMass: number,
  minTypicalLifespan: number,
  maxTypicalLifespan: number
}

const kinds:Kind[] = []
function addKind(name:string, group:string, colors:string[], description:string, typicalActivityLevel:ActivityLevel, typicalAggressiveness:AggressivenessLevel, size:DogSize, minHealthyMass:number, maxHealthyMass:number, minTypicalLifespan:number, maxTypicalLifespan:number ) {
  const image = `./assets/pieski/${name.toLocaleLowerCase().replace(' ', '-')}.svg`
  kinds.push({name, image, group, colors, description, typicalActivityLevel, typicalAggressiveness, size, minHealthyMass, maxHealthyMass, minTypicalLifespan, maxTypicalLifespan})
}
//      name:string,           colors:string[], description:string, typicalActivityLevel:ActivityLevel, typicalAggressiveness:AggressivenessLevel, size:DogSize, minHealthyMass:number, maxHealthyMass:number, minTypicalLifespan:number, maxTypicalLifespan:number
addKind('Golden Retriver'     , 'Aportery, płochacze i psy dowodne',
        ['ciemno-złoty', 'jasno-złoty'],
`Psy tej rasy charakteryzują się inteligencją, posłuszeństwem oraz łagodnym charakterem. Golden retrievery są energiczne, wytrzymałe i aktywne. Szybko przywiązują się do właściciela. Przyjacielskie i towarzyskie, potrzebują bliskiego kontaktu z członkami rodziny, dobrze tolerują inne zwierzęta w domostwie. Ze względu na swój karny i łagodny charakter, sprawdzają się jako towarzysze osób starszych i dzieci, wyklucza to jednak ich zastosowanie jako psów stróżujących i obronnych. Nazwa psa nawiązuje do doskonałych umiejętności aportowania: golden retriever w wolnym tłumaczeniu oznacza „złoty aporter”. Są też przyjazne wobec dzieci.`,
        "hyperactive", "safe for kids", "big",24,34,10,12);
addKind('Jamnik'              , 'Jamniki', ['czarny', 'brunatny'],
`Jamniki to bardzo radosne, ruchliwe psy znane ze skłonności do ścigania małych zwierząt i ptaków. Cechuje je upór i nieustępliwość, co utrudnia ich tresurę. Szczekają wyjątkowo głośno, dlatego mają predyspozycję do bycia dobrym psem stróżującym. Znane są ze swojego przywiązania i lojalności w stosunku do właściciela. Są towarzyskie, jednak obcych traktują z rezerwą i nieufnością.
Charakter jamnika może różnić się w zależności od jego odmiany. Długowłose psy są spokojniejsze. Mają wrodzoną inteligencję odziedziczoną po spanielach. Szorstkowłose natomiast charakteryzuje odwaga terrierów.
Duża część jamników nie lubi nieznajomych ludzi i reaguje na nich szczekaniem i warczeniem. Chociaż najczęściej jamniki są bardzo energicznymi zwierzętami, zdarzają się też psy bardzo spokojne.
Jamnik wymaga szczególnej troski i zainteresowania właściciela. Psy te mają szczególne wymagania jeśli chodzi o tresurę i rozrywkę. Wymagają dużo uwagi, w przeciwnym razie mogą stać się agresywne i groźne. Niektóre nie tolerują dzieci. Przy odpowiednim ułożeniu jamnik może bardzo zaprzyjaźnić się z dzieckiem.`,
        "average","safe for adults","small",3.5,14.5,12,16)
addKind('Rottweiler'          , 'Pinczery i sznaucery, molosy, szwajcarskie psy górskie i do bydła, pozostałe rasy',
        ['czarny','brązowy'],
`Rottweiler z natury jest psem obronnym i agresywnym wobec intruzów. Według wzorca jest to pies o zrównoważonej psychice, wymagający odpowiedniego i konsekwentnego podejścia. Pewność siebie jest główną cechą charakteru tej rasy, podobnie jak upór, samodzielność czy skłonność do dominacji (ujawnia się to szczególnie u samców). W rękach osoby brutalnej i niezrównoważonej rottweiler staje się nieprzewidywalny i może stanowić zagrożenie dla otoczenia, z właścicielem włącznie. Pies ten potrzebuje sporej dawki codziennego ruchu: regularnych treningów i szkoleń oraz aktywnych spacerów.`
,"hyperactive", "dangerous", "big", 43, 63, 11, 13)

addKind('Mops'                , 'Psy ozdobne i do towarzystwa', ["czarny","płowy"],
`Pies tej rasy jest kontaktowy i towarzyski, więc źle znosi długotrwałą samotność. Wykazuje niewielki stopień posłuszeństwa. Szybko przystosowuje się do życia w rodzinie.
Ze względu na obciążenie chorobami, moralność chodowli tej rasy poddawana jest w wątpliwość.`,
"lazy","safe for kids","small",6.3,8.1,12,15)

// addKind('Jack Russell terrier', 'Teriery'

addKind('Dalmatyńczyk'        , 'Psy gończe i rasy pokrewne', ["biało-czarne", "biało-brązowe"],
`Jest to pies odważny, czujny i zrównoważony. Wykazuje wysoki stopień przywiązania do członków rodziny, dobrze czuje się w towarzystwie dzieci. Aktywny i towarzyski, sprawdza się jako pies rodzinny, jeśli jest odpowiednio prowadzony. Na ogół przyjaźnie nastawiony do innych zwierząt. Dalmatyńczyk nie jest psem odpowiednim dla mało ruchliwych osób. Podatny na szkolenie, chętny do nauki, którą z uwagi na niezależność charakteru tej rasy należy zaczynać jak najwcześniej.`
, "average", "safe for adults", "big", 55.9, 61, 14, 17)
// addKind('Chihuahua'           , 'Psy ozdobne i do towarzystwa'
// addKind('Sznaucer olbrzym'    , 'Pinczery i sznaucery, molosy, szwajcarskie psy górskie i do bydła, pozostałe rasy'
// addKind('Bernardyn'           , 'Pinczery i sznaucery, molosy, szwajcarskie psy górskie i do bydła, pozostałe rasy'
// addKind('Pomeranian'          , 'Szpice i psy w typie pierwotnym'
// addKind('Welsh corgi'         , 'Owczarki i inne psy pasterskie, z wyłączeniem szwajcarskich psów do bydła'
// addKind('Shih Tzu'            , 'Psy ozdobne i do towarzystwa'
// addKind('Beagle'              , 'Psy gończe i rasy pokrewne'

// addKind('Akita Inu'           , 'Szpice i psy w typie pierwotnym'
addKind('Husky Syberyjski'    , 'Szpice i psy w typie pierwotnym', ["szary","wilczasty","sobolowy"],
`Współcześnie husky syberyjski jest wykorzystywany, tak jak i dawniej, jako pies zaprzęgowy, także jako pies rodzinny.`,
"average","safe for adults","big",16,27,12,14)

interface Dog{
  nickname: string,
  kindName: string,
  color: string,
  mass:number,
  age:number
}

const dogs:Dog[] = [];
function addDog(nickname:string, kindName:string, color:string, mass:number, age:number) {
  dogs.push({nickname, kindName, color, mass, age})
}

const nicknames = ['Max', 'Kobe', 'Oscar', 'Cooper', 'Oakley', 'Mac', 'Charlie', 'Rex', 'Rudy', 'Teddy', 'Bailey', 'Chip', 'Bear', 'Cash', 'Walter', 'Milo', 'Jasper', 'Blaze', 'Bentley', 'Bo', 'Ozzy', 'Ollie', 'Boomer', 'Odin', 'Buddy', 'Lucky', 'Axel', 'Rocky', 'Ruger', 'Bruce', 'Leo', 'Beau', 'Odie', 'Zeus', 'Baxter', 'Arlo', 'Duke', 'Oreo', 'Echo', 'Finn', 'Gunner', 'Tank', 'Apollo', 'Henry', 'Romeo', 'Murphy', 'Simba', 'Porter', 'Diesel', 'George', 'Harley', 'Toby', 'Coco', 'Otis', 'Louie', 'Rocket', 'Rocco', 'Tucker', 'Ziggy', 'Remi', 'Jax', 'Prince', 'Whiskey', 'Ace', 'Shadow', 'Sam', 'Jack', 'Riley', 'Buster', 'Koda', 'Copper', 'Bubba', 'Winston', 'Luke', 'Jake', 'Oliver', 'Marley', 'Benny', 'Gus', 'Zeke', 'Bowie', 'Loki', 'Levi', 'Dozer', 'Moose', 'Benji', 'Rusty', 'Archie', 'Ranger', 'Joey', 'Bandit', 'Remy', 'Kylo', 'Scout', 'Dexter', 'Ryder', 'Thor', 'Gizmo', 'Tyson', 'Bruno', 'Chase', 'Samson', 'King', 'Cody', 'Rambo', 'Blue', 'Sarge', 'Harry', 'Atlas', 'Chester', 'Gucci', 'Theo', 'Maverick', 'Miles', 'Jackson', 'Lincoln', 'Watson', 'Hank', 'Wally', 'Peanut', 'Titan', ];

function randomElement<T>(array:T[]):T {
  const index = Math.floor(array.length * Math.random()) ;
  const result = array[ index ];
  if(!result){
    console.warn(`---------------!!!---------------`)
    console.warn(`from array of ${array.length}`)
    console.warn(`selected index ${index}`)
    console.warn(`leading to ${result}`)
    console.warn(``)
  }
  return result;
}
function randomSFloatInRange(a, b){
  const from = Math.min(a,b)
  const to = Math.max(a,b)
  return Math.round( 10 * (from + Math.random() * (to - from)) ) / 10;
}

function randomDog():Dog {
  const kind = randomElement(kinds);
  const nickname = randomElement(nicknames);

  return{
    nickname,
    age: randomSFloatInRange(kind.minTypicalLifespan, kind.maxTypicalLifespan),
    color: randomElement(kind.colors),
    kindName: kind.name,
    mass: randomSFloatInRange(kind.minHealthyMass, kind.maxHealthyMass)
  }
}

for (let i = 0; i < 1000; i++) {
  dogs.push(randomDog());
}

const result =  JSON.stringify({kinds, dogs})

fs.writeFileSync('dogs.json', result)
fs.writeFileSync('dogs.js', "var dogs = JSON.parse('"+result+"');")