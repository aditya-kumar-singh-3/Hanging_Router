import React from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
    const params = useParams();
  return (
    <div>
      Hi this is {params.username}
      <h1>TESTING</h1>
    </div>
  );
}

export default User;
