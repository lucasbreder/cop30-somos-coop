export type Case = {
  id: number;
  title: string;
  markdownTitle?: string;
  context: string;
  challenge?: string;
  development: string;
  cooperName: string;
  excerpt: string;
  categories: string[];
  branch: string;
  mainOds: number;
  asideOds: number[];
  state: string;
  thumbnail?: string;
  gallery?: string[];
  objectives?: string;
  result?: string;
  company?: string;
};

export type CaseCompany = {
  id: number;
  title: string;
  markdownTitle?: string;
  context: string;
  challenge?: string;
  development: string;
  thumbnail?: string;
  gallery?: string[];
  objectives?: string;
  result?: string;
  company?: string;
};
