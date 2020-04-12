import React from 'react';
import { connect } from "react-redux"
import GridTemplate from "../templates/GridTemplate";
import Card from "../components/Molecules/Card/Card";
import PropTypes from 'prop-types'

const Twitters = ({twitters}) => (
    <GridTemplate pageType="twitters">
        {twitters.map( t => (
            <Card
                id={t.id}
                title={t.title}
                twitterName={t.twitterName}
                content={t.content}
                created={t.created}
                cardType="twitters"
                key={t.id}
            />
        ))}
    </GridTemplate>
);

Twitters.propTypes = {
    twitters: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        cardType: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        twitterName: PropTypes.string.isRequired,
        created: PropTypes.string.isRequired,
    }))
};
const mapStateToProps = ({twitters}) => {return { twitters }};

export default connect(mapStateToProps)(Twitters);

