import tagContentAsArray from './utils';

export class Condition {
    constructor(
        public readonly field: string,
        public readonly scope: string,
        public readonly value: number,
        public readonly percentValue: boolean,
        public readonly shared: boolean,
        public readonly includeChildSelections: boolean,
        public readonly includeChildForces: boolean,
        public readonly childID: string,
        public readonly type: string,
    ) {}

    static fromJSON(json: any) {
        return new Condition(
            json['@_field'],
            json['@_scope'],
            json['@_value'],
            json['@_percentValue'],
            json['@_shared'],
            json['@_includeChildSelections'],
            json['@_includeChildForces'],
            json['@_childID'],
            json['@_type'],
        );
    }
}

export default class Modifier {
    constructor(
        public readonly field: string,
        public readonly type: string,
        public readonly value: number,
        public readonly conditions: Condition[],
    ) {}

    static fromJSON(json: any) {
        return new Modifier(
            json['@_field'],
            json['@_type'],
            json['@_value'],
            tagContentAsArray(json['conditions'], 'condition').map(Condition.fromJSON),
        )
    }
}