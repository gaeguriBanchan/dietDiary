import { useEffect } from 'react';
import { useState } from 'react';

const useInput = (initialForm) => {
  const [data, setData] = useState(initialForm);

  const userData = (e) => {
    setData(e.target.value);
  };
  useEffect(() => {}, [data]);


  






  return [data, userData];

};

export default useInput;
