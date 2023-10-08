import { FunctionComponent } from "react";
import styles from "./Contact.module.css";

const Contact: FunctionComponent = () => {
  return (
    <div className={styles.contact}>
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
      <div className={styles.featureListLeft}>
        <img
          className={styles.shArd73912Icon}
          alt=""
          src="/sh-ard-7391-2@2x.png"
        />
        <div className={styles.featureListLeftChild} />
        <b className={styles.title}>SUPPORT</b>
        <div className={styles.content}>
          <b className={styles.title1}>SALES</b>
          <div className={styles.list}>
            <div className={styles.listItem}>
              <b className={styles.listItemText}>SALES@FIXR.COM</b>
            </div>
            <div className={styles.listItem1}>
              <b className={styles.listItemText}>+1 (123)456-0987</b>
            </div>
          </div>
        </div>
        <div className={styles.content1}>
          <b className={styles.title2}>
            <span className={styles.titleTxt}>
              <p className={styles.contactUs}>CONTACT US</p>
              <p className={styles.contactUs}>
                AT FIXR, WE VALUE YOUR FEEDBACK AND QUESTIONS, REACH OUT TO US
                AT:
              </p>
            </span>
          </b>
          <div className={styles.list1}>
            <div className={styles.listItem}>
              <b className={styles.listItemText}>SUPPORT@FIXR.COM</b>
            </div>
            <div className={styles.listItem1}>
              <b className={styles.listItemText}>+1 (123)456-7890</b>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerCenter}>
        <div className={styles.background} />
        <div className={styles.copyright}>© 2023 FIXR, ALL RIGHTS RESERVED</div>
        <div className={styles.link3}>PRIVACY AND TERMS</div>
        <img className={styles.dividerIcon} alt="" src="/divider.svg" />
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

export default Contact;
