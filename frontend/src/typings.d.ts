
declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';
declare module 'react-fittext';
declare module '@antv/data-set';
declare module 'webpack-theme-color-replacer';
declare module 'webpack-theme-color-replacer/client';

// google analytics interface
interface GAFieldsObject {
  eventCategory: string;
  eventAction: string;
  eventLabel?: string;
  eventValue?: number;
  nonInteraction?: boolean;
}
interface Window {
  ga: (
    command: 'send',
    hitType: 'event' | 'pageview',
    fieldsObject: GAFieldsObject | string,
  ) => void;
}

declare let ga: Function;

// preview.pro.ant.design only do not use in your production ;
// preview.pro.ant.design 专用环境变量，请不要在你的项目中使用它。
declare let ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: 'site' | undefined;

// interface ITDAPP {
//   onEvent: (eventLabel: string) => {};
// }

// declare let TDAPP: ITDAPP;


/*
declare namespace//TDAPP {
  onEvent: (eventLabel: string) => {
    console.log(eventLabel)
  };
}
*/
// 这样定义为什么，还不能继续使用？
/*
const MYTDAPP = {
  onEvent: (eventLabel: string) => {
    console.log(eventLabel)
  }
}

declare let TDAPP: MYTDAPP;
*/
