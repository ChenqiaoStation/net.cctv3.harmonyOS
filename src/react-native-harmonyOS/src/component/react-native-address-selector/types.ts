export type AddressItem = {
  name: string;
  code: string | number;
  select?: boolean;
  children?: AddressItem[];
};

export type Address = {
  province: AddressItem | null;
  city: AddressItem | null;
  area: AddressItem | null;
  street: AddressItem | null;
};
