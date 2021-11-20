import React from "react";
import Router from "./Router";
import img from './box.jpg'

const app = () => {
  return (
    <div>
      {/* <TopHeader /> */}
      <Router />
      {/* <NavbarList /> */}
      {/* <ItemCard
        main={{
          titleOne: "Мусульманские сувениры",
          titleTwo: "Мусульманские счетчики",
        }}
        data={[{ valueOne: "120 000 сум", valueTwo: "220 000 сум" }]}
        src={img}
      /> */}
      {/* <img src={img} /> */}
    </div>
  );
};

export default app;
