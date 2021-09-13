import React, { useState } from "react";
import "./assets/tugas11.css";

const Tugas11 = () => {
  const [namaBubuahan, setNamaBubuahan] = useState([
    { nama: "Nanas", hargaTotal: 100000, beratTotal: 4000 },
    { nama: "Manggis", hargaTotal: 350000, beratTotal: 10000 },
    { nama: "Nangka", hargaTotal: 90000, beratTotal: 2000 },
    { nama: "Durian", hargaTotal: 400000, beratTotal: 5000 },
    { nama: "Strawberry", hargaTotal: 120000, beratTotal: 6000 },
  ]);
  const [inputName, setInputName] = useState("");
  const [inputHarga, setInputHarga] = useState("");
  const [inputBerat, setInputBerat] = useState("");
  const [currentIndex,setCurrentIndex] = useState(-1)

  const handleChangeName = (event) => {
    setInputName(event.target.value);
  };
  const handleChangeHarga = (event) => {
    setInputHarga(event.target.value);
  };
  const handleChangeBerat = (event) => {
    setInputBerat(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let newData = namaBubuahan
    if(currentIndex ===-1){
        newData= [...namaBubuahan,
            { nama: inputName, hargaTotal: inputHarga, beratTotal: inputBerat }]
    } else{
        newData[currentIndex] = { nama: inputName, hargaTotal: inputHarga, beratTotal: inputBerat }
    }
    setNamaBubuahan(newData)
    setInputName("");
    setInputBerat("");
    setInputHarga("");
  };

  const handleEdit = (event)=>{
    let index = parseInt(event.target.value)
    let editValue = namaBubuahan[index]
    setInputName(editValue.nama)
    setInputHarga(editValue.hargaTotal)
    setInputBerat(editValue.beratTotal)
    setCurrentIndex(event.target.value)
  }
  const handleDelete = (event)=>{
    let index = parseInt(event.target.value)
    let deletedItem = namaBubuahan[index]
    let newData = namaBubuahan.filter((e)=>{return e!==deletedItem})
    setNamaBubuahan(newData)
  }

  return (
    <div className="AppContainer">
      <h1>Daftar Harga Buah</h1>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Harga Total</th>
            <th>Berat Total</th>
            <th>Harga per kg</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {namaBubuahan.map((val, index) => {
            return (
              <tr>
                <th>{index + 1}</th>
                <th>{val.nama}</th>
                <th>Rp. {val.hargaTotal}</th>
                <th>{val.beratTotal / 1000} Kg</th>
                <th>Rp. {(val.hargaTotal / val.beratTotal) * 1000}</th>
                <th>
                  <button onClick={handleEdit} value={index} className="inner-button edit-button">Edit</button>
                  <button onClick={handleDelete} value={index} className="inner-button delete-button">Delete</button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h1>Form Daftar Harga Buah</h1>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-item">
          <label>Nama:</label>
          <input placeholder="masukkan nama buah" type="text" value={inputName} onChange={handleChangeName} />
        </div>
        <div className="form-item">
          <label>Harga Total:</label>
          <input placeholder="masukkan harga buah keseluruhan" type="text" value={inputHarga} onChange={handleChangeHarga} />
        </div>
        <div className="form-item">
          <label>Berat Total (dalam gram):</label>
          <input
            type="number"
            value={inputBerat}
            onChange={handleChangeBerat}
            min={2000}
            placeholder="masukkan berat buah keseluruhan"
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Tugas11;
