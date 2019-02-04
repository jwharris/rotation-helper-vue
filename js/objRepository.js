const db = {
    categories: [
        { id: 1, name: 'Test 1' },
        { id: 4, name: 'Test 2' },
        { id: 7, name: 'Test 3' },
    ],

    subCategories: [
        { catID: 1, subCatId: 2, name: 'SubTest 1' },
        { catID: 1, subCatId: 3, name: 'SubTest 2' },
        { catID: 4, subCatId: 5, name: 'SubTest 1' },
        { catID: 4, subCatId: 6, name: 'SubTest 2' },
        { catID: 7, subCatId: 8, name: 'SubTest 1' },
        { catID: 7, subCatId: 9, name: 'SubTest 2' },
    ],

    descriptions: [
        { subCatId: 2, description: 'This is a test 1' },
        { subCatId: 3, description: 'This is a test 2' },
        { subCatId: 5, description: 'This is a test 5' },
        { subCatId: 6, description: 'This is a test 6' },
        { subCatId: 7, description: 'This is a test 7' },
        { subCatId: 8, description: 'This is a test 8' }
    ]
};

export default db;

