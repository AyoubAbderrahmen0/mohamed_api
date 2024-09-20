import React, { useState, useEffect } from 'react';
import UserCard from './UserCard';
import axios from 'axios';

const User = () => {
  const [user, setUser] = useState([]);

  const getUsers = () => {
    axios.get('https://jsonplaceholder.typicode.com/photos').then(response=>setUser(response.data));
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div style={{display:"flex" , flexWrap:"wrap", justifyContent:"space-between"}}>
      {user?user.map((el) => (
        <UserCard key={el.id} el={el} />
      )):null}
      </div>
  );
};

export default User;
