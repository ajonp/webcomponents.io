/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/router';

import '@ionic/core';


declare global {
  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;
  }
}



import {
  AppMarked as AppMarked
} from './components/app-marked/app-marked';

declare global {
  interface HTMLAppMarkedElement extends AppMarked, HTMLStencilElement {
  }
  var HTMLAppMarkedElement: {
    prototype: HTMLAppMarkedElement;
    new (): HTMLAppMarkedElement;
  };
  interface HTMLElementTagNameMap {
    "app-marked": HTMLAppMarkedElement;
  }
  interface ElementTagNameMap {
    "app-marked": HTMLAppMarkedElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "app-marked": JSXElements.AppMarkedAttributes;
    }
  }
  namespace JSXElements {
    export interface AppMarkedAttributes extends HTMLAttributes {
      doc?: string;
    }
  }
}


import {
  WcApp as WcApp
} from './components/wc-app/wc-app';

declare global {
  interface HTMLWcAppElement extends WcApp, HTMLStencilElement {
  }
  var HTMLWcAppElement: {
    prototype: HTMLWcAppElement;
    new (): HTMLWcAppElement;
  };
  interface HTMLElementTagNameMap {
    "wc-app": HTMLWcAppElement;
  }
  interface ElementTagNameMap {
    "wc-app": HTMLWcAppElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "wc-app": JSXElements.WcAppAttributes;
    }
  }
  namespace JSXElements {
    export interface WcAppAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  WcComponents as WcComponents
} from './components/wc-components/wc-components';

declare global {
  interface HTMLWcComponentsElement extends WcComponents, HTMLStencilElement {
  }
  var HTMLWcComponentsElement: {
    prototype: HTMLWcComponentsElement;
    new (): HTMLWcComponentsElement;
  };
  interface HTMLElementTagNameMap {
    "wc-components": HTMLWcComponentsElement;
  }
  interface ElementTagNameMap {
    "wc-components": HTMLWcComponentsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "wc-components": JSXElements.WcComponentsAttributes;
    }
  }
  namespace JSXElements {
    export interface WcComponentsAttributes extends HTMLAttributes {
      pages?: string[];
    }
  }
}


import {
  WcHome as WcHome
} from './components/wc-home/wc-home';

declare global {
  interface HTMLWcHomeElement extends WcHome, HTMLStencilElement {
  }
  var HTMLWcHomeElement: {
    prototype: HTMLWcHomeElement;
    new (): HTMLWcHomeElement;
  };
  interface HTMLElementTagNameMap {
    "wc-home": HTMLWcHomeElement;
  }
  interface ElementTagNameMap {
    "wc-home": HTMLWcHomeElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "wc-home": JSXElements.WcHomeAttributes;
    }
  }
  namespace JSXElements {
    export interface WcHomeAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  SiteMenu as WcSiteMenu
} from './components/wc-site-menu/wc-site-menu';

declare global {
  interface HTMLWcSiteMenuElement extends WcSiteMenu, HTMLStencilElement {
  }
  var HTMLWcSiteMenuElement: {
    prototype: HTMLWcSiteMenuElement;
    new (): HTMLWcSiteMenuElement;
  };
  interface HTMLElementTagNameMap {
    "wc-site-menu": HTMLWcSiteMenuElement;
  }
  interface ElementTagNameMap {
    "wc-site-menu": HTMLWcSiteMenuElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "wc-site-menu": JSXElements.WcSiteMenuAttributes;
    }
  }
  namespace JSXElements {
    export interface WcSiteMenuAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  WcTopToolbar as WcTopToolbar
} from './components/wc-top-toolbar/wc-top-toolbar';

declare global {
  interface HTMLWcTopToolbarElement extends WcTopToolbar, HTMLStencilElement {
  }
  var HTMLWcTopToolbarElement: {
    prototype: HTMLWcTopToolbarElement;
    new (): HTMLWcTopToolbarElement;
  };
  interface HTMLElementTagNameMap {
    "wc-top-toolbar": HTMLWcTopToolbarElement;
  }
  interface ElementTagNameMap {
    "wc-top-toolbar": HTMLWcTopToolbarElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "wc-top-toolbar": JSXElements.WcTopToolbarAttributes;
    }
  }
  namespace JSXElements {
    export interface WcTopToolbarAttributes extends HTMLAttributes {
      
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
