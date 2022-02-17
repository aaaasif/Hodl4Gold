import { useWeb3 } from "@3rdweb/hooks";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Button, FileIcon, Logo } from "..";

import "./Header.scss";

const Header: React.FC = () => {
  const { address } = useWeb3();

  return (
    <header className="header pad">
      <div>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="header_controls">
        {!address ? (
          <Button>
            <FileIcon />
            <span>Read Whitepaper</span>
          </Button>
        ) : (
          <Fragment>
            <Button variant="secondary">
              <span style={{ fontSize: 16 }}>1287 HODL POINTS</span>
            </Button>
            <Button>
              <span className="address" style={{ fontSize: 16 }}>
                {`${address.slice(0, 5)}...${address.slice(address.length - 4)}`}
              </span>
              <span style={{ fontSize: 16 }}>334.5 ETH</span>
            </Button>
          </Fragment>
        )}
      </div>
    </header>
  );
};

export default Header;
