export function colorDicider(descuento) {
    if (descuento > 50) return "barra_green";
    if (descuento > 25) return "barra_yellow";
    if (descuento > 10) return "barra_red";
  }