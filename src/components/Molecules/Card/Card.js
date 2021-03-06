import React from "react";
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components';
import { Redirect } from 'react-router-dom';
import Paragraph from "../../Atoms/Paragraph/Paragraph";
import Heading from "../../Atoms/Heading/Heading";
import Button from "../../Atoms/Button/Button"
import LinkIcon from "../../../assets/icons/link.svg";
import { connect } from "react-redux";
import { removeItemAction } from "../../../actions";
import withContext from "../../../hoc/withContext";


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
  border: 5px solid ${({ theme }) => theme.twitters};
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

class Card extends React.Component {
    state = {
        redirect: false
    };
    handleCardClick = () => this.setState({redirect: true});
    render() {
        const {id, pageContext, title, created, content, articleUrl, twitterName, removeItem} = this.props;

        if(this.state.redirect){
            return <Redirect to={`${pageContext}/${id}`} />
        }
        return (
            <Wrapper onClick={this.handleCardClick}>
                <InnerWrapper activeColor={pageContext}>
                    <StyledHeading>{title}</StyledHeading>
                    <DateInfo>{created}</DateInfo>
                    { pageContext === 'twitters' &&  <Avatar src={`https://avatars.io/twitter/${twitterName}`}/>}
                    { pageContext === 'articles' &&  <LinkButton href={articleUrl}/>}
                </InnerWrapper>
                <InnerWrapper flex>
                    <Paragraph> {content}</Paragraph>
                    <Button secondary onClick={() => removeItem(pageContext, id)}>REMOVE</Button>
                </InnerWrapper>
            </Wrapper>
        )
    }
}

Card.propTypes = {
    pageContext: PropTypes.oneOf(['notes','twitters','articles']),
    title: PropTypes.string.isRequired,
    created: PropTypes.string.isRequired,
    twitterName: PropTypes.string,
    articleUrl: PropTypes.string,
    content: PropTypes.string.isRequired,
};
Card.defaultProps = {
    pageContext: 'notes',
    twitterName: null,
    articleUrl: null,
};
const mapDispatchToProps = dispatch => ({
    removeItem: (itemType, id) => dispatch(removeItemAction(itemType,id))
});

export default connect(null, mapDispatchToProps )(withContext(Card));