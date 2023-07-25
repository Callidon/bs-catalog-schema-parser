/**
 * A rule for the game system
 */
export default class Rule {
    /**
     * Constructor
     * @param id ID
     * @param name Rule's name
     * @param hidden Hidden?
     * @param description Rule content as a text
     */
    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly hidden: boolean,
        public readonly description: string,
    ) {}

    static fromJSON(json: any) {
        return new Rule(json['@_id'], json['@_name'], json['@_hidden'], json['description'])
    }
}