import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Home/Navbar/Navbar';
import Table from './Components/Home/Table/Table';
import Profile from './Components/Home/Profile/Profile';
import { useEffect, useState } from 'react';
import Footer from './Components/Home/Footer/Footer';
import img from "./Assets/85023-no-data.gif";
import axios from 'axios';

function App() {

  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [singleUser, setSingleUser] = useState({});
  const [error, setError] = useState(false);


  const handleOnClick = (id) => {
    axios.get(`https://602e7c2c4410730017c50b9d.mockapi.io/users/${id}`)
      .then(res => {
        setSingleUser(res.data);
      })
  }

  useEffect(() => {
    fetch('https://602e7c2c4410730017c50b9d.mockapi.io/users')
      .then(res => {
        if (res.status === 401 || res.status === 403 || res.status === 404) {
          return setError(true);
        }
        return res.json()
      })
      .then(data => {
        setUsers(data);
        setSingleUser(data[0]);
        setLoading(false);
      })
  }, [])

  if (error) {
    return <div className='flex justify-center items-center h-screen'>
      <img src={img} alt="" />
    </div>
  }

  if (loading) {
    return <div className='flex items-center justify-center h-screen'>
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-indigo-800">
      </div>
    </div>
  }

  return (
    <div className='custom-bg font-serif'>
      <Navbar></Navbar>
      <div className='flex justify-evenly items-start'>
        <Table handleOnClick={handleOnClick} users={users}></Table>
        {
          users?.length > 0 && <Profile singleUser={singleUser}></Profile>
        }
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
