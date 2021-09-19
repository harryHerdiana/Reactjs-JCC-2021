import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { NilaiMahasiswaContext } from "../Context/nilaiMahasiswaContext";
import { Button, Typography, Table, Space } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
const NilaiMahasiswaList = () => {
  let history = useHistory();
  const { Title } = Typography;
  const {
    input,
    setInput,
    dataMahasiswa,
    functions,
    fetchStatus,
    setFetchStatus,
  } = useContext(NilaiMahasiswaContext);
  const { fetchData, getScore, functionDelete, functionEdit } = functions;

  useEffect(() => {
    if (fetchStatus === false) {
      fetchData();
      setFetchStatus(true);
    }
  }, [fetchData, fetchStatus, setFetchStatus]);

  const handleDelete = (event) => {
    let idMahasiswa = parseInt(event.target.value);

    functionDelete(idMahasiswa);
  };

  const handleEdit = (event) => {
    console.log(event.target.value);
    let idMahasiswa = parseInt(event.target.value);
    history.push(`/tugas14/edit/${idMahasiswa}`);
    // functionEdit(idMahasiswa)
  };

  const handleCreate = () => {
    history.push("/tugas14/create");
    setInput({
      nama: "",
      course: "",
      score: 0,
    });
  };

  const dataTable = dataMahasiswa
  console.log({dataTable});
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Mata Kuliah",
      dataIndex: "course",
      key: "course",
    },
    {
      title: "Nilai",
      dataIndex: "score",
      key: "score",
    },
    {
      title: "Index",
      dataIndex: "index",
      key: "index",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <>
          <Button
            type="primary"
            onClick={handleEdit}
            className="inner-button edit-button"
          >
            <EditOutlined />
          </Button>
          <Button
            type="default"
            danger
            onClick={handleDelete}
            className="inner-button delete-button"
          >
            <DeleteOutlined />
          </Button>
        </>
      ),
    },
  ];
  return (
    <div>
      <br />
      <Title style={{ textAlign: "left", marginLeft: "5rem" }}>
        Daftar Nilai Mahasiswa
      </Title>
      <Button
        type="primary"
        onClick={handleCreate}
        style={{ width: "15rem", marginLeft: "5rem" }}
      >
        Tambah Data Nilai Mahasiswa
      </Button>
      <Table dataSource={dataTable} columns={columns} />
      {/* <table id="customers">
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
            return (
              <tr key={index}>
                <th>{index + 1}</th>
                <th>{val.name}</th>
                <th>{val.course}</th>
                <th>{val.score}</th>
                <th>{getScore(val.score)}</th>
                <th>
                  <Button
                    type="primary"
                    onClick={handleEdit}
                    value={val.id}
                    className="inner-button edit-button"
                  >
                    <EditOutlined />
                  </Button>
                  <Button
                    type="default"
                    danger
                    value={val.id}
                    onClick={handleDelete}
                    className="inner-button delete-button"
                  >
                    <DeleteOutlined />
                  </Button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table> */}
      <br />
      <br />
    </div>
  );
};

export default NilaiMahasiswaList;
