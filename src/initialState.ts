const initialState: State = {
    categories: [{
        id: '1',
        selected: false,
        name: 'First category',
    },{
        id: '2',
        selected: false,
        name: 'Second category',
    }],
    products: [{
        categoryId: ['1'],
        id: '1',
        name: 'First category product one',
        description: 'Description of First category product one',
        selected: false
    },{
        categoryId: ['1'],
        id: '2',
        name: 'First category product two',
        description: 'Description of First category product two',
        selected: false
    },
    {
        categoryId: ['2'],
        id: '3',
        name: 'Second category product one',
        description: 'Description of second category product one',
        selected: false
    },
    {
        categoryId: ['2'],
        id: '4',
        name: 'Second category product two',
        description: 'Description of second category product two',
        selected: false
    }],
    search: null
}

export default initialState