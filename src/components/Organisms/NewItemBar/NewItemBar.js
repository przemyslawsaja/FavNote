import React from 'react';
import PropTypes from 'prop-types'
import { connect } from "react-redux"
import styled from "styled-components";
import Input from "../../Atoms/Input/Input";
import Button from "../../Atoms/Button/Button";
import Heading from "../../Atoms/Heading/Heading";
import withContext from "../../../hoc/withContext";
import {addItemAction} from '../../../actions/index'
import { device } from "../../../devices/breakpoints";
import { Formik, Form, Field, ErrorMessage } from 'formik';


const Wrapper = styled.div`
   border-left: 5px solid ${({theme, activeColor}) => theme[activeColor]};
   position: fixed;
   z-index: 999;
   right: 0;
   top: 0;
   height: 100vh;
   width: 100%;
   background-color: white;
   transform: translate(${({isVisible}) => isVisible ? '0' : '100%'});
   transition: transform 0.4s ease-in-out;
   @media ${device.mobileM} { 
     
  }
  @media ${device.mobileL} { 
      width: 450px;
  }
  @media ${device.tablet} { 
      width: 680px;
  }
`;
const ContentWrapper = styled.div`
   display: flex;
   flex-direction: column;
   margin: 20px 50px 0 50px;
`;
const CustomForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;
const TextArea = styled(Input)`
  border-radius: 10px;
  margin: 20px 0 100px;
  height: 30vh;
`;
const CustomInput = styled(Input)`
  margin: 20px 0;
`;
const NewItemBar = ({pageContext, handleClose, isVisible, addItem}) => {
    return (
        <Wrapper isVisible={isVisible} activeColor = {pageContext}>
            <ContentWrapper>
                <Heading>Create new note</Heading>
                <Formik initialValues={{title: '', content: '',articleUrl:'', twitterName:'',created: ''}}
                        onSubmit={(values, { setSubmitting }) => {
                           addItem(pageContext, values);
                           handleClose()

                 }}
                >
                    {({ isSubmitting, values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                        <CustomForm>
                            <Input
                                type="text"
                                name="title"
                                placeholder = 'title'
                                onChange = {handleChange}
                                onBlur = {handleBlur}
                                value={values.title}
                            />
                            {pageContext === 'twitters' && <CustomInput
                                placeholder="twitter name. eg. Rob_Gryn"
                                type="text"
                                name="twitterName"
                                onChange = {handleChange}
                                onBlur = {handleBlur}
                                value={values.twitterName}
                            />}
                            {pageContext === 'articles' && <CustomInput
                                placeholder="link"
                                type="text"
                                name="articles"
                                onChange = {handleChange}
                                onBlur = {handleBlur}
                                value={values.article}
                            />}
                            <TextArea
                                name = "content"
                                as = "textarea"
                                onChange = {handleChange}
                                onBlur = {handleBlur}
                                value={values.content}
                            />
                            <Button

                                type="submit"
                                activeColor={pageContext}>
                                Add Note
                            </Button>
                        </CustomForm>
                    )}
                </Formik>
            </ContentWrapper>
        </Wrapper>
    );
};
const mapDispatchToProps = dispatch => ({
    addItem: (itemType, itemContent) => dispatch(addItemAction(itemType, itemContent)),
});

export default connect(null, mapDispatchToProps)(withContext(NewItemBar));

/*
<Input placeholder= {pageContext === 'twitters' ? 'Account Name eg. Rob Margus' : 'title'}/>
                  {pageContext === 'articles' && <CustomInput placeholder="link"/>}
                <TextArea as="textarea" placeholder="description"/>
                <Button onClick={() => addItem(pageContext,{
                    title: "test",
                    content: "lorem ipsum",
                })} activeColor={pageContext}>Add Note</Button>
                */
