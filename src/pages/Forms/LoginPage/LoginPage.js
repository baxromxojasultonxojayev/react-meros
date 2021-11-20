import React from "react";
import AuthLayout from "../../../layouts/AuthLayout/AuthLayout";
import styles from "./LoginPage.module.css";
import PasswordInput from "../../../ui-lib/PasswordInput/PasswordInput";
import TextInput from "../../../ui-lib/TextInput/TextInput";
import Button from "../../../ui-lib/Button";
import { useHistory } from "react-router-dom";
import Checkbox from "../../../ui-lib/Checkbox/Checkbox";
import { useState } from "react";
import NavbarHeader from "../../../components/Navbar/NavbarHeader/NavbarHeader";
import Footer from "../../../components/Footer/Footer";

const LoginPage = () => {
  const history = useHistory();

  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [disable, setDisable] = useState(false);
  const isSubmitButton = number.length === 0 || password.length === 0;

  const onClick = () => {
    history.push("/");
  };

  const handleChange = () => {
    history.push("/registration");
  };
  
  return (
    <div>
      <NavbarHeader />
      <AuthLayout>
      <form className={styles.form}>
        <h1 className={styles.title}>Ruxsatnoma</h1>
        <div className={styles.inputWrapper}>
          <label>Telefon</label>
          <TextInput
            value={number}
            placeholder="+998(...)"
            onInput={(e) => {
              if (number.length !== 0 || password.length !== 0) {
                setDisable(true);
              }
              setNumber(e.target.value);
            }}
            isBlock
          />
          <label>Parol</label>
          <PasswordInput
            value={password}
            placeholder="Parol"
            isBlock
            onInput={(e) => {
              if (number.length !== 0 || password.length !== 0) {
                setDisable(true);
              }
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className={styles.checkbox}>
          <Checkbox label="Parolni saqlash" />
        </div>
        <div className={styles.inputButtons}>
          <Button
            label="Kirish"
            variation="full"
            onClick={onClick}
            isDisable={disable}
            isBlock
          /><p></p>
          <Button
            label="Ro'yxatdan o'tish"
            variation="outline"
            onClick={handleChange}
            isBlock
          />
        </div>
        <div className={styles.forgotPassword}>
          <a href="/forgot-password">Parolni unutdingizmi</a>
        </div>
      </form>
    </AuthLayout>
    <Footer />

    </div>
    );
};

LoginPage.propTypes = {};

export default LoginPage;
