/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../services/users/users.thunk";

const UserConatiner = () => {
  const {loading,error,data} = useSelector((store) => store.users)
  const dispatch = useDispatch()
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUsers())
  }, []);

  return (
    <>
      {loading && <h1>Cargando...</h1>}
      {!loading && error && <h1>Algo salio mal </h1>}
      {!loading && data.length > 0 && (
        <div>
          {data.map((user, i) => (
            <div key={i}>
              <h2>{user.username}</h2>
              <p>{user.name}</p>
              <button onClick={() => navigate(`/users/${user.id}`)}>
                Ver perfil completo
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default UserConatiner;
