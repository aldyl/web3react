import { useCallback, useEffect } from "react";
import styles from "../styles/Home.module.css";
import { useWeb3React } from "@web3-react/core";
import { connector } from "../config/web3";

export default function Home() {
  const { activate, deactivate, active, error, account, chainId } =
    useWeb3React();

  const connect = useCallback(() => {
    activate(connector);
    localStorage.setItem("previouslyConnected", true);
  }, [activate]);

  useEffect(() => {
    if (localStorage.getItem("previouslyConnected") === true) connect();
  }, [connect]);

  const disconnect = () => {
    deactivate();
    localStorage.removeItem("previouslyConnected");
  };

  if (error) {
    return <p>Algo ha salido mal</p>;
  }

  return (
    <div className={styles.container}>
      <h1> Hola Web3 </h1>
      {active ? (
        <>
          <button onClick={disconnect}>Disconnect from Wallet</button>
          <p>Id de blockchain is: {chainId}</p>
          <p>Your account is: {account}</p>
        </>
      ) : (
        <button onClick={connect}> Connect to Wallet</button>
      )}
    </div>
  );
}
