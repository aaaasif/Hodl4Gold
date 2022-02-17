import React, { useContext } from "react";
import { useWeb3 } from "@3rdweb/hooks";

import "./LandingPage.scss";
import { Button, LinkIcon } from "../../components";
import tokenImage from "../../assets/abstracts/token.png";
import { Web3Context } from "../../store/context/Web3Context";

import FeaturedTweets from "./FeaturedTweets";
import Leaderboard from "./Leaderboard";
import OnGoingEvents from "./OnGoingEvents";
import Proposals from "./Proposals";

const HeroStats = () => {
  return (
    <div className="hero_stats">
      <div>
        <b>114+</b>
        <p>Community Members</p>
      </div>
      <div>
        <b>114+</b>
        <p>Ongoing Events</p>
      </div>
      <div>
        <b>114+</b>
        <p>Proposals</p>
      </div>
    </div>
  );
};

const LandingPage: React.FC = () => {
  const { address } = useWeb3();
  const { setOpenModal } = useContext(Web3Context);

  return (
    <div>
      <div className="page_container pad">
        <div className="hero">
          <h1>Welcome to the Den</h1>
          <p className="mb-20 mt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus nunc sollicitudin at
            ut lobortis in phasellus est. Mollis semper id vitae in eget. Risus risus diam iaculis
            leo sit faucibus gravida. Dictum est cursus ut.
          </p>
          <div className="flex mb-40">
            {!address && (
              <Button onClick={() => setOpenModal(true)}>
                <LinkIcon />
                <span>Connect Wallet</span>
              </Button>
            )}
            <Button variant="secondary">
              <img src={tokenImage} alt="h4gtoken" />
              <span>Buy H4G Token</span>
            </Button>
          </div>
          <HeroStats />
        </div>
      </div>
      {address && (
        <>
          <div className="pad">
            <FeaturedTweets />
          </div>
          <div className="pad">
            <OnGoingEvents />
          </div>
          <div className="pad">
            <Proposals />
          </div>
          <Leaderboard />
        </>
      )}
    </div>
  );
};

export default LandingPage;
