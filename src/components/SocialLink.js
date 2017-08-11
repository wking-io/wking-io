import styled from 'styled-components';

import { breakpoints, colors } from '../utils/constants';

const SocialLink = styled.a`
  text-decoration: none;
  color: black;
  margin: 1.5rem 0;
  display: flex;
  align-items: center;
  flex-direction: row;

  .social__icon {
    width: 2.5rem;
    height: auto;
    fill: #000;
    margin: 0 2rem 0 0;
  }

  .social__color {
    fill: #000;
    opacity: 1;
  }

  .social__color--hover {
    opacity: 0;
  }

  .social__name {  
    opacity: 0;
    color: ${colors.secondary};
    transition: all .25s ease-in-out;
    transform: translateY(5px);
  }

  :hover .social__color {
    opacity: 0;
  }

  :hover .social__color--hover {
    opacity: 1;
  }

  :hover .social__name {
    opacity: 1;
    transform: translateY(0px);
  }

  @media screen and (max-width: ${breakpoints.m}) {
    margin: 0;
    
    .social__name {
      display: none;
    }
  }
`;

export default SocialLink;
