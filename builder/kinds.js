"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getKinds = void 0;
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = require("path");
const js_yaml_1 = require("js-yaml");
const tools_1 = require("./tools");
function log(str) {
    str.split("\n").forEach(line => console.log(line));
}
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
function getKinds() {
    const kindFilesPaths = listDir((0, path_1.join)(__dirname, '../source/kinds'), "files", true);
    const kindFilesContents = kindFilesPaths.map(p => fs_extra_1.default.readFileSync(p, "utf-8"));
    const kindFilesData = kindFilesContents.map(str => (0, js_yaml_1.load)(str));
    const uk = (0, tools_1.uniqueArray)(kindFilesData, kind => kind.name);
    uk.forEach(kind => kind.image = "https://mlodziprogramisci.github.io/dogs/assets/pieski/" + kind.name.toLowerCase().replace(' ', '-'));
    return uk;
}
exports.getKinds = getKinds;
