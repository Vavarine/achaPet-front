declare module '*.svg' {
  const content: any;
  export default content;
}
export interface InstitutionalContent {
  slug: string;
  title: string;
  text: string;
}

export interface User {
  name: string;
  email: string;
}
