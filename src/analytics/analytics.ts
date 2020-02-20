import ReactGA from 'react-ga';
import { Event } from './events';
import { isProductionEnvironment } from '../helpers/environments';


export const initializeAnalytics = (): void => {
  const GATrackingCode = '...';

  const reactGAOptions: ReactGA.InitializeOptions = {
    debug: !isProductionEnvironment,
    testMode: !isProductionEnvironment
  };


  ReactGA.initialize(GATrackingCode, reactGAOptions);
};


export const sendAnalyticsEvent = (event: Event): void => ReactGA.event({ ...event, transport: 'beacon'});



export type SendPageViewArgs = {
  path: string;
  title?: string
};


export const sendPageView = (data: SendPageViewArgs):void => ReactGA.pageview(data.path, undefined, data.title);


