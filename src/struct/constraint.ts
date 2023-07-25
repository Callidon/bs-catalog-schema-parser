export default class Constraint {
    constructor(
        public readonly id: string,
        public readonly type: string,
        public readonly field: string,
        public readonly scope: string,
        public readonly value: number,
        public readonly percentValue: boolean,
        public readonly shared: boolean,
        public readonly includeChildSelections: boolean,
        public readonly includeChildForces: boolean,
    ) {}

    static fromJSON(json: any) {
        return new Constraint(
            json['@_id'],
            json['@_type'],
            json['@_field'],
            json['@_scope'],
            json['@_value'],
            json['@_percentValue'],
            json['@_shared'],
            json['@_includeChildSelections'],
            json['@_includeChildForces'],
        )
    }
}