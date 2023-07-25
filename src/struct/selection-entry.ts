export class Constraint {

}

export class Profile {

}

export class Cost {

}

export class Modifier {

}

export class InfoLink {

}

export class CategoryLink {
    
}


export class SelectionEntry {
    /**
     * A entry in the catalog
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
        public readonly name: string,
        public readonly hidden: boolean,
        public readonly collective: boolean,
        public readonly _import: boolean,
        public readonly type: string,
        public readonly constraints: Constraint[],
        public readonly profiles: Profile[],
        public readonly costs: Cost[],
        public readonly modifiers: Modifier[],
        public readonly infoLinks: InfoLink[],
        public readonly categoryLinks: CategoryLink[],
    ) {}

    static fromJSON(json: any) {
        return
    }
}