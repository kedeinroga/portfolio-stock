import { StockRegistry } from "./interfaces";
import { Stock } from "./stock";

export class Portfolio {
  constructor(
    private stocks: StockRegistry[],
    private stockPrices = new Stock()
  ) {}

  public stocksFilterAndSortByDate(
    stock: StockRegistry[],
    startDate: Date,
    endDate: Date
  ): StockRegistry[] {
    return stock
      .filter(
        (stock) =>
          stock.date.getTime() > startDate.getTime() &&
          stock.date.getTime() < endDate.getTime()
      )
      .sort((stock1, stock2) => stock1.date.getTime() - stock2.date.getTime());
  }

  public getProfitByStock(startDate: Date, endDate: Date): number {
    return this.stocksFilterAndSortByDate(
      this.stocks,
      startDate,
      endDate
    ).reduce(
      (acc, stock) => acc + this.stockPrices.getPriceByDate(stock.date), //Can also use this.stocks.price
      0
    );
  }

  public annualizedReturn(startDate: Date, endDate: Date): number {
    const stocksSorted = this.stocksFilterAndSortByDate(
      this.stocks,
      startDate,
      endDate
    );

    const annualizedReturnTemp = (
      stock1: StockRegistry,
      stock2: StockRegistry
    ): number => {
      return (stock2.price - stock1.price) / stock1.price;
    };

    return stocksSorted.reduce(
      (acc, stock, index) =>
        index < stocksSorted.length - 1
          ? acc + annualizedReturnTemp(stock, stocksSorted[index + 1])
          : acc,
      0
    );
  }
}
