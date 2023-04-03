type TabElement = {
  name: string;
  icon: string;
  label: string;
};

type TProduct = {
  id: number;
  title: string;
  company: string;
  description: string;
  price: number;
  image: any;
};

type RootStackParamList = {
  Products: undefined;
  ProductDetail: {product: TProduct};
};

type TabParamList = {
  Products: undefined;
  Cart: undefined;
  Favourites: undefined;
  Profile: undefined;
};
