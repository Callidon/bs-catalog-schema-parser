import tagContentAsArray from './utils';

/** 
 * A Characteristic in a unit profile (strength, toughness, save, etc)
 */
export class Characteristic {
    /**
     * 
     * @param name Name
     * @param typeID Ref to the characteristic type
     * @param text Value
     */
    constructor(
        public readonly name: string,
        public readonly typeID: string,
        public readonly text: string,
    ) {}

    static fromJSON(json: any) {
        return new Characteristic(json['@_name'], json['@_typeId'], json['#text']);
    }
}

/**
 * An unit profile
 */
export default class Profile {
    /**
     * Constructor
     * @param id ID
     * @param name Name
     * @param hidden Hidden?
     * @param typeID Ref to the profile's type
     * @param typeName Type's name (unit, etc)
     * @param characteristics List of characteristics in the profile
     */
    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly hidden: boolean,
        public readonly typeID: string,
        public readonly typeName: string,
        public readonly characteristics: Characteristic[],
    ) {}

    static fromJSON(json: any) {
        return new Profile(
            json['@_id'],
            json['@_name'],
            json['@_hidden'],
            json['@_typeId'],
            json['@_typeName'],
            tagContentAsArray(json['characteristics'], 'characteristic').map(Characteristic.fromJSON),
        );
    }
}