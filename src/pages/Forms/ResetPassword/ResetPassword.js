import React from "react";
import AuthLayout from "../../../layouts/AuthLayout/AuthLayout";
import TextInput from "../../../ui-lib/TextInput/TextInput";
import Button from "../../../ui-lib/Button";
import styles from "./ResetPassword.module.css";
import { useHistory } from "react-router";
import NavbarHeader from "../../../components/Navbar/NavbarHeader/NavbarHeader";
import Footer from "../../../components/Footer/Footer";

const ResetPassword = () => {
  const history = useHistory();
  const onClick = () => {
    history.push("/getting-code");
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
      </AuthLayout>
      <Footer/>
    </div>
  );
};

ResetPassword.propTypes = {};

export default ResetPassword;
