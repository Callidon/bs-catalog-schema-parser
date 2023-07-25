import { EntryLink } from './links';
import Profile from './profile';
import Rule from './rule';
import { SelectionEntry } from './selection-entry';
import tagContentAsArray from './utils';

/**
 * A publication in the catalog
 */
export class Publication {
    /**
     * Constructor
     * @param id ID
     * @param name Name
     */
    constructor(
        public readonly id: string,
        public readonly name: string
    ) {}

    static fromJSON(json: any) {
        return new Publication(json['@_id'], json['@_name']);
    }
}

/**
 * A category entry
 */
export class CategoryEntry {
    /**
     * Constructor
     * @param id ID
     * @param name Entry name
     * @param hidden Hidden?
     */
    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly hidden: boolean,
    ) {}

    static fromJSON(json: any) {
        return new CategoryEntry(json['@_id'], json['@_name'], json['@_hidden']);
    }
}

export class Catalog {
    /**
     * A catalog instance
     * @param name 
     * @param revision 
     * @param battleScribeVersion 
     * @param authorName 
     * @param authorUrl 
     * @param gameSystemId 
     * @param gameSystemRevision 
     * @param library 
     * @param publications 
     * @param categoryEntries 
     * @param sharedSelectionEntries 
     */
    constructor(
        public readonly name: string,
        public readonly revision: number,
        public readonly battleScribeVersion: number,
        public readonly authorName: string,
        public readonly authorUrl: string,
        public readonly gameSystemId: string,
        public readonly gameSystemRevision: number,
        public readonly library: boolean,
        public readonly publications: Publication[],
        public readonly categoryEntries: CategoryEntry[],
        public readonly sharedSelectionEntries: SelectionEntry[],
        public readonly sharedRules: Rule[],
        public readonly sharedProfiles: Profile[],
        public readonly entryLinks: EntryLink[],
    ) {}

    static fromJSON(json: any) {
        return new Catalog(
            json['@_name'],
            json['@_revision'],
            json['@_battleScribeVersion'],
            json['@_authorName'],
            json['@_authorUrl'],
            json['@_gameSystemId'],
            json['@_gameSystemRevision'],
            json['@_library'],
            tagContentAsArray(json['publications'], 'publication').map(Publication.fromJSON),
            tagContentAsArray(json['categoryEntries'], 'categoryEntry').map(CategoryEntry.fromJSON),
            tagContentAsArray(json['sharedSelectionEntries'], 'selectionEntry').map(SelectionEntry.fromJSON),
            tagContentAsArray(json['sharedRules'], 'rule').map(Rule.fromJSON),
            tagContentAsArray(json['sharedProfiles'], 'profile').map(Profile.fromJSON),
            tagContentAsArray(json['entryLinks'], 'entryLink').map(EntryLink.fromJSON),
        );
    }
}