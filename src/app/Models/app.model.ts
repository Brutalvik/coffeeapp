export interface CoffeeDataInterface {
  id?: number;
  uid?: string;
  blend_name?: string;
  origin?: string;
  variety?: string;
  notes?: string;
  intensifier?: string;
}

export interface AppStateInterface {
  isLoading?: boolean;
  coffeeData?: CoffeeDataInterface[];
}
