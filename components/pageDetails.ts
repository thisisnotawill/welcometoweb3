interface Page {
  title: string;
  path: string;
  description?: string;
  subpages?: Page[];
}

interface PageDetails {
  [key: string]: Page;
}

export const pageDetails: PageDetails = {
  Home: {
    title: "Welcome",
    path: "/",
  },
  Wallets: {
    title: "Wallets",
    path: "/wallets",
    description: "A quick wallet 101 to get you started in Web3",
    subpages: [
      {
        title: "Wallet Providers",
        description: "Which wallet should I start out with?",
        path: "/wallets/providers",
      },
      {
        title: "Setup",
        description:
          "A quick guide to setting up your wallet for the first time and storing your seed phrase securely?",
        path: "/wallets/setup",
      },
      {
        title: "Sending Money",
        description:
          "A quick guide to sending crypto. We cover gas fees, transactions speeds, and viewing your transaction history.",
        path: "/wallets/sending-money",
      },
    ],
  },
  Security: {
    title: "Security",
    path: "/security",
    subpages: [
      {
        title: "Storing Your Seed Phrase",
        path: "/security/storing-your-seed-phrase",
      },
      {
        title: "Common Scams",
        path: "/security/common-scams",
      },
    ],
  },
};

export const getPageDetailsArray = () => {
  const pageDetailsArray: Page[] = [];
  for (const key in pageDetails) {
    if (pageDetails.hasOwnProperty(key)) {
      const page = pageDetails[key];
      pageDetailsArray.push(page);
      if (page.subpages) {
        page.subpages.forEach((subpage) => {
          pageDetailsArray.push(subpage);
        });
      }
    }
  }
  return pageDetailsArray;
};
