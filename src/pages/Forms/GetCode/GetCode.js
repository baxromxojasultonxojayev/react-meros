import React from "react";
import AuthLayout from "../../../layouts/AuthLayout/AuthLayout";
import styles from "./GetCode.module.css";
import TextInput from "../../../ui-lib/TextInput/TextInput";
import Button from "../../../ui-lib/Button";
import { useHistory } from "react-router";
import NavbarHeader from "../../../components/Navbar/NavbarHeader/NavbarHeader";
import Footer from "../../../components/Footer/Footer";

const GetCode = () => {
  const history = useHistory();
  const onClick = () => {
    history.push("/change-password");
  };
  return (
    <div>
      <NavbarHeader />
      <AuthLayout>
        <form className={styles.form}>
          <h1 className={styles.title}>Parolni Yangilash</h1>
          <div className={styles.inputWrapper}>
            <label>Telefon</label>
            <TextInput placeholder="+998(...)" isBlock />
            <p className={styles.inputText}>
              Faollashtirish kodini olish uchun telefon raqamingizni kiriting{" "}
            </p>
            <label>Kod</label>
            <TextInput placeholder="Aktivatsiya kodini kiriting" />
            <p className={styles.secondText}>
              Kodni qaytadan jo'natish <span>01:59</span>
            </p>
          </div>
          <div className={styles.inputButtons}>
            <Button
              label="Davom ettirish"
              variation="full"
              onClick={onClick}
              isBlock
            />
          </div>
        </form>
      </AuthLayout>
      <Footer />
    </div>
  );
};

GetCode.propTypes = {};

export default GetCode;
