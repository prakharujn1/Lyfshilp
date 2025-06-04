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
    <div>
      <h1 className="text-2xl font-bold mb-4">Section 4: Stock Market</h1>
      <HeaderStockMarket topicRefs={topicRefs} />
      <IntroStockMarket topicRefs={topicRefs} />
      <StockLifeExample topicRefs={topicRefs} />
      <WhereBuyShares topicRefs={topicRefs} />
      <PricesFluctuate topicRefs={topicRefs} />
      <StockMarketAndGambling topicRefs={topicRefs} />
      <KeyTermsStock topicRefs={topicRefs} />
      <StocksReflection topicRefs={topicRefs} />
    </div>
  );
};

export default Section4;
