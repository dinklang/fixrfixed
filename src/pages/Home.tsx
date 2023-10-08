import { FunctionComponent } from "react";
import styles from "./Home.module.css";

const Home: FunctionComponent = () => {
  return (
    <div className={styles.home}>
      <header className={styles.topHeader}>
        <div className={styles.topContainer}>
          <img className={styles.logoIcon} alt="" src="/logo1@2x.png" />
          <div className={styles.links}>
            <div className={styles.link}>HOME</div>
            <div className={styles.link1}>CONTACT US</div>
            <div className={styles.link2}>OUR PRODUCT</div>
          </div>
        </div>
      </header>
      <div className={styles.shArd73911Parent}>
        <img
          className={styles.shArd73911Icon}
          alt=""
          src="/sh-ard-7391-2@2x.png"
        />
        <div className={styles.frameChild} />
        <div className={styles.group}>
          <div className={styles.input}>
            <div className={styles.input1} />
            <div className={styles.placeholder}>ENGINE CODE (EX: P04321)</div>
          </div>
          <div className={styles.buttonPrimary}>
            <div className={styles.background} />
            <b className={styles.scanNow}>CHECK CODE</b>
          </div>
          <b className={styles.title}>
            <p className={styles.fixrDianosticMade}>
              FIXR, DIANOSTIC MADE EASY
            </p>
            <p className={styles.fixrDianosticMade}>
              START BY SCAN NOW OR LOOK UP ENGINE CODE
            </p>
          </b>
          <div className={styles.buttonPrimary1}>
            <div className={styles.background} />
            <b className={styles.scanNow}>SCAN NOW</b>
          </div>
        </div>
        <div className={styles.buttonPrimaryParent}>
          <div className={styles.buttonPrimary2}>
            <div className={styles.background} />
            <b className={styles.scanNow}>LOG IN</b>
          </div>
          <div className={styles.input2}>
            <div className={styles.input3} />
            <div className={styles.email}>EMAIL</div>
          </div>
          <div className={styles.input4}>
            <div className={styles.input3} />
            <div className={styles.password}>PASSWORD</div>
          </div>
          <b className={styles.accessYourScan}>
            ACCESS YOUR SCAN HISTORY ANYWHERE
          </b>
        </div>
      </div>
      <div className={styles.footerCenter}>
        <div className={styles.background3} />
        <div className={styles.copyright}>© 2023 FIXR, ALL RIGHTS RESERVED</div>
        <div className={styles.link3}>PRIVACY AND TERMS</div>
        <img className={styles.dividerIcon} alt="" src="/divider1.svg" />
        <div className={styles.linksRight}>
          <b className={styles.link4}>ABOUT US</b>
          <b className={styles.link5}>CONTACT US</b>
          <b className={styles.link6}>SUPPORT</b>
        </div>
        <img className={styles.logoIcon1} alt="" src="/logo@2x.png" />
      </div>
    </div>
  );
};

export default Home;
