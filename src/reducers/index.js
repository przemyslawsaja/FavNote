const initialState = {
    twitters: [
        {
            id: '1',
            title: 'Hillary C.',
            created: '3 day ago',
            twitterName: 'HillaryClinton',
            content: 'Lorem ipsum dolor sit amet felis. Maecenas pharetra velit pede urna eu libero quis justo. ' +
                'Donec in ipsum. Curabitur feugiat pede. Duis a sapien. In laoreet luctus, ante ipsum in faucibus justo.' +
                ' Nulla ante. Nullam libero facilisis nec,',
        },
        {
            id: '2',
            title: 'Donald',
            created: '1 day ago',
            twitterName: 'realDonaldTrump',
            content: 'Lorem ipsum dolor sit amet felis. Maecenas pharetra velit pede urna eu libero quis justo. ' +
                'Donec in ipsum. Curabitur feugiat pede. Duis a sapien. In laoreet luctus, ante ipsum in faucibus justo.' +
                ' Nulla ante. Nullam libero facilisis nec,',
        },
        {
            id: '3',
            title: 'Tom Cotton',
            created: '2 day ago',
            twitterName: 'SenTomCotton',
            content: 'Lorem ipsum dolor sit amet felis. Maecenas pharetra velit pede urna eu libero quis justo. ' +
                'Donec in ipsum. Curabitur feugiat pede. Duis a sapien. In laoreet luctus, ante ipsum in faucibus justo.' +
                ' Nulla ante. Nullam libero facilisis nec,',
        },
        {
            id: '4',
            title: 'Richard D.',
            created: '1 day ago',
            twitterName: 'RichardDawkins',
            content: 'Lorem ipsum dolor sit amet felis. Maecenas pharetra velit pede urna eu libero quis justo. ' +
                'Donec in ipsum. Curabitur feugiat pede. Duis a sapien. In laoreet luctus, ante ipsum in faucibus justo.' +
                ' Nulla ante. Nullam libero facilisis nec,',
        },
        {
            id: '5',
            title: 'CodeWise',
            created: '1 day ago',
            twitterName: 'Rob_Gryn',
            content: ' Maecenas pharetra velit pede urna eu libero quis justo. ' +
                'Donec in ipsum. Curabitur feugiat pede. Duis a sapien. In laoreet luctus, ante ipsum in faucibus justo.' +
                ' Nulla ante. Nullam libero facilisis nec,',
        },
    ],
    notes: [
        {
            id: '1',
            title: 'Learn Redux',
            created: '3 day ago',
            content: 'Lorem ipsum dolor sit amet felis. Maecenas pharetra velit pede urna eu libero quis justo. ' +
                'Donec in ipsum. Curabitur feugiat pede. Duis a sapien. In laoreet luctus, ante ipsum in faucibus justo.' +
                ' Nulla ante. Nullam libero facilisis nec,',
        },
        {
            id: '2',
            title: 'Do some workout',
            created: '1 day ago',
            content: 'Lorem ipsum dolor sit amet felis. Maecenas pharetra velit pede urna eu libero quis justo. ' +
                'Donec in ipsum. Curabitur feugiat pede. Duis a sapien. In laoreet luctus, ante ipsum in faucibus justo.' +
                ' Nulla ante. Nullam libero facilisis nec,',
        },
        {
            id: '3',
            title: 'learn hooks',
            created: '2 day ago',
            content: 'Lorem ipsum dolor sit amet felis. Maecenas pharetra velit pede urna eu libero quis justo. ' +
                'Donec in ipsum. Curabitur feugiat pede. Duis a sapien. In laoreet luctus, ante ipsum in faucibus justo.' +
                ' Nulla ante. Nullam libero facilisis nec,',
        },
        {
            id: '4',
            title: 'context api + hooks or redux?',
            created: '1 day ago',
            content: 'Lorem ipsum dolor sit amet felis. Maecenas pharetra velit pede urna eu libero quis justo. ' +
                'Donec in ipsum. Curabitur feugiat pede. Duis a sapien. In laoreet luctus, ante ipsum in faucibus justo.' +
                ' Nulla ante. Nullam libero facilisis nec,',
        },
    ],
    articles: [
        {
            id: '1',
            title: 'Why learn anuglar?',
            created: '1 day ago',
            content: 'Lorem ipsum dolor sit amet felis. Maecenas pharetra velit pede urna eu libero quis justo. ' +
                'Donec in ipsum. Curabitur feugiat pede. Duis a sapien. In laoreet luctus, ante ipsum in faucibus justo.' +
                ' Nulla ante. Nullam libero facilisis nec,',
            articleUrl: "https://www.google.pl/"
        },
        {
            id: '2',
            title: 'Vue or React? Whats better in 2020?',
            created: '1 day ago',
            content: 'Lorem ipsum dolor sit amet felis. Maecenas pharetra velit pede urna eu libero quis justo. ' +
                'Donec in ipsum. Curabitur feugiat pede. Duis a sapien. In laoreet luctus, ante ipsum in faucibus justo.' +
                ' Nulla ante. Nullam libero facilisis nec,',
            articleUrl: "https://www.google.pl/"
        },
        {
            id: '3',
            title: 'Use Typescript',
            created: '1 day ago',
            content: 'Lorem ipsum dolor sit amet felis. Maecenas pharetra velit pede urna eu libero quis justo. ' +
                'Donec in ipsum. Curabitur feugiat pede. Duis a sapien. In laoreet luctus, ante ipsum in faucibus justo.' +
                ' Nulla ante. Nullam libero facilisis nec,',
            articleUrl: "https://www.google.pl/"
        },
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
        default:
            return state;
    }
    return state;
};

export default rootReducer;