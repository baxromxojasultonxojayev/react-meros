import React from "react";
import styles from "./RegistrationPage.module.css";
import TextInput from "../../../ui-lib/TextInput/TextInput";
import Button from "../../../ui-lib/Button";
import AuthLayout from "../../../layouts/AuthLayout/AuthLayout";
import { useHistory } from "react-router";
import NavbarHeader from "../../../components/Navbar/NavbarHeader/NavbarHeader";
import Footer from "../../../components/Footer/Footer";

const RegistrationPage = () => {
  const history = useHistory();
  const onClick = () => {
    history.push("/register-account");
  };
  return (
    <div>
      <NavbarHeader />
      <AuthLayout>
        <div>
          <form className={styles.form}>
            <h1 className={styles.title}>Ro'yxatdan o'tish</h1>
            <div className={styles.inputWrapper}>
              <label>Telefon</label>
              <TextInput placeholder="+998(...)" isBlock />
              <p className={styles.inputText}>
                Faollashtirish kodini olish uchun telefon raqamingizni kiriting{" "}
              </p>
            </div>
            <div className={styles.inputButtons}>
              <Button
                label="Faollashtirish kodini olish"
                variation="full"
                onClick={onClick}
                isBlock
              />
            </div>
          </form>
          <div className={styles.account}>
            <p>
              Akkount bormi? <a href="/login-page">Kirish</a>
            </p>
          </div>
        </div>
      </AuthLayout>
      <Footer />
    </div>
  );
};

RegistrationPage.propTypes = {};

export default RegistrationPage;
