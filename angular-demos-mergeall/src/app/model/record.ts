export interface Record {
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface Metadata {
  id: string;
  private: boolean;
  createdAt: string;
}

export interface RootObject {
  record: Record[];
  metadata: Metadata;
}
