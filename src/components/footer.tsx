import React from "react";

const Footer = () => {
  return (
    <div style={styles.footer}>
      <div style={styles.leftdiv}>Crafted by the Tech Club</div>
      <div style={styles.rightdiv}>
        ©2025{" "}
        <a href="https://www.dpskolkata.com/" target="_blank">
          Delhi Public School Ruby Park, Kolkata
        </a>{" "}
        |{" "}
        <a href="https://www.dpskolkata.com/privacy-policy/" target="_blank">
          Privacy Policy{" "}
        </a>
        | {""}
        <a
          href="https://www.dpskolkata.com/wp-content/uploads/2025/02/Mandatory-Public-Disclosure-2025.pdf"
          target="_blank"
        >
          Mandatory Public Disclosure{" "}
        </a>
      </div>
    </div>
  );
};

const styles = {
  footer: {
    height: "40px",
    width: "100%",
    alignItems: "center",
    paddingLeft: "30px",
    paddingRight: "30px",
    paddingBottom: "6px",
    textDecoration: "none",
    display: "flex",
    justifyContent: "space-between",
    fontSize: "14.3px",
    color: "#848484",
    bottom: "0",
    marginBottom: "0",
    fontFamily: "Inter",
  },

  leftdiv: {
    left: "0",
    cursor: "default",
  },

  rightdiv: {
    right: "0",
  },
};

export default Footer;
