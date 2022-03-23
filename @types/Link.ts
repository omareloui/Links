export interface Link {
  _id: string;
  url: string;
  slug: string;
  clicks: number;
}

export interface CreateLink {
  url: string;
  slug?: string;
}