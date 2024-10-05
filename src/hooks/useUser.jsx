/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchUserById } from "../services/users/users.thunk";

const useUser = () => {
  const { id } = useParams();
  const { data, loading, error } = useSelector((store) => store.user)
  const dispatch = useDispatch()
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUserById(id))
  }, [id])
  

  return {
    data,
    loading,
    error,
    navigate
  };
};

export default useUser;
