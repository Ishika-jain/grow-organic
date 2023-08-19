import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const Data = () => {
  // Interface to describe the shape of user data
  interface UserData {
    userId: number;
    id: number;
    title: string;
    body: string;
  }

  // Fetch data when component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // State to hold the fetched rows of user data
  const [rows, setRows] = useState<UserData[]>([]);

  // Function to fetch data from an API
  const fetchData = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    try {
      const response = await fetch(url);
      const ans: UserData[] = await response.json();
      setRows(ans);
    } catch (err) {
      console.log(err);
    }
  };

  // Define columns for the data grid
  const columns: GridColDef[] = [
    { field: "userId", headerName: "User Id", width: 90 },
    { field: "id", headerName: "Id", width: 90 },
    { field: "title", headerName: "Title", width: 350 },
    {
      field: "body",
      headerName: "Body",
      type: "number",
      width: 780,
      headerAlign: "left",
      align: "left",
    },
  ];

  // Render the DataGrid component with fetched data and columns
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} checkboxSelection />
    </Box>
  );
};

export default Data;
