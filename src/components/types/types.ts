export interface Skills {
  tecnicas: string[];
  blandas: string[];
  tools: string[];
}
export interface StackIconsProps {
  stack: string[];
}
export type Service = {
  title: string;
  img: string;
  description: string;
  price: string;
  starts: string[];
};
export type Project = {
  title: string;
  img: string;
  description: string;
  stack: string[];
  link: string;
};
