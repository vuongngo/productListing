import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Helmet from 'react-helmet';

import Product from 'app/containers/ProductContainer';
import AppContainer from 'app/containers/AppContainer';

function App() {
  return (
    <AppContainer>
      <div>
        <Helmet titleTemplate="ARc - %s">
          <title>Simple Job Match</title>
          <meta name="description" content="Matching between skill sets and job description" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta property="og:site_name" content="ARc" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
        </Helmet>
        <Switch>
          <Route path="/" component={Product} exact />
        </Switch>
      </div>
    </AppContainer>
  );
}

export default App;
