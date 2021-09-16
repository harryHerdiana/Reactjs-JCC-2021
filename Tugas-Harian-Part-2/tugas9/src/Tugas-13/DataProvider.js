import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [daftarMahasiswa, setDaftarMahasiswa] = useState([]);
  const [fetchStatus,setFetchStatus] = useState(true)
  const [input, setInput] = useState({
    name: "",
    score: 0,
    course: "",
    currentID:null
  });
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
    if(fetchStatus){
        fetchedData()
        setFetchStatus(false)
    }
  }, [fetchStatus,setFetchStatus]);


  const handleEdit = (event) => {
    let idStudent = event.target.value;
    axios
      .get(
        `http://backendexample.sanbercloud.com/api/student-scores/${idStudent}`
      )
      .then((res) => {
        let dataMahasiswa = res.data;
        setInput({
          name: dataMahasiswa.name,
          course: dataMahasiswa.course,
          score: dataMahasiswa.score,
          currentID: dataMahasiswa.id,
        });
        setFetchStatus(true)
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
      setFetchStatus(true)
  };

  return (
    <DataContext.Provider
      value={{ daftarMahasiswa, setDaftarMahasiswa, handleEdit, handleDelete,input,setInput,fetchStatus,setFetchStatus }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
