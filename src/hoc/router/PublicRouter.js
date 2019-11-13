import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRouter = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        const nextProps = {
          ...rest,
          ...props,
        };

        return <Component {...nextProps} />;
      }}
    />
  );
};

export default PublicRouter;
