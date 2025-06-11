import HeaderStockMarket from "./HeaderStockMarket";
import IntroStockMarket from "./IntroStockMarket";
import KeyTermsStock from "./KeyTermsStock";
import PricesFluctuate from "./PricesFluctuate";
import StockLifeExample from "./StockLifeExample";
import StockMarketAndGambling from "./StockMarketAndGambling";
import WhereBuyShares from "./WhereBuyShares";
import StocksReflection from "./StocksReflection";

const Section4 = ({ topicRefs }) => {
  return (
    <div
      id="4"
      ref={(el) => {
        if (topicRefs?.current) {
          topicRefs.current["4"] = el;
        }
      }}
      className="mb-10"
    >
      <div>
      <h1 className="text-2xl font-bold mb-4">Section 4: Stock Market</h1>
      <HeaderStockMarket  />
      <IntroStockMarket  />
      <StockLifeExample  />
      <WhereBuyShares  />
      <PricesFluctuate  />
      <StockMarketAndGambling  />
      <KeyTermsStock  />
      <StocksReflection  />
    </div>
    </div>
    
  );
};

export default Section4;
