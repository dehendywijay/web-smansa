export type MenuItem = {
  title: string;
  href: string;
  subItems?: MenuSubItem[];
};

export type MenuSubItem = {
  title: string;
  href: string;
};

export type News = {
  id: number;
  title: string;
  thumbnail: string;
  imgUrl: string;
  content: string;
  createdAt: string | Date;
  updatedAt: string | Date;
};

