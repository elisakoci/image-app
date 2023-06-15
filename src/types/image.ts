export interface ImageModelType {
  id?: string;
  link?: string;
  title?: string;
  description?: string;
  in_gallery?: boolean;
  comment_count?: string;
  favorite_count?: string;
  ups?: number;
  downs?: number;
  points?: number;
  score?: number;
}

export interface DataType {
  id: string;
  title?: string;
  description?: string;
  link?: string;
  ups?: number;
  downs?: number;
  points?: number;
  score?: number;
  images?: ImageModelType;
}
