import { useSelector, useDispatch } from "react-redux";
import {
  incrementarPorUno,
  resetearLaCuenta,
  restarPorUno,
  sumarPorProp,
} from "../../features/counter/counterReducer";
import { useState } from "react";

const ContadorRx = () => {
  //const agenda = ["sumar", "restar", "reiniciar"];
  const { agenda, cuenta } = useSelector((store) => store.contador);
  const dispatch = useDispatch();
  const [state, setState] = useState(0);
  console.log(state);

  return (
    <div style={{ display: "flex", flexDirection: "column", padding: "20px" }}>
      <h1>Cuenta actual : {cuenta} </h1>
      <div style={{display:'flex', gap:"20px"}}>
        <input
          type="number"
          placeholder="numero a sumar"
          value={state}
          min={0}
          onChange={(e) => setState(Number(e.target.value))}
        />
        <button onClick={() => dispatch(sumarPorProp(state))}>Sumar {state + ''}</button>
      </div>
      <div style={{ display: "flex", gap: "40px", marginTop: "20px" }}>
        <button onClick={() => dispatch(incrementarPorUno())}>Sumar</button>
        <button onClick={() => dispatch(restarPorUno())}>Restar</button>
        <button onClick={() => dispatch(resetearLaCuenta())}>Reiniciar</button>
      </div>
      <div style={{ marginTop: "20px", fontSize: "22px" }}>
        <ol>
          {agenda.length > 0 ? (
            agenda.map((a, index) => (
              <li key={index}>
                <h4>{a}</h4>
              </li>
            ))
          ) : (
            <h4>Aun no hay registros</h4>
          )}
        </ol>
      </div>
    </div>
  );
};

export default ContadorRx;
