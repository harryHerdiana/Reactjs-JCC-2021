import React from "react";
import DataForm from "./DataForm";
import { DataProvider } from "./DataProvider";
import DataTable from "./DataTable";

const Data = () => {
  return (
    <DataProvider>
      <h1>Daftar Nilai Mahasiswa</h1>
      <DataTable />
    </DataProvider>
  );
};
export default Data;
