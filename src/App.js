import React, { useState, useEffect } from "react";

const App = () => {
  const [hasError, setErrors] = useState(false);
  const [planets, setPlanets] = useState({});

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://127.0.0.1:8000/api/v1/query/tourist/place/", []);
      res
        .json()
        .then(res => setPlanets(res))
        .catch(err => setErrors(err));
    }

    fetchData();
  }, []);

  return (
    <div>
      <span>{JSON.stringify(planets)}</span>
      <hr />
      <span>Has error: {JSON.stringify(hasError)}</span>
    </div>
  );
};
export default App;
