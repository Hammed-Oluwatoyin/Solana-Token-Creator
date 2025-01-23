import React from 'react'
import {MdGeneratingTokens, MdToken} from "react-icons/md";
import {RiTokenSwapFill} from "react-icons/ri";
import {RxTokens} from "react-icons/rx";
import {LuArrowRightFromLine} from "react-icons/lu";

const Features = ({setOpenAirdrop,
  setOpenContact,
  setOpenCreateModal,
  setOpenSendTransaction,
  setOpenTokenMetaData}) => {
  const features = [
    {
      name:"Token Generator",
      icon: <MdGeneratingTokens />,
      description:"A Token Generator is a tool or platform feature that " +
          "allows users to easily create and deploy custom blockchain-based " +
          "tokens without requiring extensive technical knowledge. It is widely " +
          "used in blockchain ecosystems to enable businesses, developers, and" +
          " individuals to launch their own tokens for a variety of purposes, " +
          "such as fundraising, rewards, or utility",
      function : setOpenCreateModal
    },
    {
      name: "Get Airdrop",
      icon: <MdToken/>,
      description: "An SPL token airdrop refers to the distribution of SPL" +
          " (Solana Program Library) tokens to wallet holders on the Solana blockchain." +
          " Airdrops are often used by blockchain projects to reward early supporters, create" +
          " awareness, or attract users to their ecosystem.",
      function: setOpenAirdrop
    },
    {
      name: "Transfer Sol",
      icon: <RiTokenSwapFill/>,
      description: "SPL tokens are the standard tokens used on the Solana blockchain, " +
          "much like ERC-20 tokens on Ethereum. Transferring SPL tokens involves sending " +
          "tokens from one Solana wallet to another using the Solana blockchain.",
      function: setOpenSendTransaction
    },
    {
      name: "Token MetaData",
      icon: <RxTokens/>,
      description: "In the Solana ecosystem, SPL Token Metadata refers to the additional information" +
          " associated with an SPL token, such as its name, symbol, logo, and other properties. This " +
          "metadata enhances the user experience by providing a human-readable representation of tokens " +
          "in wallets and decentralized applications (dApps).",
      function: setOpenTokenMetaData
    }

  ]
  return (
    <section id="features" className="py-20">
      <div className="container">
        <div className="mb-10 flex items-end justify-between">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-white text-3xl">
              Choose Solana Blockchain Generator
            </h2>
            <p className={"text-white"}>
              Now You can create Solana Token <br/>
              to without code instantly
            </p>
          </div>
        </div>
        <div className={"bg-default-950/40 flex flex-wrap items-center rounded-3xl backdrop-blur-3xl"}>
          {
            features.map((list,index) => (
                <div className={`w-auto lg:h-[427px] grow border-b border-white/10 md:w-1/2 ${
                  index == 0 ? "md:border-e" : index == 1 ? "" : index == 2 ? "md:border-e md:border-b-0" :""
                }`}>
                  <div className="p-8 sm:p-10">
                    <div className={"bg-primary/10 text-primary mb-10 inline-flex h-16 w-16 items-center justify-center rounded-xl"}>
                      <i data-lucide={"framer"}>
                        {
                          list.icon
                        }
                      </i>

                    </div>
                    <h2 className="mb-4 text-2xl font-medium text-white">
                      {
                        list.name
                      }
                    </h2>
                    <p className="text-default-200 mb-6 text-base xl:h-[120px]">
                      {list.description}
                    </p>
                    <a onClick={() => list.function(true)}
                    className={"hover:bg-primary inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-2 text-white transition-all duration-300"}
                    >
                      Use Tools
                      <i>
                        <LuArrowRightFromLine/>
                      </i>
                    </a>
                  </div>
                </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Features;