import React from "react";
import { useTranslation } from "react-i18next";
import Button from "../../../ui-lib/Button";
import { Location } from "../../../ui-lib/icons";
import { NavLink } from "react-router-dom";
import styles from "./NavbarHeader.module.css";

const TopHeader = () => {
  const { t, i18n } = useTranslation();

  const click = () => {
    // console.log('salom');
  };
  console.log(t("top_list", { returnObjects: true }));
  return (
    <div className={styles.topHeader}>
      <div className={styles.buttonLang}>
        <Button label="Русский" onClick={() => i18n.changeLanguage("ru")} />
        <Button label="O'zbekcha" onClick={click} />
        <Button label="English" onClick={click} />
      </div>
      <ul className={styles.topHeaderList}>
        <li>
          <a href="/">
            <Location className={styles.location} /> {t("top_list.tashkent")}
          </a>
        </li>
        <li>
          <a href="/"> {t("top_list.discount")}</a>
        </li>
        <li>
          <a href="/"> {t("top_list.deliver")}</a>
        </li>
        <li>
          <a href="/"> {t("top_list.help")}</a>
        </li>
        <li>
          <a href="/"> {t("top_list.contact")}</a>
        </li>
      </ul>
    </div>
  );
};

export default TopHeader;
