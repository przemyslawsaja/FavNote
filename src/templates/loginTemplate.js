import React from 'react';
import styled from "styled-components";
import {theme} from "../theme/mainTheme";
import {Formik} from "formik";
import axios from 'axios';
import Button from "../components/Atoms/Button/Button";
import Input from "../components/Atoms/Input/Input";
import Paragraph from "../components/Atoms/Paragraph/Paragraph";
import {device} from "../devices/breakpoints";
import {Link} from "react-router-dom";


const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: ${theme.notes};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Logo = styled.div`
  margin: 0;
  font-size: 2.2em;
  font-weight: ${({theme}) => theme.bold};
  line-height: 0;
  text-align: center;
  text-decoration: none;
      @media ${device.mobileL} { 
       font-size: 2.7em;
   }
`;

const CustomParagraph = styled(Paragraph)`
  margin: -10px 0 0 0;
  font-weight: ${({theme}) => theme.bold};
  font-size: 0.8em;
  text-align: center;
    @media ${device.mobileL} { 
       font-size: 1.2em;
   }
`;
const CustomForm = styled.div`
  display: flex;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.5);
  flex-direction: column;
  background-color: white;
  border-radius: 15px;
  align-items: center;
  margin: 10px 0;
  @media ${device.mobileL} { 
       margin: 20px 0;
       padding: 50px;
   }
   @media ${device.tablet} { 
       padding: 80px;
   }
`;

const CustomInput = styled(Input)`
  margin: 10px 5px;
`;
const CustomButton = styled(Button)`
  margin: 20px 0;
`;
const TryAppModule = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  text-align: center;
  margin: 20px;
  padding: 20px;

`;

const LoginTemplate = ({type}) => {
    return (
        <Wrapper>
            <Logo>
                <h2>FAV</h2>
                <h4>NOTE.</h4>
            </Logo>
            <CustomParagraph>Your new favorite online notes experience</CustomParagraph>
            <Formik
                initialValues={{username: '', password: ''}}
                onSubmit={({username, password}) => {
                    axios.post(
                        `http://localhost:5000/api/user/${type}`,
                        {
                            username,
                            password
                        }).then(() => {
                        type === 'register' ? (console.log('Account has been created.')) : console.log("Logged in.")
                    })
                        .catch((err) => console.log(err));
                }}
            >
                {() => (

                    <CustomForm>
                        {type === 'register' &&
                        <>
                            <h1 as="label">Create your account</h1>
                            <CustomInput type="text" name="username" placeholder="username"/>
                            <CustomInput type="password" name="password" placeholder="password"/>
                            <CustomInput type="password" name="password" placeholder="Repeat password"/>
                            <CustomInput type="email" name="email" placeholder="email"/>
                            <CustomButton type="submit" activeColor="notes">Register</CustomButton>
                            <Link to='/login'>I have an account.Go to log in.</Link>
                        </>
                        }
                        {type === 'login' &&
                        <>
                            <h1 as="label">Log in to favnote</h1>
                            <CustomInput type="text" name="username" placeholder="username"/>
                            <CustomInput type="password" name="password" placeholder="password"/>
                            <CustomButton type="submit" activeColor="notes">Sign in</CustomButton>
                            <Link to='/register'>New member? Create account.</Link>
                        </>
                        }
                    </CustomForm>
                )}
            </Formik>

            <TryAppModule>
                <Paragraph>
                    Try favnote without account.
                    <br/>
                    (Warning! your notes won't be saved )
                </Paragraph>
                <Link to='/notes'>
                    <Button>Try now!</Button>
                </Link>
            </TryAppModule>
        </Wrapper>
    )
}


export default LoginTemplate;
