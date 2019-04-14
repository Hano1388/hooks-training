import React from 'react';

import '../../containers/App.css';

const WithClass = props => (
  <div className="app">
    {props.children}
  </div>
);

export default WithClass;
