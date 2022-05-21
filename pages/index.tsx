/* eslint-disable react/no-unescaped-entities */
import { Text } from "../components/Text";

function Home() {
  return (
    <Text>
      <h1 className="text-center">Hey, you made it!</h1>
      <p>
        Welcome. We're here to get you started with Web3 simply and safely. It's
        going to be a little different than what you're used to, but we'll help
        you get the hang of it quickly. This site will walk you through setting
        up your first wallet, sending crypto, security, and some fun things you
        can do in Web3.
      </p>
      <p>
        It's important to remember that Web3 is still in it's infancy. The user
        experience may be choppy at times. There's lots of scams out there to
        watch out for. But the good news is that there are a lot of smart people
        working on those problems. The even better news? It means you're early.
      </p>

      <p>Click the arrow or use your arrow keys to navigate the site.</p>
    </Text>
  );
}

export default Home;
