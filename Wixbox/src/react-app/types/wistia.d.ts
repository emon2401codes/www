declare namespace JSX {
  interface IntrinsicElements {
    'wistia-player': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      'media-id': string;
      aspect: string;
      className?: string;
    };
  }
}

declare global {
  interface Window {
    Wistia?: any;
  }
}

export {};
