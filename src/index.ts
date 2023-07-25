import fs from 'fs';
import { XMLParser } from 'fast-xml-parser';
import Catalog from './struct';

export default function parseCatalogSchema(filePath: string, encoding: BufferEncoding = 'utf8') {
    const options = {
        ignoreAttributes: false,
        parseAttributeValue: true,
    };
    const parser = new XMLParser(options);
    const data = fs.readFileSync(filePath, encoding);
    const parsedData = parser.parse(data);
    return Catalog.fromJSON(parsedData['catalogue']);   
}
