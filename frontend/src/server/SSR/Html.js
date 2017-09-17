/* eslint-disable react/no-danger */
import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import appConfig from 'app/config';
import 'app/styles/global';

const Html = ({ styles, assets, state, content }) => {
  const helmet = Helmet.renderStatic();
  const htmlAttrs = helmet.htmlAttributes.toComponent();
  const bodyAttrs = helmet.bodyAttributes.toComponent();
  const normalize = 'https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css';

  const { isProd } = appConfig;

  return (
    <html lang="en" {...htmlAttrs}>
      <head>
        {helmet.title.toComponent()}
        {helmet.meta.toComponent()}
        {helmet.link.toComponent()}
        <link rel="stylesheet" href={normalize} />
        <link href="https://fonts.googleapis.com/css?family=Work+Sans:100,200,300,400,500,600,700,800" rel="stylesheet" />
        {styles}
        <link rel="stylesheet" href={assets.styles.main} />
      </head>
      <body {...bodyAttrs}>
        <main id="app" dangerouslySetInnerHTML={{ __html: content }} />
        <script dangerouslySetInnerHTML={{ __html: state }} />
        {isProd && <script src={assets.javascript.vendor} />}
        <script src={assets.javascript.main} />
      </body>
    </html>
  );
};

Html.propTypes = {
  styles: PropTypes.node.isRequired,
  assets: PropTypes.object,
  state: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Html;
