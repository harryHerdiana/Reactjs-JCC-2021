import axios from "axios";
import React, { useState, useEffect } from "react";
import "./assets/tugas12.css";

const Tugas12 = () => {
  const [daftarMahasiswa, setDaftarMahasiswa] = useState([]);
  const [inputName, setInputName] = useState("");
  const [inputCourse, setInputCourse] = useState("");
  const [inputScore, setInputScore] = useState("");
  const [currentID, setCurrentID] = useState(null);
  useEffect(() => {
    const fetchedData = async () => {
      const result = await axios.get(
        `http://backendexample.sanbercloud.com/api/student-scores`
      );
      setDaftarMahasiswa(
        result.data.map((x) => {
          return { id: x.id, name: x.name, course: x.course, score: x.score };
        })
      );
    };
    fetchedData();
  }, []);
  const handleChangeName = (event) => {
    setInputName(event.target.value);
  };
  const handleChangeCourse = (event) => {
    setInputCourse(event.target.value);
  };
  const handleChangeScore = (event) => {
    setInputScore(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (currentID === null) {
      axios
        .post(`http://backendexample.sanbercloud.com/api/student-scores`, {
          name: inputName,
          course: inputCourse,
          score: inputScore,
        })
        .then((res) => {
          let data = res.data;
          setDaftarMahasiswa([
            ...daftarMahasiswa,
            {
              id: data.id,
              name: data.name,
              course: data.course,
              score: data.score,
            }
          ]);
        });
    } else {
      axios.put(`http://backendexample.sanbercloud.com/api/student-scores/${currentID}`,{
        name: inputName,
        course: inputCourse,
        score: inputScore,
      }).then(()=>{
        let singleStudent = daftarMahasiswa.find(el=>el.id===currentID)
        singleStudent.name = inputName
        setDaftarMahasiswa([...daftarMahasiswa])
      })
    }
    setInputName("");
    setInputScore("");
    setInputCourse("");
    setCurrentID(null)
  };

  const handleEdit = (event) => {
    let idStudent = event.target.value;
    axios
      .get(
        `http://backendexample.sanbercloud.com/api/student-scores/${idStudent}`
      )
      .then((res) => {
        let dataMahasiswa = res.data;
        setInputName(dataMahasiswa.name);
        setInputCourse(dataMahasiswa.course);
        setInputScore(dataMahasiswa.score);
        setCurrentID(dataMahasiswa.id);
      });
  };
  const handleDelete = (event) => {
    let idStudent = parseInt(event.target.value);
    axios
      .delete(
        `http://backendexample.sanbercloud.com/api/student-scores/${idStudent}`
      )
      .then(() => {
        let newDaftarMahasiswa = daftarMahasiswa.filter((el) => {
          return el.id !== idStudent;
        });
        setDaftarMahasiswa(newDaftarMahasiswa);
      });
  };

  return (
    <div className="AppContainer">
      <h1>Daftar Nilai Mahasiswa</h1>
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
                    onClick={handleDelete}
                    value={val.id}
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
      <h1>Form Nilai Mahasiswa</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-item">
          <label>Nama:</label>
          <input
            placeholder="masukkan nama mahasiswa"
            type="text"
            value={inputName}
            onChange={handleChangeName}
          />
        </div>
        <div className="form-item">
          <label>Mata Kuliah:</label>
          <input
            placeholder="masukkan nama mata kuliah"
            type="text"
            value={inputCourse}
            onChange={handleChangeCourse}
          />
        </div>
        <div className="form-item">
          <label>Nilai:</label>
          <input
            type="number"
            value={inputScore}
            onChange={handleChangeScore}
            placeholder="masukkan nilai mahasiswa"
            max={100}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Tugas12;
