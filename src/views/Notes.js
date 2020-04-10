import React from 'react';
import UserPageTemplate from "../templates/UserPageTemplate";
import Heading from "../components/Atoms/Heading/Heading";
import Card from "../components/Molecules/Card/Card";
const notes = [
    {
        title: 'Note',
        created: '3 day ago',
        content: 'Lorem ipsum dolor sit amet felis. Maecenas pharetra velit pede urna eu libero quis justo. ' +
            'Donec in ipsum. Curabitur feugiat pede. Duis a sapien. In laoreet luctus, ante ipsum in faucibus justo.' +
            ' Nulla ante. Nullam libero facilisis nec,',
    },
    {
        title: 'Note',
        created: '1 day ago',
        content: 'Lorem ipsum dolor sit amet felis. Maecenas pharetra velit pede urna eu libero quis justo. ' +
            'Donec in ipsum. Curabitur feugiat pede. Duis a sapien. In laoreet luctus, ante ipsum in faucibus justo.' +
            ' Nulla ante. Nullam libero facilisis nec,',
    },
    {
        title: 'Note',
        created: '2 day ago',
        content: 'Lorem ipsum dolor sit amet felis. Maecenas pharetra velit pede urna eu libero quis justo. ' +
            'Donec in ipsum. Curabitur feugiat pede. Duis a sapien. In laoreet luctus, ante ipsum in faucibus justo.' +
            ' Nulla ante. Nullam libero facilisis nec,',
    },
    {
        title: 'Note',
        created: '1 day ago',
        content: 'Lorem ipsum dolor sit amet felis. Maecenas pharetra velit pede urna eu libero quis justo. ' +
            'Donec in ipsum. Curabitur feugiat pede. Duis a sapien. In laoreet luctus, ante ipsum in faucibus justo.' +
            ' Nulla ante. Nullam libero facilisis nec,',
    },
    {
        title: 'Note',
        created: '1 day ago',
        content: 'Lorem ipsum dolor sit amet felis. Maecenas pharetra velit pede urna eu libero quis justo. ' +
            'Donec in ipsum. Curabitur feugiat pede. Duis a sapien. In laoreet luctus, ante ipsum in faucibus justo.' +
            ' Nulla ante. Nullam libero facilisis nec,',
    },
    {
        title: 'Note',
        created: '5 day ago',
        content: 'Lorem ipsum dolor sit amet felis. Maecenas pharetra velit pede urna eu libero quis justo. ' +
            'Donec in ipsum. Curabitur feugiat pede. Duis a sapien. In laoreet luctus, ante ipsum in faucibus justo.' +
            ' Nulla ante. Nullam libero facilisis nec,',
    },
];
const Notes = () => (
    <UserPageTemplate>
        {notes.map( n => (
            <Card
                title={n.title}
                content={n.content}
                created={n.created}
                cardType="note"
                key={n.title}
            />
        ))}
    </UserPageTemplate>
);

export default Notes;