import { useContext } from "react";

import { ChallengeContext } from "../contexts/ChallengeContext";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
  const { level } = useContext(ChallengeContext);

  return (
    <div className={styles.profileContainer}>
      <img
        src="https://avatars.githubusercontent.com/u/31313971?s=460&u=135fc6b28e1a19071d2a61ce07109d8a577767ea&v=4"
        alt="Eli Marins"
      />

      <div>
        <strong>Eli Marins</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
