import { TextField, Button } from "@mui/material";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = ()=>{
    console.log(name);
    console.log(phonenumber);
    console.log(email);
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-red-300">
      <h1 className="text-3xl font-bold text-red-600 mb-4"> Form </h1>

      <div className="bg-pinkish p-6 rounded-lg shadow-md w-80">
        <TextField
          id="name"
          label="Enter your name"
          variant="outlined"
          fullWidth
          className="mb-4"
          value={name}
          onChange={(e)=>{setName(e.target.value)}}
          sx={{marginBottom: 2}}

        />
        <TextField
          id="phonenumber"
          label="Enter your phone number"
          variant="outlined"
          fullWidth
          className="mb-4"
          value={phonenumber}
          onChange={(e)=>{setPhonenumber(e.target.value)}}
          sx={{marginBottom: 2}}

        />
        <TextField
          id="email"
          label="Enter your email"
          variant="outlined"
          fullWidth
          className="mb-4"
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}}
          sx={{marginBottom: 2}}
        />
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
}

export default App;
