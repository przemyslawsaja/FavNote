import React from 'react';
import GridTemplate from "../templates/GridTemplate";
import Card from "../components/Molecules/Card/Card";

const notes = [
    {
        id: '1',
        title: 'Note',
        created: '3 day ago',
        content: 'Lorem ipsum dolor sit amet felis. Maecenas pharetra velit pede urna eu libero quis justo. ' +
            'Donec in ipsum. Curabitur feugiat pede. Duis a sapien. In laoreet luctus, ante ipsum in faucibus justo.' +
            ' Nulla ante. Nullam libero facilisis nec,',
    },
    {
        id: '2',
        title: 'Note',
        created: '1 day ago',
        content: 'Lorem ipsum dolor sit amet felis. Maecenas pharetra velit pede urna eu libero quis justo. ' +
            'Donec in ipsum. Curabitur feugiat pede. Duis a sapien. In laoreet luctus, ante ipsum in faucibus justo.' +
            ' Nulla ante. Nullam libero facilisis nec,',
    },
    {
        id: '3',
        title: 'Note',
        created: '2 day ago',
        content: 'Lorem ipsum dolor sit amet felis. Maecenas pharetra velit pede urna eu libero quis justo. ' +
            'Donec in ipsum. Curabitur feugiat pede. Duis a sapien. In laoreet luctus, ante ipsum in faucibus justo.' +
            ' Nulla ante. Nullam libero facilisis nec,',
    },
    {
        id: '4',
        title: 'Note',
        created: '1 day ago',
        content: 'Lorem ipsum dolor sit amet felis. Maecenas pharetra velit pede urna eu libero quis justo. ' +
            'Donec in ipsum. Curabitur feugiat pede. Duis a sapien. In laoreet luctus, ante ipsum in faucibus justo.' +
            ' Nulla ante. Nullam libero facilisis nec,',
    },
    {
        id: '5',
        title: 'Note',
        created: '1 day ago',
        content: 'Lorem ipsum dolor sit amet felis. Maecenas pharetra velit pede urna eu libero quis justo. ' +
            'Donec in ipsum. Curabitur feugiat pede. Duis a sapien. In laoreet luctus, ante ipsum in faucibus justo.' +
            ' Nulla ante. Nullam libero facilisis nec,',
    },
    {
        id: '6',
        title: 'Note',
        created: '5 day ago',
        content: 'Lorem ipsum dolor sit amet felis. Maecenas pharetra velit pede urna eu libero quis justo. ' +
            'Donec in ipsum. Curabitur feugiat pede. Duis a sapien. In laoreet luctus, ante ipsum in faucibus justo.' +
            ' Nulla ante. Nullam libero facilisis nec,',
    },
];
const Notes = () => (
    <GridTemplate pageType="notes">
        {notes.map( n => (
            <Card
                id={n.id}
                title={n.title}
                content={n.content}
                created={n.created}
                cardType="notes"
                key={n.title}
            />
        ))}
    </GridTemplate>
);

export default Notes;