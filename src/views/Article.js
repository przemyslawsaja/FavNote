import React from 'react';
import GridTemplate from "../templates/GridTemplate";
import Card from "../components/Molecules/Card/Card";

const articles = [
    {
        id: '1',
        title: 'Article',
        created: '1 day ago',
        content: 'Lorem ipsum dolor sit amet felis. Maecenas pharetra velit pede urna eu libero quis justo. ' +
            'Donec in ipsum. Curabitur feugiat pede. Duis a sapien. In laoreet luctus, ante ipsum in faucibus justo.' +
            ' Nulla ante. Nullam libero facilisis nec,',
        articleUrl: "https://www.google.pl/"
    },
    {
        id: '2',
        title: 'Article',
        created: '1 day ago',
        content: 'Lorem ipsum dolor sit amet felis. Maecenas pharetra velit pede urna eu libero quis justo. ' +
            'Donec in ipsum. Curabitur feugiat pede. Duis a sapien. In laoreet luctus, ante ipsum in faucibus justo.' +
            ' Nulla ante. Nullam libero facilisis nec,',
        articleUrl: "https://www.google.pl/"
    },
    {
        id: '3',
        title: 'Article',
        created: '1 day ago',
        content: 'Lorem ipsum dolor sit amet felis. Maecenas pharetra velit pede urna eu libero quis justo. ' +
            'Donec in ipsum. Curabitur feugiat pede. Duis a sapien. In laoreet luctus, ante ipsum in faucibus justo.' +
            ' Nulla ante. Nullam libero facilisis nec,',
        articleUrl: "https://www.google.pl/"
    },
    {
        id: '4',
        title: 'Article',
        created: '1 day ago',
        content: 'Lorem ipsum dolor sit amet felis. Maecenas pharetra velit pede urna eu libero quis justo. ' +
            'Donec in ipsum. Curabitur feugiat pede. Duis a sapien. In laoreet luctus, ante ipsum in faucibus justo.' +
            ' Nulla ante. Nullam libero facilisis nec,',
        articleUrl: "https://www.google.pl/"
    },
    {
        id: '5',
        title: 'Article',
        created: '1 day ago',
        content: 'Lorem ipsum dolor sit amet felis. Maecenas pharetra velit pede urna eu libero quis justo. ' +
            'Donec in ipsum. Curabitur feugiat pede. Duis a sapien. In laoreet luctus, ante ipsum in faucibus justo.' +
            ' Nulla ante. Nullam libero facilisis nec,',
        articleUrl: "https://www.google.pl/"
    },
    {
        id: '6',
        title: 'Article',
        created: '5 day ago',
        content: 'Lorem ipsum dolor sit amet felis. Maecenas pharetra velit pede urna eu libero quis justo. ' +
            'Donec in ipsum. Curabitur feugiat pede. Duis a sapien. In laoreet luctus, ante ipsum in faucibus justo.' +
            ' Nulla ante. Nullam libero facilisis nec,',
        articleUrl: "https://www.google.pl/"
    },
];

const Article = () => (
    <GridTemplate pageType="articles" >
        {articles.map( a => (
            <Card
                id={a.id}
                title={a.title}
                content={a.content}
                created={a.created}
                articleUrl={a.articleUrl}
                cardType="articles"
                key={a.title}
            />
        ))}
    </GridTemplate>
 );

export default Article;