"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNicknames = void 0;
const kinds_1 = require("./kinds");
const dogs_1 = require("./dogs");
const commander_1 = require("commander");
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = require("path");
const js_yaml_1 = require("js-yaml");
const tools_1 = require("./tools");
function testPathSync(expect, ...pathParts) {
    const fullpath = (0, path_1.join)(...pathParts);
    const stats = fs_extra_1.default.lstatSync(fullpath);
    if (expect === "dir")
        return stats.isDirectory();
    if (expect === "file")
        return stats.isFile();
    throw new Error(`incorrect expect "${expect}"`);
}
function listDir(path, type, fullPaths) {
    if (type && type !== "dirs" && type !== "files")
        throw new Error(`incorrect type "${type}"`);
    let dirEntries = fs_extra_1.default.readdirSync(path);
    if (type === "dirs")
        dirEntries = dirEntries.filter((name) => testPathSync('dir', path, name));
    if (type === "files")
        dirEntries = dirEntries.filter((name) => testPathSync('file', path, name));
    if (fullPaths)
        dirEntries = dirEntries.map((name) => (0, path_1.join)(path, name));
    return dirEntries;
}
function getNicknames() {
    const file = fs_extra_1.default.readFileSync((0, path_1.join)(__dirname, '../source/nicknames.yaml'), "utf-8");
    return (0, js_yaml_1.load)(file);
}
exports.getNicknames = getNicknames;
function write(id, payload) {
    const json = JSON.stringify(payload);
    const js = `var ${id} = \`${json.replace('\n', ' \n ').replace('.', ' . ')}\``;
    fs_extra_1.default.ensureDirSync((0, path_1.join)(__dirname, '../build'));
    fs_extra_1.default.writeFileSync((0, path_1.join)(__dirname, '../build/', `${id}.json`), json);
    fs_extra_1.default.writeFileSync((0, path_1.join)(__dirname, '../build/', `${id}.js`), js);
}
commander_1.program.command("build")
    .action(() => {
    const kinds = (0, kinds_1.getKinds)();
    const nicknames = getNicknames();
    write('kinds', kinds);
    write('dogs', (0, dogs_1.randomDogs)(kinds, nicknames, ["addAccomodationNeeds", "addBehaviour", "addHelpOpportunities"], (0, tools_1.randomIntInRange)(201, 250)));
});
commander_1.program.parse(process.argv);
