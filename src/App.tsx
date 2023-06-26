import "./styles.css";
import { ConnectButton } from "./ConnectButton";
import { usePhantomWallet } from "./PhantomProvider";

export default function App() {
  const { address } = usePhantomWallet();
  return (
    <div className="App">
      <ConnectButton />
      <br />
      Wallet Address: {address?.toString}
    </div>
  );
}
