import { Text } from "../../components/Text";

function Wallets() {
  return (
    <Text>
      <p>
        We’re starting with wallets because they are your ticket to pretty much
        everything in Web3. Think of your wallet like a universal login to any
        website or service. You’ll see an example of that with this website
        later on.
      </p>
      <ul className="list-disc list-inside">
        <li>Public Address - a way for people to send stuff to you!</li>
        <li>Private Key - allows you to sign and send transactions</li>
        <li>Metamask - Your private key is derived from your seed phrase.</li>
      </ul>
      <p>
        Wallets can be custodial or non-custodial. A custodial wallet means a
        third party has ownership of the private keys, and are usually offered
        by exchanges such as Coinbase or Gemini. A non-custodial wallet means
        you have full control and ownership of your funds.
      </p>
      <p>Your “wallet” has a few parts to it: </p>
    </Text>
  );
}

export default Wallets;
