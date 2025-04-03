import React, { useState, useEffect } from "react";
// import { useLoaderData } from "react-router-dom";
function Github() {
    const [data, setData] = useState({});
    useEffect(() => {
      fetch("https://api.github.com/users/kantesreenithin")
        .then((res) => res.json())
        .then((data) => setData(data));
    }, []);
//   const data = useLoaderData();
  return (
    <div>
      <h1>Github</h1>
      <h1>User name: {data.name}</h1>
      <p>Bio: {data.bio}</p>
      <p>Url: {data.html_url}</p>
    </div>
  );
}

export default Github;

// export const generateGithubUserdetails = async () => {
//   const response = await fetch("https://api.github.com/users/kantesreenithin");
//   return response.json();
// };
