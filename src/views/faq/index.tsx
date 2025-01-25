export const questions = [
  {
    question: " What is an SPL token, and how does it differ from other token standards like ERC-20?",
    answer:
      "An SPL token is the token standard used on the Solana blockchain. It is managed by the Solana Program Library (SPL), a collection of on-chain programs that implement various functionalities, including token management. SPL tokens are used for fungible assets (like cryptocurrencies), non-fungible tokens (NFTs), and any other representation of value on the Solana network",
    id: "faq-1",
  },
  {
    question: "Why would someone want to create an SPL token on Solana instead of other blockchain platforms?",
    answer:
      "\n" +
        "Creating an SPL token on Solana offers several advantages compared to other blockchain platforms, making it an attractive option for developers and businesses. One of the primary reasons is Solana’s high performance and scalability. With transaction speeds as fast as ~400 milliseconds and the ability to handle up to 65,000 transactions per second, Solana provides unmatched throughput, which is crucial for applications requiring real-time interactions like gaming, decentralized finance (DeFi), and payment systems. Moreover, Solana’s extremely low transaction costs—fractions of a cent per transaction—make it highly cost-effective, especially for applications involving microtransactions or high-frequency usage.",
    id: "faq-2",
  },
  {
    question: "What are the main use cases for SPL tokens?",
    answer:
      "One of the most common use cases for SPL tokens is in decentralized finance (DeFi). SPL tokens can be used for liquidity provision, staking, yield farming, and trading on decentralized exchanges (DEXs) like Serum and Orca. Their fast transaction speeds and low fees make them ideal for high-frequency trading and seamless user experiences. Stablecoins issued as SPL tokens, such as USDC and USDT, are frequently used for lending, borrowing, and payments within Solana's DeFi ecosystem",
    id: "faq-3",
  },
  {
    question: " How does solana exist for cross border payment and global remittances?",
    answer:
      "Another significant use case is global payments and remittances. With Solana’s low fees, SPL tokens can serve as an affordable way to transfer value across borders. Businesses can issue their own stablecoins or utility tokens for payment systems, loyalty programs, or subscriptions. Furthermore, SPL tokens are well-suited for tokenized assets, such as real estate, commodities,",
    id: "faq-4",
  },
  {
    question: "Are there any regulatory considerations or compliance issues for creating and distributing SPL tokens?",
    answer:
      "Yes, there are regulatory considerations and compliance issues when creating and distributing SPL tokens, as with any blockchain-based assets. While Solana provides the technology to create and manage SPL tokens, it’s essential to ensure that their creation, distribution, and usage comply with applicable laws and regulations. These considerations can vary depending on the jurisdiction and the purpose of the token.",
    id: "faq-5",
  },
  {
    question: "How can I implement custom token functionality, such as staking or governance, for my SPL token?",
    answer:
      "Implementing custom token functionality like staking or governance for your SPL token requires developing and integrating additional smart contracts (referred to as programs on Solana). The Solana Program Library (SPL) provides the foundation for basic token operations, but custom features require writing your own programs using Solana’s development tools.",
    id: "faq-6",
  },
];


import React from 'react'

const FaqView = () => {
  return (
    <section id="faq" className={"py-20"}>
      <div className="container">
        <div className="mb-10 flex items-end justify-between">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-medium capitalize text-white">
               Any Question
            </h2>
            <p className="text-default-200 text-sm font-medium">
              Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
           </div>
        </div>
        <div className="mx-auto max-w-3xl">
          <div className="hs-accordion-group space-y-4">
            {
              questions.map((question, index) => (
                  <div key={index}
                   className={"hs-accordion bg-default-950/40 overflow-hidden rounded-lg border border-white/10 backdrop-blur-3xl"}
                       id={question.id}
                  >
                <button className="hs-accordion-toggle inline-flex item-center justify-between gap-x-3 px-6 py-4 text-left capitalize text-white transition-all" aria-controls={`faq-accordion-${index + 1}`}>
                    <h5 className="flex text-base font-semibold">
                      <i className="me-3 h-5 w-5 stroke-white align-middle">

                      </i>
                      {question.question}
                    </h5>
                  <i className="hs-accordion-active:-rotate-180 h-4 w-4 transition-all duration-500"></i>
                </button>
                    <div id={`faq-accordion-${index + 1}`} className={"hs-accordion-content w-full overflow-hidden transition-[height] duration-300"} aria-labelledby={question.id}>
                      <div className="px-6 pb-4 pt-0">
                        <p className="text-default-300 mb-2 text-sm font-medium">
                          {question.answer}
                        </p>
                        <p className="text-default-300 text-sm font-medium">
                            Have you ever wanted to create your a solana custom token , check the tools section
                        </p>
                      </div>
                    </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default FaqView;