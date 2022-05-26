import { StockRegistry } from "./interfaces";
import { mockupStock } from "../mocks/mockups";

export class Stock {
  public stocks: StockRegistry[] = mockupStock;
  public getPriceByDate(date: Date): number {
    const targetStockByDate = this.stocks.find(
      (stock) => stock.date.getTime() === date.getTime()
    );
    return targetStockByDate ? targetStockByDate.price : 0;
  }
}
