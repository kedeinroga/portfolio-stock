import { mockupStock } from "../mocks/mockups";
import { Portfolio } from "./portfolio";

const stoks = mockupStock;

const portfolio = new Portfolio(stoks);

const dateOne = new Date("2021-05-30")
const dateTwo = new Date("2022-05-30")

console.log(
  "Profit between these dates:",
  portfolio.getProfitByStock(dateOne, dateTwo)
);

console.log(
  "Annualized return between these dates:",
  portfolio.annualizedReturn(dateOne, dateTwo)
);

