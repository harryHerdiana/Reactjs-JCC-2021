import React, { useContext, useEffect } from "react";
import { DataContext } from "./DataProvider";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";

const DataForm = () => {
  let history = useHistory();
  const {
    setDaftarMahasiswa,
    daftarMahasiswa,
    input,
    setInput,
    setFetchStatus,
    fetchStatus,
  } = useContext(DataContext);
  useEffect(() => {
    const fetchedData = async () => {
      const result = await axios.get(
        `http://backendexample.sanbercloud.com/api/student-scores`
      );
      setDaftarMahasiswa(
        result.data.map((x) => {
          return { name: x.name, course: x.course, score: x.score, id: x.id };
        })
      );
    };
    fetchedData();
    if (fetchStatus === true) {
      setFetchStatus(false);
    }
  }, [fetchStatus, setFetchStatus]);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.currentID === null) {
      axios
        .post(`http://backendexample.sanbercloud.com/api/student-scores`, {
          name: input.name,
          course: input.course,
          score: input.score,
        })
        .then((res) => {
          setFetchStatus(true);
          let data = res.data;
          setDaftarMahasiswa([
            ...daftarMahasiswa,
            {
              id: data.id,
              name: data.name,
              course: data.course,
              score: data.score,
            },
          ]);
        });
    } else {
      axios
        .put(
          `http://backendexample.sanbercloud.com/api/student-scores/${input.currentID}`,
          {
            name: input.name,
            course: input.course,
            score: input.score,
          }
        )
        .then(() => {
          setFetchStatus(true);
          let singleStudent = daftarMahasiswa.find(
            (el) => el.id === input.currentID
          );
          singleStudent.name = input.name;
          setDaftarMahasiswa([...daftarMahasiswa]);
        });
    }
    setInput({
      name: "",
      score: 0,
      course: "",
      currentID: null,
    });
    history.push("/Tugas-14");
    setFetchStatus(false)
  };

  const handleChange = (event) => {
    let typeOfValue = event.target.value;
    let name = event.target.name;
    let course = event.target.course;
    let score = event.target.course;
    setInput({
      ...input,
      [name]: typeOfValue,
      [course]: typeOfValue,
      [score]: typeOfValue,
    });
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Form Nilai Mahasiswa</h1>
      <form method="post" onSubmit={handleSubmit} className="form-container">
        <div className="form-item">
          <label>Nama:</label>
          <input
            name="name"
            placeholder="masukkan nama mahasiswa"
            type="text"
            value={input.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-item">
          <label>Mata Kuliah:</label>
          <input
            name="course"
            placeholder="masukkan nama mata kuliah"
            type="text"
            value={input.course}
            onChange={handleChange}
          />
        </div>
        <div className="form-item">
          <label>Nilai:</label>
          <input
            name="score"
            type="number"
            value={input.score}
            onChange={handleChange}
            placeholder="masukkan nilai mahasiswa"
            max={100}
            min={0}
          />
        </div>
        
        <button style={{marginRight:"10rem"}}>Submit</button>
        <Link id="link" to="/Tugas-14">Kembali Ke Tabel</Link>
      </form>
    </div>
  );
};
export default DataForm;
