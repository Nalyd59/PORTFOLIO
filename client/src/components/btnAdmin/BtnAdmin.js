import * as React from "react";

const BtnAdmin = () => {
  let btn = ""
  if (localStorage.getItem('user')) {
    btn = "Deconnexion"
  }else{
    btn = "connect"
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          marginTop: "10px"
        }}
      >
        <a
          type="button"
          className="btn btn-secondary"
          href='/connexion'
        >
          {btn}
        </a>
      </div>
    </>
  );
};

export default BtnAdmin;
