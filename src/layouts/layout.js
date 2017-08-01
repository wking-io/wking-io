import React from 'react';
import styled, { injectGlobal } from 'styled-components';

import { breakpoints } from '../utils/constants';
import 'typeface-roboto';

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
    font-size: 17px;
    line-height: 1.5;
  }

  @media screen and (max-width: ${breakpoints.m}) {
    body {
      font-size: 16px;
    }
  }

  @media screen and (max-width: ${breakpoints.s}) {
    body {
      font-size: 15px;
    }
  }
`;

export const Wrapper = styled.div`
  max-width: 80vw;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${breakpoints.m}) {
    max-width: 90vw;
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'space-between'};
  align-items: ${props => props.alignment || 'flex-start'};
  flex-wrap: ${props => (props.wrap ? 'wrap' : 'no-wrap')};

  @media screen and (max-width: ${breakpoints.l}) {
    ${props => (props.directionL ? `flex-direction:${props.directionL}` : '')};
    ${props => (props.justifyL ? `justify-content:${props.justifyL}` : '')};
    ${props => (props.alignmentL ? `align-items:${props.alignmentL}` : '')};
    ${props => (props.wrapL ? 'flex-wrap: wrap' : '')};
  }

  @media screen and (max-width: ${breakpoints.m}) {
    ${props => (props.directionM ? `flex-direction:${props.directionM}` : '')};
    ${props => (props.justifyM ? `justify-content:${props.justifyM}` : '')};
    ${props => (props.alignmentM ? `align-items:${props.alignmentM}` : '')};
    ${props => (props.wrapM ? 'flex-wrap: wrap' : '')};
  }

  @media screen and (max-width: ${breakpoints.s}) {
    ${props => (props.directionS ? `flex-direction:${props.directionS}` : '')};
    ${props => (props.justifyS ? `justify-content:${props.justifyS}` : '')};
    ${props => (props.alignmentS ? `align-items:${props.alignmentS}` : '')};
    ${props => (props.wrapS ? 'flex-wrap: wrap' : '')};
  }

  @media screen and (max-width: ${breakpoints.xs}) {
    ${props =>
      props.directionXS ? `flex-direction:${props.directionXS}` : ''};
    ${props => (props.justifyXS ? `justify-content:${props.justifyXS}` : '')};
    ${props => (props.alignmentXS ? `align-items:${props.alignmentXS}` : '')};
    ${props => (props.wrapXS ? 'flex-wrap: wrap' : '')};
  }
`;

export const FlexRow = styled.div`
  width: ${props => props.width || '100%'};
  margin: ${props => props.margin || 0};

  @media screen and (max-width: ${breakpoints.l}) {
    ${props => (props.widthL ? `width:${props.widthL}` : '')};
    ${props => (props.marginL ? `margin:${props.marginL}` : '')};
  }

  @media screen and (max-width: ${breakpoints.m}) {
    ${props => (props.widthM ? `width:${props.widthM}` : '')};
    ${props => (props.marginM ? `margin:${props.marginM}` : '')};
  }

  @media screen and (max-width: ${breakpoints.s}) {
    ${props => (props.widthS ? `width:${props.widthS}` : '')};
    ${props => (props.marginS ? `margin:${props.marginS}` : '')};
  }

  @media screen and (max-width: ${breakpoints.xs}) {
    ${props => (props.widthXS ? `width:${props.widthXS}` : '')};
    ${props => (props.marginXS ? `margin:${props.marginXS}` : '')};
  }
`;
