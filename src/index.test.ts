import parseCatalogSchema from "."

test('index', () => {
    const catalog = parseCatalogSchema();
    expect(catalog).not.toBeNull()
})