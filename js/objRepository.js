const db = {
    categories: [
        { id: 1, name: 'Test 1' },
        { id: 2, name: 'SubTest 1' },
        { id: 3, name: 'SubTest 2' },
        { id: 4, name: 'Test 2' },
        { id: 5, name: 'SubTest 1' },
        { id: 6, name: 'SubTest 2' },
        { id: 7, name: 'Test 3' },
        { id: 8, name: 'SubTest 1' },
        { id: 9, name: 'SubTest 2' },
        { id: 10, name: 'SubTest 1 Description 1' },
        { id: 11, name: 'SubTest 1 Description 2' },
        { id: 12, name: 'SubTest 2 Description 1' },
        { id: 13, name: 'SubTest 2 Description 2' },
        { id: 14, name: 'SubTest 3 Description 1' },
        { id: 15, name: 'SubTest 3 Description 2' },
        { id: 16, name: 'SubTest 4 Description 1' },
        { id: 17, name: 'SubTest 4 Description 2' },
        { id: 18, name: 'SubTest 5 Description 1' },
        { id: 19, name: 'SubTest 5 Description 2' },
        { id: 20, name: 'SubTest 6 Description 1' }
    ],

    categoriesView: [
        { id: 1, name: 'Test 1' },
        { id: 4, name: 'Test 2' },
        { id: 7, name: 'Test 3' }
    ],

    subCategoriesView: [
        { id: 2, catId: 1, name: 'subTest 1' },
        { id: 3, catId: 1, name: 'subTest 2' },
        { id: 5, catId: 4, name: 'subTest 1' },
        { id: 6, catId: 4, name: 'subTest 2' },
        { id: 8, catId: 7, name: 'subTest 1' },
        { id: 9, catId: 7, name: 'subTest 2' },
    ],

    relations: [
        { id: 2, catId: 1 },
        { id: 3, catId: 1 },
        { id: 5, catId: 4 },
        { id: 6, catId: 4 },
        { id: 8, catId: 7 },
        { id: 9, catId: 7 }

    ],

    // subCategories: [
    //     { catId: 1, id: 2, name: 'SubTest 1' },
    //     { catId: 1, id: 3, name: 'SubTest 2' },
    //     { catId: 4, id: 5, name: 'SubTest 1' },
    //     { catId: 4, id: 6, name: 'SubTest 2' },
    //     { catId: 7, id: 8, name: 'SubTest 1' },
    //     { catId: 7, id: 9, name: 'SubTest 2' }
    // ],

    descriptionsView: [
        { id: 10, relationId: 2, name: 'SubTest 1 Description 1', description: 'This is a test 1' },
        { id: 11, relationId: 2, name: 'SubTest 1 Description 2', description: 'This is a test 2' },
        { id: 12, relationId: 3, name: 'SubTest 2 Description 1', description: 'This is a test 1' },
        { id: 13, relationId: 3, name: 'SubTest 2 Description 2', description: 'This is a test 2' },
        { id: 14, relationId: 5, name: 'SubTest 3 Description 1', description: 'This is a test 1' },
        { id: 15, relationId: 5, name: 'SubTest 3 Description 2', description: 'This is a test 2' },
        { id: 16, relationId: 6, name: 'SubTest 4 Description 1', description: 'This is a test 1' },
        { id: 17, relationId: 6, name: 'SubTest 4 Description 2', description: 'This is a test 2' },
        { id: 18, relationId: 8, name: 'SubTest 5 Description 1', description: 'This is a test 1' },
        { id: 19, relationId: 8, name: 'SubTest 5 Description 2', description: 'This is a test 2' },
        { id: 20, relationId: 9, name: 'SubTest 6 Description 1', description: 'This is a test 1' }
    ],

    descriptions: [
        { id: 10, relationId: 2, description: 'This is a test 1' },
        { id: 11, relationId: 2, description: 'This is a test 2' },
        { id: 12, relationId: 3, description: 'This is a test 1' },
        { id: 13, relationId: 3, description: 'This is a test 2' },
        { id: 14, relationId: 5, description: 'This is a test 1' },
        { id: 15, relationId: 5, description: 'This is a test 2' },
        { id: 16, relationId: 6, description: 'This is a test 1' },
        { id: 17, relationId: 6, description: 'This is a test 2' },
        { id: 18, relationId: 8, description: 'This is a test 1' },
        { id: 19, relationId: 8, description: 'This is a test 2' },
        { id: 20, relationId: 9, description: 'This is a test 1' }
    ]
};

export default db;