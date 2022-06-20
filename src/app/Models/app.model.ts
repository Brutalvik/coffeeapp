export interface CoffeeDataInterface {
  id?: number;
  uid?: string;
  blend_name?: string;
  origin?: string;
  variety?: string;
  notes?: string;
  intensifier?: string;
}

export interface ErrorDataInterface {
  status: number;
  message: string;
}

export interface AppStateInterface {
  isLoading?: boolean;
  data?: CoffeeDataInterface;
  error?: ErrorDataInterface;
}
