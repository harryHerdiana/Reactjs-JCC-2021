import React, { useContext, useEffect } from "react"
import { useHistory} from "react-router"
import { NilaiMahasiswaContext } from "../Context/nilaiMahasiswaContext"


const NilaiMahasiswaList = () => {
    let history = useHistory()


    const { input, setInput, dataMahasiswa, functions, fetchStatus, setFetchStatus } = useContext(NilaiMahasiswaContext)
    const { fetchData, getScore,  functionDelete, functionEdit } = functions

    useEffect(() => {

        if (fetchStatus === false) {
            fetchData()
            setFetchStatus(true)
        }

    }, [fetchData, fetchStatus, setFetchStatus])



    const handleDelete = (event) => {
        let idMahasiswa = parseInt(event.target.value)

        functionDelete(idMahasiswa)
    }

    const handleEdit = (event) => {
        let idMahasiswa = parseInt(event.target.value)
        history.push(`/tugas14/edit/${idMahasiswa}`)
        // functionEdit(idMahasiswa)
    }

    const handleCreate = () => {
        history.push('/tugas14/create')
        setInput({
            nama: "",
            course: "",
            score: 0
        })
    }

    return (
        <div>
            <br />
            <h1 style={{ textAlign: "center" }}>Daftar Nilai Mahasiswa</h1>
            <button onClick={handleCreate} style={{width:"20%",marginLeft:"5rem"}}>Tambah Data Nilai Mahasiswa</button>
            <table id="customers">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Mata Kuliah</th>
                        <th>Nilai</th>
                        <th>Index Nilai</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                          {dataMahasiswa.map((val, index) => {
            let scoreIndex;
            if (val.score >= 80) {
              scoreIndex = "A";
            } else if (val.score >= 70) {
              scoreIndex = "B";
            } else if (val.score >= 60) {
              scoreIndex = "C";
            } else if (val.score >= 50) {
              scoreIndex = "D";
            } else {
              scoreIndex = "E";
            }
            return (
              <tr key={index}>
                <th>{index+1}</th>
                <th>{val.name}</th>
                <th>{val.course}</th>
                <th>{val.score}</th>
                <th>{scoreIndex}</th>
                <th>
                  <button
                    onClick={handleEdit}
                    value={val.id}
                    className="inner-button edit-button"
                  >
                    Edit
                  </button>
                  <button
                    value={val.id}
                    onClick={handleDelete}
                    className="inner-button delete-button"
                  >
                    Delete
                  </button>
                </th>
              </tr>
            );
          })}
                    {/* {dataMahasiswa !== null && (
                        <div>
                            {dataMahasiswa.map((e, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{e.name}</td>
                                        <td>{e.course}</td>
                                        <td>{e.score}</td>
                                        <td>{getScore(e.score)}</td>
                                        <td>
                                            <button onClick={handleEdit} value={e.id}>edit</button>
                                            <button onClick={handleDelete} value={e.id} style={{ marginLeft: "10px" }}>delete</button>
                                        </td>
                                    </tr>
                                )
                            })} 
                        </div>
                    )} */}
                </tbody>
            </table>
            <br />
            <br />
            

        </div>
    )
}

export default NilaiMahasiswaList