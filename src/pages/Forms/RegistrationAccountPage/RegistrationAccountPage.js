import React from "react";
import AuthLayout from "../../../layouts/AuthLayout/AuthLayout";
import PasswordInput from "../../../ui-lib/PasswordInput/PasswordInput";
import TextInput from "../../../ui-lib/TextInput/TextInput";
import Button from "../../../ui-lib/Button";
import Checkbox from "../../../ui-lib/Checkbox/Checkbox";
import EmailInput from "../../../ui-lib/EmailInput/EmailInput";
import styles from "./RegistrationAccountPage.module.css";
import NavbarHeader from "../../../components/Navbar/NavbarHeader/NavbarHeader";
import Footer from "../../../components/Footer/Footer";
import { useHistory } from "react-router";

const RegistrationAccountPage = () => {
  const history = useHistory()
  const onCLick = () =>{
    history.push('/')
  }
  return (
    <div>
      <NavbarHeader />
      <AuthLayout>
        <div>
          <form className={styles.form}>
            <h1 className={styles.title}>Ro'yxatdan o'tish</h1>
            <div className={styles.inputWrapper}>
              <div className={styles.textInput}>
                <label>Telefon</label>
                <TextInput placeholder="+998(...)" isBlock />
              </div>
              <div className={styles.emailInput}>
                <label>E-mail</label>
                <EmailInput placeholder="Email" isBlock />
              </div>
              <div className={styles.passwordFirstInput}>
                <label>Parol kiriting</label>
                <PasswordInput placeholder="Parolni kiriting" isBlock />
              </div>
              <div className={styles.passwordInput}>
                <label>Parolni takroran kiriting</label>
                <PasswordInput
                  placeholder="Parolni takroran kiriting"
                  isBlock
                />
              </div>
            </div>
            <div className={styles.checkbox}>
              <Checkbox label="Men shaxsiy ma'lumotlarimni qayta ishlashga rozilik beraman." />
            </div>
            <div className={styles.inputButtons}>
              <Button label="Ro'yxatdan o'tish" onClick={onCLick} variation="full" isBlock />
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

export default RegistrationAccountPage;
