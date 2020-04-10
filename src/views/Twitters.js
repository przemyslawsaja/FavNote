import React from 'react';
import UserPageTemplate from "../templates/UserPageTemplate";
import Heading from "../components/Atoms/Heading/Heading";
import Card from "../components/Molecules/Card/Card";
const twitters = [
    {
        title: 'Hillary C.',
        created: '3 day ago',
        twitterName: 'HillaryClinton',
        content: 'Lorem ipsum dolor sit amet felis. Maecenas pharetra velit pede urna eu libero quis justo. ' +
            'Donec in ipsum. Curabitur feugiat pede. Duis a sapien. In laoreet luctus, ante ipsum in faucibus justo.' +
            ' Nulla ante. Nullam libero facilisis nec,',
    },
    {
        title: 'Donald',
        created: '1 day ago',
        twitterName: 'realDonaldTrump',
        content: 'Lorem ipsum dolor sit amet felis. Maecenas pharetra velit pede urna eu libero quis justo. ' +
            'Donec in ipsum. Curabitur feugiat pede. Duis a sapien. In laoreet luctus, ante ipsum in faucibus justo.' +
            ' Nulla ante. Nullam libero facilisis nec,',
    },
    {
        title: 'Tom Cotton',
        created: '2 day ago',
        twitterName: 'SenTomCotton',
        content: 'Lorem ipsum dolor sit amet felis. Maecenas pharetra velit pede urna eu libero quis justo. ' +
            'Donec in ipsum. Curabitur feugiat pede. Duis a sapien. In laoreet luctus, ante ipsum in faucibus justo.' +
            ' Nulla ante. Nullam libero facilisis nec,',
    },
    {
        title: 'Richard D.',
        created: '1 day ago',
        twitterName: 'RichardDawkins',
        content: 'Lorem ipsum dolor sit amet felis. Maecenas pharetra velit pede urna eu libero quis justo. ' +
            'Donec in ipsum. Curabitur feugiat pede. Duis a sapien. In laoreet luctus, ante ipsum in faucibus justo.' +
            ' Nulla ante. Nullam libero facilisis nec,',
    },
    {
        title: 'CodeWise',
        created: '1 day ago',
        twitterName: 'Rob_Gryn',
        content: ' Maecenas pharetra velit pede urna eu libero quis justo. ' +
            'Donec in ipsum. Curabitur feugiat pede. Duis a sapien. In laoreet luctus, ante ipsum in faucibus justo.' +
            ' Nulla ante. Nullam libero facilisis nec,',
    },
    {
        title: 'My Office',
        created: '5 day ago',
        twitterName: 'Rob_Gryn',
        content: 'Lorem ipsum dolor sit amet felis. Maecenas pharetra velit pede urna eu libero quis justo. ' +
            'Donec in ipsum. Curabitur feugiat pede. Duis a sapien. In laoreet luctus, ante ipsum in faucibus justo.',
    },
];
const Twitters = () => (
    <UserPageTemplate pageType="twitter">
        {twitters.map( t => (
            <Card
                title={t.title}
                twitterName={t.twitterName}
                content={t.content}
                created={t.created}
                cardType="twitter"
                key={t.title}
            />
        ))}
    </UserPageTemplate>
);

export default Twitters;