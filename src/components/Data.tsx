import { useEffect, useState } from "react"
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const Data = () => {

  interface UserData  { userId: Number, id: Number, title: string, body: string }

  useEffect(()=>{ fetchData(); },[]);

  const [rows, setRows] = useState<UserData[]>([]);

  const fetchData =async () => {
    const url = "https://jsonplaceholder.typicode.com/posts"
    try{
      const response = await fetch(url);
      const ans = await response.json();
      setRows(ans);
    }
    catch(err){
      console.log(err)
    }
  }

  const columns: GridColDef[] = [
    { field: 'userId', headerName: 'User Id', width: 90 },
    { field: 'id', headerName: 'Id', width: 90 },
    { field: 'title', headerName: 'Title', width: 350 },
    { field: 'body', headerName: 'Body', type: 'number', width: 780,  headerAlign: "left", align: "left" },
  ];


  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
      />
    </Box>
  )
}

export default Data