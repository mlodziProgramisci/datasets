import fs from "fs-extra";
import {join} from "path";
import {load as yaml} from 'js-yaml';
import { uniqueArray } from "./tools";

function log(str:string) {
  str.split("\n").forEach(line => console.log(line));
}

function testPathSync(expect:"file"|"dir", ...pathParts:string[]){
  const fullpath = join(...pathParts);
  const stats = fs.lstatSync(fullpath);
  if(expect==="dir") return stats.isDirectory();
  if(expect==="file") return stats.isFile();
  throw new Error(`incorrect expect "${expect}"`);
}

function listDir(path:string,type?:"dirs"|"files",fullPaths?:boolean):string[]{
  if(type && type !== "dirs" && type !== "files") throw new Error(`incorrect type "${type}"`);

  let dirEntries = fs.readdirSync(path);
  if(type === "dirs") dirEntries = dirEntries.filter( (name) => testPathSync('dir',path,name) );
  if(type === "files") dirEntries = dirEntries.filter( (name) =>testPathSync('file',path,name) );
  if(fullPaths) dirEntries = dirEntries.map( (name) => join(path,name) );

  return dirEntries;
}

export type ActivityLevel = "hyperactive"|"average"|"lazy";
export type AggressivenessLevel = "dangerous"|"safe for adults"|"safe for kids";
export type DogSize = "big"|"medium"|"small";

export interface Kind {
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

export function getKinds(): Kind[] {
  const kindFilesPaths = listDir(join(__dirname, '../source/kinds'),"files",true);
  const kindFilesContents = kindFilesPaths.map( p => fs.readFileSync(p, "utf-8") );
  const kindFilesData = kindFilesContents.map( str => yaml(str) ) as Kind[];

  const uk = uniqueArray(kindFilesData, kind => kind.name)
  
  uk.forEach( kind => kind.image = "https://mlodziprogramisci.github.io/dogs/assets/pieski/" + kind.name.toLowerCase().replace(' ','-')+ '.svg' ) 

  return uk;
}