import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from "../components/Organisms/Sidebar/Sidebar";
import styled from "styled-components";
import UserPageTemplate from "./UserPageTemplate";
import Input from "../components/Atoms/Input/Input";
import Heading from "../components/Atoms/Heading/Heading";
import Paragraph from "../components/Atoms/Paragraph/Paragraph";

const Wrapper = styled.div`
  padding: 25px 150px 25px 70px;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 85px;
`;

const PageHeader = styled.div`
  margin: 25px 0 50px 0;
`;
const CustomHeading = styled(Heading)`
  margin: 25px 0 0 0;
  
  ::first-letter {
   text-transform: uppercase;
  }
`;
const CustomParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({theme}) => theme.bold};
`;
const GridTemplate = ({ children, pageType }) => (
    <UserPageTemplate pageType={pageType}>
        <Wrapper>
            <PageHeader>
                <Input search placeholder={"Search"}/>
                <CustomHeading big as="h1">{pageType}</CustomHeading>
                <CustomParagraph>6 {pageType}</CustomParagraph>
            </PageHeader>
            <Grid>
                {children}
            </Grid>
        </Wrapper>
    </UserPageTemplate>
);
UserPageTemplate.propTypes = {
    children: PropTypes.arrayOf(PropTypes.object).isRequired,
    pageType: PropTypes.oneOf(['notes','twitters','articles'])
};
UserPageTemplate.defaultProps = {
    pageType: 'notes'
};
export default GridTemplate;
