import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider} from "styled-components";
import GlobalStyle from "../theme/GlobalStyle";
import { theme } from "../theme/mainTheme";
import Sidebar from "../components/Organisms/Sidebar/Sidebar";

const MainTemplate = ({ children }) => (
    <div>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
            <>
                <Sidebar/>
                {children}
            </>
        </ThemeProvider>
    </div>
);
MainTemplate.propTypes = {
    children: PropTypes.element.isRequired,
};
export default MainTemplate;
