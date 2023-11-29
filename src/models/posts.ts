export interface SummaryPost {
  title: string;
  body: string;
  created_at: string;
  number: number;
}

export interface DetailedPost {
  title: string;
  html_url: string;
  comments: number;
  created_at: string;
  user: { login: string };
  body: string;
}
