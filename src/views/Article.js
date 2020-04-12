import React from 'react';
import GridTemplate from "../templates/GridTemplate";
import Card from "../components/Molecules/Card/Card";
import { connect } from 'react-redux';


const Article = ({articles}) => (
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

const mapStateToProps = ({articles}) => {return ({articles})};

export default connect(mapStateToProps)(Article);