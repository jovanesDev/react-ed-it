/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUsersFetch } from "../../services/users.service";

// const data = {
//   id: 1,
//   name: "Leanne Graham",
//   username: "Bret",
//   email: "Sincere@april.biz",
//   address: {
//     street: "Kulas Light",
//     suite: "Apt. 556",
//     city: "Gwenborough",
//     zipcode: "92998-3874",
//     geo: {
//       lat: "-37.3159",
//       lng: "81.1496",
//     },
//   },
//   phone: "1-770-736-8031 x56442",
//   website: "hildegard.org",
//   company: {
//     name: "Romaguera-Crona",
//     catchPhrase: "Multi-layered client-server neural-net",
//     bs: "harness real-time e-markets",
//   },
// };

const UserConatiner = () => {
  //!https://jsonplaceholder.typicode.com/users
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  // 1) pendant = pendiente
  // 2) fullfield = resuelto
  // 3) rejected = rechazado

  useEffect(() => {
    // Asincronico
    async function getAllUsers() {
      //Sincronico
      // fetch("https://jsonplaceholder.typicode.com/users",{
      //       method:"GET"
      //   }).then((response) => response.json())
      //     .then((res) => console.log(res))
      //     .catch((err) => setError(true))
      //     .finally(() => setLoading(false))
      setLoading(true);
      try {
        const response = await getUsersFetch();
        setUsers(response);
      } catch (error) {
        setUsers([]);
        setError(true);
        throw error;
      } finally {
        setLoading(false);
      }
    }
    getAllUsers();

    return () => {
      setUsers([]);
      setLoading(false);
    };
    // Ejeplo de una promesa hecha a mano
    // const usersTemp = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve([{ name: "Pedro" }, { name: "Jorge" }]);
    //   }, 5000);
    // });
    // usersTemp
    //   .then((response) => {
    //     setUsers(response)
    //   })
    //   .catch((err) => {
    //     setError(true)
    //     throw err
    //   })
    //   .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {loading && <h1>Cargando...</h1>}
      {!loading && error && <h1>Algo salio mal </h1>}
      {/* {!loading && !error && users.length < 1 && <h1>No hay usuarios</h1>} */}
      {!loading && users.length > 0 && (
        <div>
          {users.map((user, i) => (
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
