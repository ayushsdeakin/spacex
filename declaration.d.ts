declare module 'react-lottie' {
    import { Component } from 'react';
  
    export interface Options {
      loop?: boolean;
      autoplay?: boolean;
      animationData: object;
      rendererSettings?: {
        preserveAspectRatio?: string;
        [key: string]: any;
      };
    }
  
    export interface LottieProps {
      options: Options;
      height?: number | string;
      width?: number | string;
      isStopped?: boolean;
      isPaused?: boolean;
      speed?: number;
      direction?: number;
      eventListeners?: Array<{
        eventName: string;
        callback: () => void;
      }>;
      [key: string]: any;
    }
  
    export default class Lottie extends Component<LottieProps, any> {}
  }
  