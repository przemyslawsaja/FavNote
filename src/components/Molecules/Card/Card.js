import React from "react";
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components';
import Paragraph from "../../Atoms/Paragraph/Paragraph";
import Heading from "../../Atoms/Heading/Heading";
import Button from "../../Atoms/Button/Button"
import LinkIcon from "../../../assets/icons/link.svg";

const Wrapper = styled.div`
  min-height: 380px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper = styled.div`
  position: relative;
  padding: 17px 30px ;
  background-color: ${({ activeColor, theme}) => activeColor ? theme[activeColor] : 'white'};
  
  :first-of-type {
  z-index: 10;
  }
  ${({flex}) => 
    flex && css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `
    }
`;

const DateInfo = styled(Paragraph)`
  margin: 0 0 10px;
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

const StyledHeading = styled(Heading)`
  margin: 5px 0 0 ;
`;

const Avatar = styled.img`
  width: 86px;
  height: 86px;
  border: 5px solid ${({ theme }) => theme.twitter};
  border-radius: 50px;
  position: absolute;
  right: 25px;
  top: 25px;
`;

const LinkButton = styled.a`
  display: block;
  width: 47px;
  height: 47px;
  border-radius: 50px;
  background: white url(${LinkIcon}) no-repeat;
  background-size: 60%;
  background-position: 50%;
  position: absolute;
  right: 25px;
  top: 50%;
  transform: translateY(-50%);
`;
const Card = ({cardType}) => (
    <Wrapper>
        <InnerWrapper activeColor={cardType}>
            <StyledHeading>Hello Roman</StyledHeading>
            <DateInfo>3 days</DateInfo>
            { cardType === 'twitter' &&  <Avatar src="https://avatars.io/twitter/hello_roman"/>}
            { cardType === 'article' &&  <LinkButton href="https://youtube.com/helloroman"/>}


        </InnerWrapper>
        <InnerWrapper flex>
            <Paragraph>
                This will register all the addons and you’ll be able to see the actions and knobs panels
                (in that order) when you are viewing the story. (Links do not register a tab—check individual
                addon docs to see which Storybook features they use!)
            </Paragraph>
            <Button secondary>REMOVE</Button>
        </InnerWrapper>


    </Wrapper>
);
Card.propTypes = {
    cardType: PropTypes.oneOf(['note','twitter','article']),
};
Card.defaultProps = {
    cardType: 'note',
};
export default Card;