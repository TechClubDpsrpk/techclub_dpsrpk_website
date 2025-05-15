import React from "react";
import { text } from "stream/consumers";
import VectorImage from "@images/Vector.png";

const Navbar: React.FC = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo as React.CSSProperties}>
        <img
          src={VectorImage.src}
          alt="Logo"
          style={{ height: "100%", width: "auto" }}
        />
      </div>
      <button style={styles.navButton}>Home</button>
      <button style={styles.navButton}>Core</button>
      <button style={styles.navButton}>Inter</button>
      <button style={styles.navButton}>Gallery</button>
      <button style={styles.navButton}>Journey</button>
      <button style={styles.navButton}>About Us</button>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 20px",
    gap: "3rem",
    backgroundColor: "#000",
    color: "#fff",
    height: "5rem",
  },

  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    position: "absolute",
    top: "1.2rem",
    left: "2rem",
    textDecoration: "none",
    color: "#fff",
  },

  navButton: {
    background: "none",
    border: "none",
    color: "#fff",
    fontFamily: "Inter",
    weight: "700",
    fontSize: "1.5rem",
    cursor: "pointer",
    padding: "5px 10px",
  },
};

export default Navbar;
