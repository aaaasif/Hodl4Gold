import { useWeb3 } from "@3rdweb/hooks";
import { AnimatePresence } from "framer-motion";
import React, { createContext, ReactElement, useEffect, useState } from "react";

import metamask from "../../assets/images/metamask.png";
import { Modal, RightIcon } from "../../components";

interface Web3ContextProps {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Web3Context = createContext<Web3ContextProps>({
  openModal: false,
  setOpenModal: () => {},
});

const Web3ContextProvider: React.FC<{ children: ReactElement }> = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const { connectWallet, error } = useWeb3();

  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);

  const handleClose = () => {
    if (loading) return;
    setOpenModal(false);
  };

  const handleConnect = async () => {
    try {
      setLoading(true);
      await connectWallet("injected");
      setLoading(false);
      setOpenModal(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Web3Context.Provider value={{ openModal, setOpenModal }}>
      {children}
      <AnimatePresence initial={false} exitBeforeEnter onExitComplete={() => null}>
        {openModal && (
          <Modal handleClose={handleClose}>
            <div className="modal_wallet_content">
              <h3>Connect your exchange wallet</h3>
              <p className="mb-20 mt-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus nunc sollicitudin
                at ut lobortis in phasellus est. Mollis semper id vitae in eget.{" "}
              </p>
              <div className="wallets_wrapper">
                <div
                  className={loading ? "wallet active" : "wallet"}
                  onClick={() => handleConnect()}
                >
                  <img src={metamask} alt="metamask logo" />
                  <div className="wallet_content">
                    <div>
                      <h5 className="mb-5">Connect{loading && `ing`} to Metamask</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus nunc
                        sollicitudin at ut lobortis in.
                      </p>
                    </div>
                    <RightIcon />
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </Web3Context.Provider>
  );
};

export default Web3ContextProvider;
