import React from "react";
import AuthLayout from "../../../layouts/AuthLayout/AuthLayout";
import TextInput from "../../../ui-lib/TextInput/TextInput";
import styles from "./ChangePassword.module.css";
import Button from "../../../ui-lib/Button";
import { useHistory } from "react-router";
import NavbarHeader from "../../../components/Navbar/NavbarHeader/NavbarHeader";
import Footer from "../../../components/Footer/Footer";

const ChangePassword = () => {
  const history = useHistory();
  const onClick = () => {
    history.push("/login-page");
  };
  return (
    <div>
      <NavbarHeader />
      <AuthLayout>
        <form className={styles.form}>
          <h1 className={styles.title}>Parolni Yangilash</h1>
          <div className={styles.inputWrapper}>
            <label>Parolni o'zgartirish</label>
            <TextInput placeholder="Yangi parol" isBlock />
            <p className={styles.inputText}>
              Faollashtirish kodini olish uchun telefon raqamingizni kiriting{" "}
            </p>
            <label>Takroran kiriting</label>
            <TextInput placeholder="Yangi parol" />
          </div>
          <div className={styles.inputButtons}>
            <Button
              label="Parolni O'zgartirish"
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

ChangePassword.propTypes = {};

export default ChangePassword;
