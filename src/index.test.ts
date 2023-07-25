import quickParse from "."

test('index', () => {
    const parsedData = quickParse();
    console.log(parsedData["catalogue"]["sharedSelectionEntries"]);
    expect(parsedData["catalogue"]["sharedSelectionEntries"]["selectionEntry"]).toHaveLength(3)
})