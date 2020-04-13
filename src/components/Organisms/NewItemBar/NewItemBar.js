import React from 'react';
import PropTypes from 'prop-types'
import styled from "styled-components";
import Input from "../../Atoms/Input/Input";
import Button from "../../Atoms/Button/Button";
import withContext from "../../../hoc/withContext";
import Heading from "../../Atoms/Heading/Heading";

const Wrapper = styled.div`
   border-left: 5px solid ${({theme, activeColor}) => theme[activeColor]};
   position: fixed;
   z-index: 999;
   right: 0;
   top: 0;
   height: 100vh;
   width: 680px;
   background-color: white;
  transform: translate(${({isVisible}) => isVisible ? '0' : '100%'});
  transition: transform 0.8s ease-in-out;
`;
const ContentWrapper = styled.div`
   display: flex;
   flex-direction: column;
   margin: 20px 50px 0 50px;

`;
const TextArea = styled(Input)`
  border-radius: 10px;
  margin: 20px 0 100px;
  height: 30vh;
`;
const CustomInput = styled(Input)`
  margin: 20px 0;
`;
const NewItemBar = ({pageContext, isVisible}) => {
    return (
        <Wrapper isVisible={isVisible} activeColor = {pageContext}>
            <ContentWrapper>
                <Heading>Create new note</Heading>
                <Input placeholder= {pageContext === 'twitters' ? 'Account Name eg. Rob Margus' : 'title'}/>
                    {pageContext === 'articles' && <CustomInput placeholder="link"/>}
                <TextArea as="textarea" placeholder="description"/>
                <Button activeColor={pageContext}>Add Note</Button>
            </ContentWrapper>
        </Wrapper>
    );
};

export default withContext(NewItemBar);