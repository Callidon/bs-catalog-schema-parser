import fs from 'fs';
import { XMLParser } from 'fast-xml-parser';

export default function quickParse() {
    const options = {
        ignoreAttributes : false
    };
    const parser = new XMLParser(options);
    const data = fs.readFileSync('./resources/Chaos_Gellerpox_Infected.cat', 'utf8');
    return parser.parse(data);   
}
