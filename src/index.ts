import fs from 'fs';
import { XMLParser } from 'fast-xml-parser';
import Catalog from './struct';

export default function parseCatalogSchema() {
    const options = {
        ignoreAttributes : false
    };
    const parser = new XMLParser(options);
    const data = fs.readFileSync('./resources/Chaos_Gellerpox_Infected.cat', 'utf8');
    return Catalog.fromJSON(parser.parse(data));   
}
