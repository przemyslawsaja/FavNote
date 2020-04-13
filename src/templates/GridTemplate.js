import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import withContext from "../hoc/withContext";
import UserPageTemplate from "./UserPageTemplate";
import { device } from "../devices/breakpoints";
import plusIcon from "../assets/icons/plus.svg";
import Input from "../components/Atoms/Input/Input";
import Heading from "../components/Atoms/Heading/Heading";
import Paragraph from "../components/Atoms/Paragraph/Paragraph";
import ButtonIcon from "../components/Atoms/ButtonIcon/ButtonIcon";
import NewItemBar from "../components/Organisms/NewItemBar/NewItemBar";

const Wrapper = styled.div`
  position: relative;
  padding: 20px 5px;
  @media ${device.mobileM} { 
      padding: 30px 35px;
  }
   @media ${device.mobileL} { 
      padding: 30px 80px;
  }
  @media ${device.tablet} { 
    padding: 25px 150px 25px 70px;
  }
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 85px;
  
    @media ${device.tablet} { 
    grid-template-columns: repeat(2, 1fr);
  }
    @media ${device.laptopL} { 
    grid-template-columns: repeat(3, 1fr);
  }
    @media ${device.desktop} { 
    grid-template-columns: repeat(4, 1fr);
  }
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
  bottom: 10px;
  right: 10px;
  background-color: ${({activeColor, theme}) => theme[activeColor] };
  border-radius: 50px;
  border: 2px solid #fff;
  background-size: 35%;
  
    @media ${device.tablet} { 
      bottom: 40px;
      right: 40px;
  }
`;

class GridTemplate extends React.Component {
    state = {
      isNewItemBarVisible: false
    };

    toggleNewItemBar = () => {
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
                    <AddItemButton onClick={this.toggleNewItemBar} activeColor={pageContext} icon={plusIcon}/>
                    <NewItemBar handleClose = {this.toggleNewItemBar} isVisible={isNewItemBarVisible}/>
                </Wrapper>
            </UserPageTemplate>
        )
    }
}
UserPageTemplate.propTypes = {
    children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withContext(GridTemplate);
