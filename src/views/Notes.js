import React from 'react';
import { connect } from 'react-redux'
import GridTemplate from "../templates/GridTemplate";
import Card from "../components/Molecules/Card/Card";

const Notes = ({notes}) => (
    <GridTemplate>
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
const mapStateToProps = ({notes}) => {return ({notes})};

export default connect(mapStateToProps)(Notes);