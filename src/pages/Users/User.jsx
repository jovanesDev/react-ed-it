import useUser from "../../hooks/useUser";

const User = () => {
  const { loading, user, error, navigate } = useUser();
  return (
    <div>
      <button onClick={() => navigate(-1)}>Volver</button>
      {loading && <h1>Cargando...</h1>}
      {!loading && error && <h1>Algo salio mal !</h1>}
      {user && !loading && !error && (
        <div>
          <h1>{user.name}</h1>
          <h4>{user.username}</h4>
          <p>{user.email}</p>
        </div>
      )}
    </div>
  );
};

export default User;
