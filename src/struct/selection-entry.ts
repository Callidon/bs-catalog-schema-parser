import Constraint from './constraint';
import Cost from './cost';
import { CategoryLink, EntryLink, InfoLink } from './links';
import Modifier from './modifier';
import Profile from './profile';
import tagContentAsArray from './utils';

/**
 * A selectable entry in the catalog (unit, upgrade, etc)
 */
export class SelectionEntry {
    /**
     * Constructor
     * @param name 
     * @param hidden 
     * @param collective 
     * @param _import 
     * @param type 
     * @param constraints 
     * @param profiles 
     * @param costs 
     * @param modifiers 
     * @param infoLinks 
     * @param categoryLinks 
     */
    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly hidden: boolean,
        public readonly collective: boolean,
        public readonly _import: boolean,
        public readonly type: string,
        public readonly constraints: Constraint[],
        public readonly profiles: Profile[],
        public readonly costs: Cost[],
        public readonly modifiers: Modifier[],
        public readonly entryLinks: EntryLink[],
        public readonly infoLinks: InfoLink[],
        public readonly categoryLinks: CategoryLink[],
        public readonly selectionEntries: SelectionEntry[],
        public readonly selectionEntryGroups: SelectionEntryGroup[],
    ) {}

    static fromJSON(json: any): SelectionEntry {
        return new SelectionEntry(
            json['@_id'],
            json['@_name'],
            json['@_hidden'],
            json['@_collective'],
            json['@_import'],
            json['@_type'],
            tagContentAsArray(json['constraints'], 'constraint').map(Constraint.fromJSON),
            tagContentAsArray(json['profiles'], 'profile').map(Profile.fromJSON),
            tagContentAsArray(json['costs'], 'cost').map(Cost.fromJSON),
            tagContentAsArray(json['modifiers'], 'modifier').map(Modifier.fromJSON),
            tagContentAsArray(json['entryLinks'], 'entryLink').map(EntryLink.fromJSON),
            tagContentAsArray(json['infoLinks'], 'infoLink').map(InfoLink.fromJSON),
            tagContentAsArray(json['categoryLinks'], 'categoryLink').map(CategoryLink.fromJSON),
            tagContentAsArray(json['selectionEntries'], 'selectionEntry').map(SelectionEntry.fromJSON),
            tagContentAsArray(json['selectionEntryGroups'], 'selectionEntryGroup').map(SelectionEntryGroup.fromJSON),
        );
    }
}

/**
 * A groupf of selectable entries of the catalog
 */
export class SelectionEntryGroup {
    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly hidden: boolean,
        public readonly collective: boolean,
        public readonly _import: boolean,
        public readonly constraints: Constraint[],
        public readonly selectionEntries: SelectionEntry[],
    ) {}

    static fromJSON(json: any) {
        return new SelectionEntryGroup(
            json['@_id'],
            json['@_name'],
            json['@_hidden'],
            json['@_collective'],
            json['@_import'],
            tagContentAsArray(json['constraints'], 'constraint').map(Constraint.fromJSON),
            tagContentAsArray(json['selectionEntries'], 'selectionEntry').map(SelectionEntry.fromJSON),
        );
    }
}