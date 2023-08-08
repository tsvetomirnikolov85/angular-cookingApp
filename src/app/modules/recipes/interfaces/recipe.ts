export interface Recipe {
  _id: string;
  title: string;
  imageUrl: string;
  products: string[];
  description: string[];
  ownerId: string;
  ownerImg: string;
  ownerName: string;
  likes: string[];
}
