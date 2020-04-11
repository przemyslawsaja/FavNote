import React from 'react';
import GridTemplate from "../templates/GridTemplate";
import Card from "../components/Molecules/Card/Card";
const twitters = [
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
    {
        id: '6',
        title: 'My Office',
        created: '5 day ago',
        twitterName: 'Rob_Gryn',
        content: 'Lorem ipsum dolor sit amet felis. Maecenas pharetra velit pede urna eu libero quis justo. ' +
            'Donec in ipsum. Curabitur feugiat pede. Duis a sapien. In laoreet luctus, ante ipsum in faucibus justo.',
    },
];
const Twitters = () => (
    <GridTemplate pageType="twitters">
        {twitters.map( t => (
            <Card
                id={t.id}
                title={t.title}
                twitterName={t.twitterName}
                content={t.content}
                created={t.created}
                cardType="twitters"
                key={t.title}
            />
        ))}
    </GridTemplate>
);

export default Twitters;