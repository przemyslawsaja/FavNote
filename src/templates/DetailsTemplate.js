import React from 'react';
import UserPageTemplate from "./UserPageTemplate";
import withContext from "../hoc/withContext";
import {Link} from "react-router-dom";
import Button from "../components/Atoms/Button/Button";
import styled from "styled-components";
import Heading from "../components/Atoms/Heading/Heading";
import LinkIcon from "../assets/icons/link.svg";
import Paragraph from "../components/Atoms/Paragraph/Paragraph";

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
const DetailsTemplate = ({ pageContext, title, content, created, articleUrl, twitterName }) => (
    <UserPageTemplate>
       <Wrapper>
           <HeaderWrapper>
               <div>
                   <CustomHeading>{title}</CustomHeading>
                   <h4>{created} ago</h4>
               </div>
               { pageContext === 'twitters' &&  <Avatar src={`https://avatars.io/twitter/${twitterName}`}/>}
               { pageContext === 'articles' &&  <LinkButton href={articleUrl}/>}
           </HeaderWrapper>
           <ContentWrapper>
               <Paragraph>
                   {content}
               </Paragraph>
           </ContentWrapper>
           <Link to={`/${pageContext}`}> <Button activeColor={pageContext}>GO BACK</Button></Link>
       </Wrapper>
    </UserPageTemplate>
);

export default withContext(DetailsTemplate);
