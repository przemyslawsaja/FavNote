import React from 'react';
import UserPageTemplate from "../templates/UserPageTemplate";
import Heading from "../components/Atoms/Heading/Heading";
import Card from "../components/Molecules/Card/Card";

const articles = [
    {
        title: 'Article',
        created: '1 day ago',
        content: 'Lorem ipsum dolor sit amet felis. Maecenas pharetra velit pede urna eu libero quis justo. ' +
            'Donec in ipsum. Curabitur feugiat pede. Duis a sapien. In laoreet luctus, ante ipsum in faucibus justo.' +
            ' Nulla ante. Nullam libero facilisis nec,',
        articleUrl: "https://www.google.pl/"
    },
    {
        title: 'Article',
        created: '1 day ago',
        content: 'Lorem ipsum dolor sit amet felis. Maecenas pharetra velit pede urna eu libero quis justo. ' +
            'Donec in ipsum. Curabitur feugiat pede. Duis a sapien. In laoreet luctus, ante ipsum in faucibus justo.' +
            ' Nulla ante. Nullam libero facilisis nec,',
        articleUrl: "https://www.google.pl/"
    },
    {
        title: 'Article',
        created: '1 day ago',
        content: 'Lorem ipsum dolor sit amet felis. Maecenas pharetra velit pede urna eu libero quis justo. ' +
            'Donec in ipsum. Curabitur feugiat pede. Duis a sapien. In laoreet luctus, ante ipsum in faucibus justo.' +
            ' Nulla ante. Nullam libero facilisis nec,',
        articleUrl: "https://www.google.pl/"
    },
    {
        title: 'Article',
        created: '1 day ago',
        content: 'Lorem ipsum dolor sit amet felis. Maecenas pharetra velit pede urna eu libero quis justo. ' +
            'Donec in ipsum. Curabitur feugiat pede. Duis a sapien. In laoreet luctus, ante ipsum in faucibus justo.' +
            ' Nulla ante. Nullam libero facilisis nec,',
        articleUrl: "https://www.google.pl/"
    },
    {
        title: 'Article',
        created: '1 day ago',
        content: 'Lorem ipsum dolor sit amet felis. Maecenas pharetra velit pede urna eu libero quis justo. ' +
            'Donec in ipsum. Curabitur feugiat pede. Duis a sapien. In laoreet luctus, ante ipsum in faucibus justo.' +
            ' Nulla ante. Nullam libero facilisis nec,',
        articleUrl: "https://www.google.pl/"
    },
    {
        title: 'Article',
        created: '5 day ago',
        content: 'Lorem ipsum dolor sit amet felis. Maecenas pharetra velit pede urna eu libero quis justo. ' +
            'Donec in ipsum. Curabitur feugiat pede. Duis a sapien. In laoreet luctus, ante ipsum in faucibus justo.' +
            ' Nulla ante. Nullam libero facilisis nec,',
        articleUrl: "https://www.google.pl/"
    },
];

const Article = () => (
    <UserPageTemplate pageType="article" >
        {articles.map( a => (
            <Card
                title={a.title}
                content={a.content}
                created={a.created}
                articleUrl={a.articleUrl}
                cardType="article"
                key={a.title}
            />
        ))}
    </UserPageTemplate>
 );

export default Article;