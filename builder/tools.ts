export function randomArrayElement<T>(array:T[]):T {
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
export function randomFloatInRange(a:number, b:number, precision?:number){
  const from = Math.min(a,b)
  const to = Math.max(a,b)
  if(typeof precision === "undefined") return from + Math.random() * (to - from);
  return Math.round( Math.pow(10,precision) * randomFloatInRange(a,b) ) / Math.pow(10,precision);
}
export function randomIntInRange(a, b){
  const from = Math.min(a,b)
  const to = Math.max(a,b)
  return Math.floor((from + Math.random() * (to - from) + 1) );
}
export function uniqueArray<T>(array:T[], processor?:(el:T)=>any) {
  const _processor = processor || function(a:T){return a};
  const set = new Set<T>();
  return array.filter(e => {
    if(set.has(_processor(e))) return false;
    set.add(_processor(e));
    return true;
  })
}
export function randomBinary(probability?:number) {
  if(typeof probability === "undefined") return Math.random() < 0.5;
  return Math.random()<probability;
}