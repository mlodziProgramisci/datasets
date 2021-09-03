import {getKinds} from './kinds'
import {randomDog, randomDogs} from './dogs'
import {program, Command} from 'commander'
import fs from 'fs-extra'
import {join} from 'path'
import {load as yaml} from 'js-yaml'
import { randomIntInRange } from './tools'

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

export function getNicknames(): string[] {
  const file = fs.readFileSync(join(__dirname, '../source/nicknames.yaml'), "utf-8")
  return yaml(file) as string[];
}

function write(id:string, payload:object) {
  const json = JSON.stringify(payload);
  const js = `var ${id} = \`${json.replace('\n', ' \n ').replace('.', ' . ')}\``
  fs.ensureDirSync(join(__dirname, '../build'));
  fs.writeFileSync(join(__dirname, '../build/', `${id}.json`), json)
  fs.writeFileSync(join(__dirname, '../build/', `${id}.js`), js)
}

program.command("build")

      .action(()=>{
        const kinds = getKinds()
        const nicknames = getNicknames()
        write('kinds', kinds);
        write('dogs', randomDogs(kinds, nicknames, ["addAccomodationNeeds", "addBehaviour", "addHelpOpportunities"], randomIntInRange(201,250)));
      });  
      
program.parse(process.argv);