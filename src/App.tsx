import { TextField, Box, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate} from "react-router-dom";

function App() {
  const [name, setName] = useState<string>("");
  const [phonenumber, setPhonenumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [valid, setValid] = useState<boolean>(false);
  const [errmsg, setErrmsg] = useState<string>("");

  const navigate = useNavigate();

  const handleSubmit = ()=>{
    if (name==""||phonenumber==""||email=="")
    {
      setValid(false);
      setErrmsg("details required")
    }
    else if (!/^\d{10}$/.test(phonenumber))
    {
      setValid(false);
      setErrmsg("invalid phone number")
    }
    else if (!/\S+@\S+\.\S+/.test(email))
    {
      setValid(false);
      setErrmsg("invalid email")
    }
    else  
      setValid(true);
    localStorage.setItem('name', JSON.stringify(name));
    localStorage.setItem('email', JSON.stringify(email));
    localStorage.setItem('phonenumber', JSON.stringify(phonenumber));
    navigate("/page2");
  }

  const handlename = (e : React.ChangeEvent<HTMLInputElement>) =>{
    setName(e.target.value);
  }

  const handlephonenumber = (e : React.ChangeEvent<HTMLInputElement>) =>{
    setPhonenumber(e.target.value);
  }

  const handleemail = (e : React.ChangeEvent<HTMLInputElement>) =>{
    setEmail(e.target.value);
  }
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-4"> Register </h1>
        <Box sx={{padding: 6, borderRadius: 10, boxShadow: 10, width: 480}}>

       
        <TextField
          id="name"
          label="Enter your name"
          variant="outlined"
          fullWidth
          className="mb-4"
          value={name}
          onChange={handlename}
          sx={{marginBottom: 2}}

        />
        <TextField
          id="phonenumber"
          label="Enter your phone number"
          variant="outlined"
          fullWidth
          className="mb-4"
          value={phonenumber}
          onChange={handlephonenumber}
          sx={{marginBottom: 2}}

        />
        <TextField
          id="email"
          label="Enter your email"
          variant="outlined"
          fullWidth
          className="mb-4"
          value={email}
          onChange={handleemail}
          sx={{marginBottom: 2}}
        />
        <Button variant="contained" onClick={handleSubmit} fullWidth>
          Submit
        </Button>
        </Box>
        <div className="text-3xl font-bold mt-4">{valid?"Details Submitted Successfully":errmsg}</div>
    </div>
  );
}

export default App;
