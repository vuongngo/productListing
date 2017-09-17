/* eslint import/no-dynamic-require: 0 prefer-template: 0 */
import { injectGlobal } from 'styled-components';
import { grey300 } from './colors';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    margin: 0px;
    padding: 0px;
    height: 100%;
    width: 100%;
    color: ${grey300};
    font-size: 14px;
    font-family: 'Work Sans', sans-serif;
  }

  #root {
    height: 100%;
  }

  .slick-dots li button:before {
    width: 15px !important;
    height: 15px !important;
    border-radius: 50%;
    background-color: #c8cdd7 !important;
    color: #c8cdd7 !important;
  }

  .slick-dots li.slick-active button:before {
    width: 15px !important;
    height: 15px !important;
    border-radius: 50%;
    background-color: #869791 !important;
    color: #869791 !important;
  }

`;
