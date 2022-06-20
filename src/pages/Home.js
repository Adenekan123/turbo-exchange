import React, { useReducer } from "react";
import "../components/Grid/index.css";
import me from "../me.jpeg";
import ceo from "../ceo.png";

import { BiTransfer, BiDevices, BiWallet, BiShield } from "react-icons/bi";
import { FaWhatsapp, FaTelegramPlane } from "react-icons/fa";

import Header from "../components/Header";
import Footer from "../components/footer";
import Banner from "../components/Banner";
import Button from "../components/Button";
// import Card from "../components/Card";

const BannerContent = () => (
  <div className="content">
    <h1>
      <span>buy</span> and <span>sell</span> crypto currency instantly
    </h1>
    <Button type="large" bg="secondary">
      start trading <BiTransfer />
    </Button>
  </div>
);

const Home = () => {
  const [toggleMenu, setToggleMenu] = useReducer(
    (toggleMenu) => !toggleMenu,
    false
  );
  return (
    <>
      <Header toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <Banner type="large" content={BannerContent} />
      <section className="container mt-0">
        <div className="chain">
          <div className="ring-12">
            <h2 className="heading2">why our customers love us ?</h2>
          </div>
          <div className="ring-4-md">
            <div className="card fill">
              <BiDevices />
              <h3 className="heading3">easy to use</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos at
                saepe tempora.
              </p>
            </div>
          </div>
          <div className="ring-4-md">
            <div className="card fill">
              <BiWallet />
              <h3 className="heading3">fast payment</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos at
                saepe tempora.
              </p>
            </div>
          </div>
          <div className="ring-4-md">
            <div className="card fill">
              <BiShield />
              <h3 className="heading3">save and secure</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos at
                saepe tempora.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="chain">
          <div className="ring-12">
            <h2 className="heading2">what our customers are saying</h2>
          </div>
          <div className="ring-4-md">
            <div className="card bordered">
              <p className="comment heading2">
                “A simple interface with easy navigation that offers a seamless
                trading experience”
              </p>
              <div className="caption">
                <img src={me} alt="" />
                <span> John doe</span>
              </div>
            </div>
          </div>
          <div className="ring-4-md">
            <div className="card bordered">
              <p className="comment heading2">
                “A simple interface with easy navigation that offers a seamless
                trading experience”
              </p>
              <div className="caption">
                <img src={me} alt="" />
                <span> John doe</span>
              </div>
            </div>
          </div>
          <div className="ring-4-md">
            <div className="card bordered">
              <p className="comment heading2">
                “A simple interface with easy navigation that offers a seamless
                trading experience”
              </p>
              <div className="caption">
                <img src={me} alt="" />
                <span> John doe</span>
              </div>
            </div>
          </div>
          <div className="ring-4-md">
            <div className="card bordered">
              <p className="comment heading2">
                “A simple interface with easy navigation that offers a seamless
                trading experience”
              </p>
              <div className="caption">
                <img src={me} alt="" />
                <span> John doe</span>
              </div>
            </div>
          </div>
          <div className="ring-4-md">
            <div className="card bordered">
              <p className="comment heading2">
                “A simple interface with easy navigation that offers a seamless
                trading experience”
              </p>
              <div className="caption">
                <img src={me} alt="" />
                <span> John doe</span>
              </div>
            </div>
          </div>
          <div className="ring-4-md">
            <div className="card bordered">
              <p className="comment heading2">
                “A simple interface with easy navigation that offers a seamless
                trading experience”
              </p>
              <div className="caption">
                <img src={me} alt="" />
                <span> John doe</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ceo">
        <div className="chain">
          <div className="ring-12 ring-7-md">
            <div className="imgBx">
              <img src={ceo} alt="" />
            </div>
          </div>
          <div className="ring-5-md">
            <div className="text-center">
              <p className="heading2 mt-0">
                meet <span className="text-primary">al-hamin adeyemi</span>
              </p>
              <span>ceo</span>
            </div>
            <div className="text-center">
              <h1 className="heading1">join us on</h1>
              <Button fillicon="#44BF53" type="small" bg="primaryinverse">
                Whatsapp <FaWhatsapp />
              </Button>
              <Button fillicon="#2C9FCE" type="small" bg="primaryinverse">
                Telegram <FaTelegramPlane />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="newsletter">
        <div className="contaner">
          <div className="chain">
            <div className="ring-12">
              <h2 className="heading2">subscribe to our newsletters</h2>
            </div>
            <div className="ring-12 ring-7-md">
              <div className="message-box">
                <input type="email" name="" id="" placeholder="Email Address" />
                <button type="smaller" bg="secondary">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
