import useUser from "../../hooks/useUser";

const User = () => {
  const { loading, data, error, navigate } = useUser();
  return (
    <div>
      <button onClick={() => navigate(-1)}>Volver</button>
      {loading && <h1>Cargando...</h1>}
      {!loading && error && <h1>Algo salio mal !</h1>}
      {data && !loading && !error && (
        <div>
          <h1>{data.name}</h1>
          <h4>{data.username}</h4>
          <p>{data.email}</p>
        </div>
      )}
    </div>
  );
};

export default User;
