import { Text } from "../../components/Text";
import { FaAddressBook, FaSeedling } from "react-icons/fa";
import { Card } from "../../components/Card";
import { BsKeyFill } from "react-icons/bs";
function Wallets() {
  return (
    <Text>
      <h1>Wallets 101</h1>
      <p>
        We’re starting with wallets because they are your ticket to pretty much
        everything in Web3. Think of your wallet like a universal login to any
        website or service. You’ll see an example of that with this website
        later on.
      </p>
      <div className="grid grid-cols-1 grid-rows-3 sm:grid-rows-1 sm:grid-cols-3 gap-4 my-4">
        <Card
          icon={<FaAddressBook />}
          title="Public Address"
          body="A way for people to send stuff to you! Feel free to share this. Here's mine! 0xe0ef181fBCa2a0376d448833CAEeb60da3aB4f33"
        />
        <Card
          icon={<BsKeyFill />}
          title="Private Key"
          body="Allows you to sign and send transactions. This is usually stored and handled by your wallet app. Just remember to never export or share this!"
        />
        <Card
          icon={<FaSeedling />}
          title="Seed Phrase"
          body="Your private key is derived from your seed phrase, which is a 12-24 word phrase. This is the only way to recover your private key. More on how to keep this safe later."
        />
      </div>
      <p>
        Wallets can be <b>custodial</b> or <b>non-custodial</b>. A custodial
        wallet means a third party has ownership of the private keys, and are
        usually offered by exchanges such as Coinbase or Gemini. A non-custodial
        wallet means you have full control and ownership of your funds.
      </p>
    </Text>
  );
}

export default Wallets;
