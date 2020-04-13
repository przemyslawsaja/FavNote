const initialState = {
    twitters: [
        {
            id: '1',
            title: 'CodeWise',
            created: '1 day ago',
            twitterName: 'Rob_Gryn',
            content: 'This is example twitter. Click remove button to delete this twitter and add your own one :)',
        },
    ],
    notes: [
        {
            id: '1',
            title: 'Learn Redux',
            created: '3 day ago',
            content: 'This is example note. Click remove button to delete this note and add your own one :)',
        },
    ],
    articles: [
        {
            id: '1',
            title: 'Why Vue.js?',
            created: '1 day ago',
            content: 'This is example article. Click remove button to delete this article and add your own one :)',
            articleUrl: "https://www.codeinwp.com/blog/angular-vs-vue-vs-react/"
        }
     ]
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case('REMOVE_ITEM'):
            return {
                ...state,
                [action.payload.itemType]: [
                    ...state[action.payload.itemType].filter(item => item.id !== action.payload.id),
                ]
            };
        case('ADD_ITEM'):
            return {
                ...state,
                [action.payload.itemType]: [
                    ...state[action.payload.itemType],
                    action.payload.item
                ]
            };
        default:
            return state;
    }
    return state;
};

export default rootReducer;