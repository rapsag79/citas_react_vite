const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const {
    id, //ID del Paciente
    nombre, //nombre del animal
    propietario, //nombre del dueño
    email, //contacto
    fecha, //fecha de la cita
    hora, //hora de la cita
    sintomas, //Breve descripción de los sintomas
  } = paciente;

  const handleEliminar = () => {
    const respuesta = confirm(
      "Deseas Eliminar al siguiente Paciente: " + nombre
    );

    if (respuesta) {
      eliminarPaciente(id);
    } else {
      console.log("Casi la cagas");
    }
  };
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case"> {nombre} </span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {""}
        <span className="font-normal normal-case">{propietario}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha de Alta: {""}
        <span className="font-normal normal-case">
          {fecha}
          {/* {hora} */}
        </span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: {""}
        <span className="font-normal normal-case">{sintomas}</span>
      </p>

      <div className="flex justify-between mt-10">
        <button
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-500 hover:text-white uppercase rounded-3xl "
          type="button"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>
        <button
          className="py-2 px-10 bg-red-600 hover:bg-red-500 hover:text-white
          uppercase rounded-3xl"
          type="button"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
