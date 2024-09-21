import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUserById } from "../services/users.service";

const useUser = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      setLoading(true);
      try {
        const response = await getUserById(id);
        setUser(response);
      } catch (error) {
        setError(true);
        setUser(null);
        console.log(error)
      } finally {
        setLoading(false);
      }
    };

    getUser();

    return () => {
      setLoading(false);
      setError(false);
      setUser(null);
    };
  }, [id]);

  return {
    user,
    loading,
    error,
    navigate
  };
};

export default useUser;
