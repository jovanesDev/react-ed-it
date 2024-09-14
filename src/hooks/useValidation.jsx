import { useEffect, useState } from "react";

const useValidation = ({ data }) => {
  const [error, setError] = useState(false);

  const handleValidate = () => {
    const isValid = Object.values(data).every((value) => value);
    if (!isValid) {
      setError(true);
      return;
    }
    setError(false);
  };

  useEffect(() => {
    handleValidate();
  }, [data]);

  return {
    error,
  };
};

export default useValidation;
