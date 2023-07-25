/**
 * The cost of something in the army roster
 */
export default class Cost {
    constructor(
        public readonly name: string,
        public readonly typeID: string,
        public readonly value: number,
    ) {}

    static fromJSON(json: any) {
        return new Cost(json['@_name'], json['@_typeId'], json['@_value']);
    }
}