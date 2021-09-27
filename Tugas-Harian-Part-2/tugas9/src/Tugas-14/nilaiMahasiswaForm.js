import React, { useContext, useEffect } from "react"
import { useParams,useHistory } from "react-router"
import { NilaiMahasiswaContext } from "../Context/nilaiMahasiswaContext"
import { Link } from "react-router-dom"

const NilaiMahasiswaForm = () => {
    const {input, setInput, currentId, setCurrentId, functions } = useContext(NilaiMahasiswaContext)
    const { functionSubmit, functionUpdate,fetchById  } = functions
    let {Value} = useParams()
    let history = useHistory()

    useEffect(() => {
        if( Value !== undefined ){
            fetchById(Value)
        }
    },[])


    const handleChange = (event) => {
        let typeOfValue = event.target.value
        let name = event.target.name

        setInput({ ...input, [name]: typeOfValue })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(input)

        if (currentId === -1) {
            functionSubmit()
        } else {
            functionUpdate(currentId)
        }

        setInput({
            nama: "",
            course: "",
            score: 0
        })
        setCurrentId(-1)
    }

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Form Daftar Nilai Mahasiswa</h1>
            <br />
            <form method="post" onSubmit={handleSubmit} style={{ width: "50%", border: "1px solid #aaa", margin: "auto", padding: "50px", marginBottom: "20px" }}>
                <strong style={{ width: "300px", display: "inline-block" }}>Nama : </strong>
                <input style={{ float: "right" }} onChange={handleChange} value={input.nama} name="nama" type="text" required />
                <br />
                <br />
                <strong style={{ width: "300px", display: "inline-block" }}>Mata Kuliah : </strong>
                <input style={{ float: "right" }} onChange={handleChange} value={input.course} name="course" type="text" required />
                <br />
                <br />
                <strong style={{ width: "300px", display: "inline-block" }}>Nilai : </strong>
                <input style={{ float: "right" }} onChange={handleChange} value={input.score} name="score" type="number" required min={0} max={100} />
                <br />
                <br />
                <input style={{ float: "right" }} type="submit" />
            </form>
            <Link style={{marginLeft:"55vh"}} to="/tugas14">Kembali Ke Tabel</Link>
        </div>
    )
}

export default NilaiMahasiswaForm