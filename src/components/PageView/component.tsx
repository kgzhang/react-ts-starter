import * as React from 'react';
import { Route } from 'react-router-dom';

import { sendPageView } from '../../analytics';

/**
 * PageView component
 * @author [Kaige Zhang](zhangkeger@gmail.com)
 */

export type PageViewProps = Readonly<{
  pathname: string
}>;


function useSendPageView(pathname: string): void {
  React.useEffect(
    () => {
      sendPageView({ path: pathname });
    },
    [pathname]
  );
}

export const PageViewBase: React.FunctionComponent<PageViewProps> = ({ pathname }) => {
  useSendPageView(pathname);

  return null;
};


const PageView = () => (
  <Route render={({ location }) => <PageViewBase pathname={location.pathname} />} />
);

export default PageView;