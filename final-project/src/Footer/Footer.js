import React from "react";
import "../Assets/css/styles.css";
import Typography from "@mui/material/Typography";

function Footer() {
  return (
    <section className="footer">
      <div className="footer-container">
        <Typography sx={{marginTop:"10px"}} variant="h6">JabarCodingCamp 2021</Typography>
      </div>
    </section>
  );
}

export default Footer;
