import React, { useReducer } from "react";
import Header from "../components/Header";
import Footer from "../components/footer";
import Banner from "../components/Banner";
import Button from "../components/Button";

import Transaction from "../components/Transaction";

const BannerContent = () => (
  <>
    <div>
      <h2 className="heading4 text-secondary">Buying power</h2>
      <h1 className="heading1">N0.00</h1>
    </div>
    <div>
      <Button className="mt-0" type="large" bg="secondary">
        Buy
      </Button>
      <Button className="mt-0" type="large" bg="secondary">
        Sell
      </Button>
    </div>
  </>
);

const Dashboard = () => {
  const [toggleMenu, setToggleMenu] = useReducer(
    (toggleMenu) => !toggleMenu,
    false
  );
  return (
    <>
      <Header toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <Banner
        type="small"
        content={BannerContent}
        bg="var(--color-primaryinverse)"
      />
      <div className="container">
        <Transaction />
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
