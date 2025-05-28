import HeaderStockMarket from "../../FinanceDesignForNotes/Section-4/HeaderStockMarket.jsx";
import IntroStockMarket from "../../FinanceDesignForNotes/Section-4/IntroStockMarket.jsx";
import StockLifeExample from "../../FinanceDesignForNotes/Section-4/StockLifeExample.jsx";
import WhereBuyShares from "../../FinanceDesignForNotes/Section-4/WhereBuyShares.jsx";
import PricesFluctuate from "../../FinanceDesignForNotes/Section-4/PricesFluctuate.jsx";
import StockMarketAndGambling from "../../FinanceDesignForNotes/Section-4/StockMarketAndGambling.jsx";
import KeyTermsStock from "../../FinanceDesignForNotes/Section-4/KeyTermsStock.jsx";
import StocksReflection from "../../FinanceDesignForNotes/Section-4/StocksReflection.jsx";

const Section1 = () => {
  return (
    <div className="space-y-6 p-6">
      <HeaderStockMarket />
      <IntroStockMarket />
      <StockLifeExample />
      <WhereBuyShares />
      <PricesFluctuate />
      <StockMarketAndGambling />
      <KeyTermsStock />
      <StocksReflection />
    </div>
  );
};

export default Section1;
