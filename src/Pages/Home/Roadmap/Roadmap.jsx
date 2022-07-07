import React from "react";
import styles from "./Roadmap.module.css";
import mid from "../../../Assets/roadmap/mid.png";
import time from "../../../Assets/roadmap/time.svg";
function Roadmap() {
  return (
    <div className={styles.roadCont}>
      <img src={time} className={styles.time} alt="" />
      <div className={styles.roadmap}>
        <img src={mid} className={styles.mid} alt="" />
        <div className={styles.roadCol}>
          <div className={styles.topRoad}>
            <h1>
              ROADMAP <br /> <span className={styles.red}>Q3 2022</span>
            </h1>
          </div>
          <ul className={styles.roadList}>
            <li className={styles.roadItem}> Build phase </li>
            <li className={styles.roadItem}> Develop and implement </li>
            <li className={styles.roadItem}> ProtocolX contract </li>
            <li className={styles.roadItem}> dApp/Dashboard </li>
            <li className={styles.roadItem}> DEX Swap </li>
            <li className={styles.roadItem}> Farming/Staking platform </li>
            <li className={styles.roadItem}> Publish Official Whitepaper </li>
            <li className={styles.roadItem}> Develop and Launch </li>
            <li className={styles.roadItem}> website interface </li>
            <li className={styles.roadItem}> PR Marketing </li>
            <li className={styles.roadItem}> (YouTube/Twitter/etc.) </li>
            <li className={styles.roadItem}> Airdrop to $XSWAP </li>
            <li className={styles.roadItem}> ProtocolX Live Phase </li>
            <li className={styles.roadItem}>
              Fair pre-sale launch on PinkSale
            </li>
            <li className={styles.roadItem}> Launch of XShare </li>
            <li className={styles.roadItem}>
              Application for CoinMarketCap & CoinGecko listings
            </li>
            <li className={styles.roadItem}>
              Additional YouTube marketing campaign
            </li>
            <li className={styles.roadItem}>
              Develop and establish partnerships (pre/post launch)
            </li>
            <li className={styles.roadItem}>
              Develop and implement wrapped PTX
            </li>
            <li className={styles.roadItem}>
              Introduce crypto farming for XSWAP token
            </li>
            <li className={styles.roadItem}>
              Investing Treasury funds in varying levels of risk
            </li>
            <li className={styles.roadItem}> Single Staking of XSWAP </li>
            <li className={styles.roadItem}> XSWAP Lottery system </li>
            <li className={styles.roadItem}>
              ProtocolX Node/PTX burn mechanisms implemented
            </li>
          </ul>
        </div>
        <div className={styles.roadCol}>
          <div className={styles.topRoad}>
            <h1>
              <span className={styles.red}>Q4 2022</span> <br /> & BEYOND
            </h1>
          </div>
          <ul className={styles.roadList}>
            <li className={styles.roadItem}>
              Expanding the ProtocolX Ecosystem
            </li>
            <li className={styles.roadItem}>
              Introducing gamification systems to promote the{" "}
            </li>
            <li className={styles.roadItem}> PTX/XSWAP token </li>
            <li className={styles.roadItem}> Initial development of </li>
            <li className={styles.roadItem}> ProtocolX Blockchain </li>
            <li className={styles.roadItem}>
              Integration of a NFT Marketplace with ProtocolX
            </li>
            <li className={styles.roadItem}>
              Hosting project pre-sales with DEX
            </li>
            <li className={styles.roadItem}>
              Development of additional farm/staking on ProtocolX dApp
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
