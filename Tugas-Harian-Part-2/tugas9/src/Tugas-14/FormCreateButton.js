import React from "react";
import {Link} from "react-router-dom"

const FormCreateButton = ()=>{
    return(
        <Link to="/Data-Form">
        <button style={{ float: "left", marginLeft: "100px" }}>
          Buat Daftar Mahasiswa
        </button>
      </Link>
    )
}

export default FormCreateButton;