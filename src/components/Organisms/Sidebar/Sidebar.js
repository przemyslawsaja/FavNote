import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import ButtonIcon from "../../Atoms/ButtonIcon/ButtonIcon";
import bulbIcon from "../../../assets/icons/bulb.svg"
import logoutIcon from "../../../assets/icons/logout.svg"
import penIcon from "../../../assets/icons/pen.svg"
import twitterIcon from "../../../assets/icons/twitter.svg"


const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 153px;
  background-color: ${({ activeColor, theme}) => activeColor ? theme[activeColor] : theme.notes};
  display: grid;
  justify-content: center;
  grid-template-rows: 1fr 6fr 1fr;
`;
const LinkList = styled.ul`{
  margin: 0;
  padding: 0;
  list-style: none;
}`;
const Logo = styled.div`
  margin: 15px 0;
  font-weight: ${({ theme }) => theme.bold};
  line-height: 0;
  text-align: center;
  text-decoration: none;
  
  &.active {
    color: black;
  }
`;
const Sidebar = ({pageType}) => (
    <div>
        <Wrapper activeColor={pageType}>
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
    children: PropTypes.oneOf(['notes','twitters','articles'])
};
export default Sidebar;