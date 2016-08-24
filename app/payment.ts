export interface Payment {
  id?: number;
  amount: number;
  itemName: string;
  currencyCode?: string;
}
