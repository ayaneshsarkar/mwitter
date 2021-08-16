import React from 'react';
import { Helmet } from 'react-helmet';

const Head = props => {
  return (
    <Helmet>
      <title>{ props.title || 'Mwitter' }</title>
      <meta name="description" content={props.description || ''} />
    </Helmet>
  );
}

export default Head;