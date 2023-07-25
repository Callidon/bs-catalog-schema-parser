import { SelectionEntry } from "./selection-entry";

export class Publication {
    /**
     * 
     * @param name 
     */
    constructor(public readonly name: string) {}
}

export class CategoryEntry {
    /**
     * 
     * @param name 
     * @param hidden 
     */
    constructor(
        public readonly name: string,
        public readonly hidden: boolean,
    ) {}
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
        public readonly revision: string,
        public readonly battleScribeVersion: string,
        public readonly authorName: string,
        public readonly authorUrl: string,
        public readonly gameSystemId: string,
        public readonly gameSystemRevision: string,
        public readonly library: boolean,
        public readonly publications: Publication[],
        public readonly categoryEntries: CategoryEntry[],
        public readonly sharedSelectionEntries: SelectionEntry[],
    ) {}

    static fromJSON(json: any) {
        return
    }
}