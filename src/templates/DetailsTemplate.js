import React from 'react';
import PropTypes from 'prop-types';
import UserPageTemplate from "./UserPageTemplate";
import { Link } from "react-router-dom";
import Button from "../components/Atoms/Button/Button";
import styled from "styled-components";
import Heading from "../components/Atoms/Heading/Heading";
import LinkIcon from "../assets/icons/link.svg";

const Wrapper = styled.div`
  width: 500px;
  margin: 30px 0 0 50px;
`;
const ContentWrapper= styled.div`
  margin: 30px 0 35px 0;
`;
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const CustomHeading = styled(Heading)`
  text-transform: capitalize;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border: 5px solid ${({ theme }) => theme.twitters};
  border-radius: 50px;


`;
const LinkButton = styled.a`
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background: lightgrey url(${LinkIcon}) no-repeat;
  background-size: 60%;
  background-position: 50%;
`;
const DetailsTemplate = ({ children, pageType }) => (
    <UserPageTemplate pageType={pageType}>
       <Wrapper>
           <HeaderWrapper>
               <div>
                   <CustomHeading>{pageType}</CustomHeading>
                   <h4>Created - 10/04/2020</h4>
               </div>
               { pageType === 'twitters' &&  <Avatar src={`https://avatars.io/twitter/Rob_Gryn`}/>}
               { pageType === 'articles' &&  <LinkButton href="https://twitter.com/rob_gryn"/>}
           </HeaderWrapper>

           <ContentWrapper>
               {children}
           </ContentWrapper>

           <Link to="/"> <Button activeColor={pageType}>GO BACK</Button> </Link>
       </Wrapper>
    </UserPageTemplate>
);

export default DetailsTemplate;
