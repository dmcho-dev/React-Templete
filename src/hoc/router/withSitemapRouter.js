import React, { Component, Fragment } from 'react';
import { withRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import PublicRouter from './PublicRouter';

// import sitemap from 'data/sitemap';

const withSitemapRouter = (sitemap = []) => WrappedComponent => {
  class SitemapRouter extends Component {
    makeRouter = (array, sitemapList, stockPath) => {
      if (!stockPath) {
        stockPath = '';
      }

      return sitemapList.forEach(page => {
        if (Array.isArray(page.children)) {
          this.makeRouter(array, page.children, `${stockPath}/${page.path}`);
        } else {
          console.log({ page: sitemap.id });
          let options = {};
          options.key = `${sitemap.id}-router-${stockPath}-${page.id}`;
          options.exact = !page.exact ? false : true;
          options.path = `${stockPath}/${page.path}`;
          options.component = page.children;

          let route = <PublicRouter {...options} {...this.props} />;
          array.push(route);
        }
      });
    };

    render() {
      const { NotFound } = sitemap;
      let routers = [];
      this.makeRouter(routers, sitemap);
      console.log({ routers });

      return (
        <Fragment>
          <WrappedComponent {...this.props}>
            <Switch>
              {routers}
              {NotFound ? <NotFound /> : null}
            </Switch>
          </WrappedComponent>
        </Fragment>
      );
    }
  }

  return connect(
    state => {
      return { asd: 'wow' };
    },
    {},
  )(withRouter(SitemapRouter));
};

export default withSitemapRouter;
