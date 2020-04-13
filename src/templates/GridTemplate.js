import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from "../components/Organisms/Sidebar/Sidebar";
import styled from "styled-components";
import UserPageTemplate from "./UserPageTemplate";
import Input from "../components/Atoms/Input/Input";
import Heading from "../components/Atoms/Heading/Heading";
import Paragraph from "../components/Atoms/Paragraph/Paragraph";
import withContext from "../hoc/withContext";
import ButtonIcon from "../components/Atoms/ButtonIcon/ButtonIcon";
import plusIcon from "../assets/icons/plus.svg";
import NewItemBar from "../components/Organisms/NewItemBar/NewItemBar";

const Wrapper = styled.div`
  position: relative;
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
const AddItemButton = styled(ButtonIcon)`
  z-index: 1000;
  position:fixed;
  bottom: 40px;
  right: 40px;
  background-color: ${({activeColor, theme}) => theme[activeColor] };
  border-radius: 50px;
  background-size: 35%;
`;

class GridTemplate extends React.Component {
    state = {
      isNewItemBarVisible: false
    };

    handleItemBarToggle = () => {
      this.setState(prevState => ({isNewItemBarVisible: !prevState.isNewItemBarVisible}))
    };
    render() {
        const { pageContext, children } = this.props;
        const { isNewItemBarVisible} = this.state;
        return(
            <UserPageTemplate>
                <Wrapper>
                    <PageHeader>
                        <Input search placeholder={"Search"}/>
                        <CustomHeading big as="h1">{pageContext}</CustomHeading>
                        <CustomParagraph>6 {pageContext}</CustomParagraph>
                    </PageHeader>
                    <Grid>{children}</Grid>
                    <AddItemButton onClick={this.handleItemBarToggle} activeColor={pageContext} icon={plusIcon}/>
                    <NewItemBar isVisible={isNewItemBarVisible}/>
                </Wrapper>
            </UserPageTemplate>
        )
    }
}
UserPageTemplate.propTypes = {
    children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withContext(GridTemplate);
