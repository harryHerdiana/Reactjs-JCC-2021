import React from "react"
import { NilaiMahasiswaProvider } from "./nilaiMahasiswaContext"
import NilaiMahasiswaForm from "./nilaiMahasiswaForm"
import NilaiMahasiswaList from "./nilaiMahasiswaList"
import "../assets/tugas13.css";

const NilaiMahasiswa = () => {
    return(
        <NilaiMahasiswaProvider>
            <NilaiMahasiswaList/>
            <NilaiMahasiswaForm/>
        </NilaiMahasiswaProvider>
    )
}

export default NilaiMahasiswa