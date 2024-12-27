import React, { useState, useEffect } from 'react';

const App = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch('https://randomuser.me/api/?page=1&results=1&seed=abc')
      .then((response) => response.json())
      .then((data) => {
        setUserData(data.results[0]);
      });
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg flex">
        <img
          className="w-32 h-32 rounded-lg mr-6"
          src={userData.picture.large}
          alt="User"
        />
        <div>
          <h2 className="text-xl font-bold">
            {userData.name.first} {userData.name.last}
          </h2>
          <p className="text-gray-700">
            <strong>Gender:</strong> {userData.gender}
          </p>
          <p className="text-gray-700">
            <strong>Phone:</strong> {userData.phone}
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
