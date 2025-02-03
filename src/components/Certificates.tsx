import { h } from "preact";
import { useState } from "preact/hooks";

export default function ContenidoPreact() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <h2>Contenido Dinámico en Preact</h2>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}
