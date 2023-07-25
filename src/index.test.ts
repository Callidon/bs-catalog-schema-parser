import parseCatalogSchema from '.';

test('parseCatalogSchema', () => {
    const catalog = parseCatalogSchema('./resources/Gellerpox_Infected.cat');
    // console.log(catalog);
    
    expect(catalog.name).toBe('Chaos - Gellerpox Infected');
    expect(catalog.revision).toBe(12);
    expect(catalog.battleScribeVersion).toBe(2.03);
    expect(catalog.authorName).toBe('BSData Developers');
    expect(catalog.authorUrl).toBe('https://www.bsdata.net/contact');
    expect(catalog.gameSystemId).toBe('28ec-711c-d87f-3aeb');
    expect(catalog.gameSystemRevision).toBe(224);
    expect(catalog.library).toBe(true);
});