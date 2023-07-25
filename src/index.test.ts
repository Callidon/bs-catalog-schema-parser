import parseCatalogSchema from '.';

test('parseCatalogSchema', () => {
    const catalog = parseCatalogSchema('./resources/World_Eaters.cat');
    
    expect(catalog.name).toBe('Chaos - World Eaters');
    expect(catalog.revision).toBe(2);
    expect(catalog.battleScribeVersion).toBe(2.03);
    expect(catalog.authorName).toBeUndefined();
    expect(catalog.authorUrl).toBeUndefined();
    expect(catalog.gameSystemId).toBe('sys-352e-adc2-7639-d6a9');
    expect(catalog.gameSystemRevision).toBe(1);
    expect(catalog.library).toBe(false);
    
    expect(catalog.profileTypes).toHaveLength(3);
    expect(catalog.categoryEntries).toHaveLength(24);
    expect(catalog.selectionEntries).toHaveLength(2);
    expect(catalog.sharedSelectionEntryGroups).toHaveLength(1);
    expect(catalog.sharedRules).toHaveLength(1);
    expect(catalog.sharedProfiles).toHaveLength(4);
    expect(catalog.catalogueLinks).toHaveLength(4);
});