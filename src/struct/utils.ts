/**
 * Access an XML tag, and return its content as an array.
 * During parsing, if a tag has only one children, then fast-xml-parser will return its conent as an object.
 * but if it has multiplte childrens, it will return it as an array.
 * This function is here to unify this behavior.
 * @param input Input XML as a JSON object
 * @param tagKey Tag key
 * @returns Tag children(s) as an array
 */
export default function tagContentAsArray(input: any, tagKey: string): any[] {
    if (!input || !(tagKey in input)) return [];
    const innerTag = input[tagKey];
    if (Array.isArray(innerTag)) return innerTag;
    return [innerTag];
}