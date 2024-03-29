import axios from "axios";
import React,{useContext} from "react";
import { DataContext } from "./DataProvider";

const DataTable = () =>{
    const {daftarMahasiswa} = useContext(DataContext)
    const {handleDelete} = useContext(DataContext)
    const {handleEdit} = useContext(DataContext)
    return(
        <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Mata Kuliah</th>
            <th>Nilai</th>
            <th>Indeks Nlai</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {daftarMahasiswa.map((val, index) => {
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
        </tbody>
      </table>
    )
}

export default DataTable;