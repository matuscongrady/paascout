declare module '*.png' {
  const value: string;
  export = value;
}

declare module '*.jpg' {
  const value: string;
  export = value;
}

declare module '*.svg' {
  const value: string;
  export = value;
}

declare module '*.html' {
  const value: string;
  export = value;
}

declare module '*.gif' {
  const value: string;
  export = value;
}

declare module '*.mp4' {
  const value: string;
  export = value;
}

declare module '*.webm' {
  const value: string;
  export = value;
}

type ReactNode = import('react').ReactNode;
type ComparableInfrastructureSize = 'Small' | 'Medium' | 'Large';

type ComparisonItem = {
  comparableCompetitor?: ComparableProvider;
  title: string;
  image: string;
  intro?: ReactNode;
  text?: ReactNode;
  tableContent: {
    title: ReactNode;
    columns: ReactNode[];
  }[];
};

type Css = import('@emotion/styled').CSSObject;
type AnyFunction = (...args: any[]) => any;

type ComparisonColumns = { [provider in ComparableProvider]: 'y' | 'n' | '~' | ReactNode };
type ComparedFeature = {
  name: string;
  explanation: ReactNode;
  whenDoINeedThis?: ReactNode[];
  columns: ComparisonColumns;
  disableFiltering?: boolean;
};
type ComparableProvider =
  | 'Heroku'
  | 'Render'
  | 'Vercel'
  | 'Stacktape'
  | 'Fly'
  | 'Railway'
  | 'Flightcontrol'
  | 'Porter'
  | 'Coherence';
