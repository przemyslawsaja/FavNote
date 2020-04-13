import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import withContext from "../../../hoc/withContext";
import { NavLink } from 'react-router-dom';
import { device } from "../../../devices/breakpoints";
import penIcon from "../../../assets/icons/pen.svg"
import bulbIcon from "../../../assets/icons/bulb.svg"
import logoutIcon from "../../../assets/icons/logout.svg"
import ButtonIcon from "../../Atoms/ButtonIcon/ButtonIcon"
import twitterIcon from "../../../assets/icons/twitter.svg"

const Wrapper = styled.div`
  z-index: 999;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ activeColor, theme}) => activeColor ? theme[activeColor] : theme.notes};
  width: 100%;
  
  @media ${device.laptop} { 
      left: 0;
      top: 0;
      height: 100%;
      width: 153px;
      display: grid;
      justify-content: center;
      grid-template-rows: 1fr 5fr 1fr;
   }
`;
const LinkList = styled.ul`{
   display: flex;
   list-style: none;
  @media ${device.laptop} { 
      flex-direction: column;
      margin: 0;
      padding: 0; 
   }
}`;
const Logo = styled.div`
  margin: 0 15px;
  font-weight: ${({ theme }) => theme.bold};
  line-height: 0;
  text-align: center;
  text-decoration: none;
  
  &.active {
    color: black;
  }
    @media ${device.laptop} { 
      margin: 15px 0; 
   }
`;
const Sidebar = ({pageContext}) => (
    <div>
        <Wrapper activeColor={pageContext}>
            <Logo as={NavLink} to="/">
                <h2>FAV</h2>
                <h4>NOTE.</h4>
            </Logo>

            <LinkList>
                <li> <ButtonIcon exact as={NavLink} to="/notes" icon={penIcon} activeclass="active"/> </li>
                <li> <ButtonIcon as={NavLink} to="/twitters" icon={twitterIcon} activeclass="active"/> </li>
                <li> <ButtonIcon as={NavLink} to="/articles" icon={bulbIcon} activeclass="active" />  </li>
            </LinkList>
            <ButtonIcon as={NavLink} to="/login" icon={logoutIcon} />
        </Wrapper>
    </div>
);
Sidebar.propTypes = {
    pageContext: PropTypes.oneOf(['notes','twitters','articles'])
};
Sidebar.defaultProps = {
    pageContext: 'notes'
};
export default withContext(Sidebar);