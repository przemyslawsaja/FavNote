import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from "../components/Organisms/Sidebar/Sidebar";

const UserPageTemplate = ({ children }) => (
    <>
        <Sidebar />
        {children}
    </>
);

UserPageTemplate.propTypes = {
    children: PropTypes.element.isRequired,
};

export default UserPageTemplate;
