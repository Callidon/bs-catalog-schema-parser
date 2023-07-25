export class EntryLink {
    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly hidden: boolean,
        public readonly targetID: string,
        public readonly type: string,
        public readonly collective: boolean,
        public readonly _import: boolean,
    ) {}

    static fromJSON(json: any) {
        return new EntryLink(
            json['@_id'],
            json['@_name'],
            json['@_hidden'],
            json['@_targetId'],
            json['@_type'],
            json['@_collective'],
            json['@_import'],
        );
    }
}

export class InfoLink {
    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly hidden: boolean,
        public readonly targetID: string,
        public readonly type: string,
    ) {}

    static fromJSON(json: any) {
        return new InfoLink(
            json['@_id'],
            json['@_name'],
            json['@_hidden'],
            json['@_targetId'],
            json['@_type'],
        );
    }
}

export class CategoryLink {
    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly hidden: boolean,
        public readonly targetID: string,
        public readonly primary: string,
    ) {}

    static fromJSON(json: any) {
        return new CategoryLink(
            json['@_id'],
            json['@_name'],
            json['@_hidden'],
            json['@_targetId'],
            json['@_primary'],
        );
    }
}

export class CatalogueLink {
    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly importRootEntries: boolean,
        public readonly targetID: string,
        public readonly type: string,
    ) {}

    static fromJSON(json: any) {
        return new CatalogueLink(
            json['@_id'],
            json['@_name'],
            json['@_importRootEntries'],
            json['@_targetId'],
            json['@_type'],
        );
    }
}