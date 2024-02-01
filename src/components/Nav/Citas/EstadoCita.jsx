import PropTypes from "prop-types";

export const EstadoCita = ({ cita }) => {
  let claseEstado = "";
  switch (cita.estado) {
    case "Revisión":
      claseEstado = "bg-yellow-500 px-2 rounded-3xl text-white";
      break;
    case "Aceptado":
      claseEstado = "bg-green-500 px-2 rounded-3xl text-white";
      break;
    case "Cancelado":
      claseEstado = "bg-red-500 px-2 rounded-3xl text-white";
      break;
    default:
      // Si el estado no coincide con ninguno de los anteriores, puedes proporcionar una clase predeterminada
      claseEstado = "bg-gray-500 px-2 rounded-3xl text-white";
      break;
  }

  return (
    <div
      className={`inline-flex items-center text-base font-semibold ${claseEstado}`}
    >
      {cita.estado}
    </div>
  );
};

EstadoCita.propTypes = {
    cita: PropTypes.object.isRequired
}