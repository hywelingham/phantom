import { usePhantomWallet } from "./PhantomProvider";
export const ConnectButton = () => {
  const { connect } = usePhantomWallet();

  return <button onClick={connect}>Connect Wallet</button>;
};
