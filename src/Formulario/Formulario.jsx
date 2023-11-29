import { useState, useEffect } from "react";
import Error from "../Error/Error";

const Formulario = ({ paciente, pacientes, setPacientes, setPaciente }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setHora(paciente.hora);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  const generateId = () => {
    const random = Math.random().toString(36).substring(2);

    const fecha = Date.now().toString(36);

    return fecha + random;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if ([nombre, propietario, email, fecha, hora, sintomas].includes("")) {
      console.log("Hay Almenos Un Campo Vacio");

      setError(true);
      return;
    }

    setError(false);

    const paciente1 = {
      nombre, //nombre del animal
      propietario, //nombre del dueño
      email, //contacto
      fecha, //fecha de la cita
      hora, //hora de la cita
      sintomas, //Breve descripción de los sintomas
    };

    if (paciente.id) {
      //Editando el Registro
      console.log("Hay paciente");
      paciente1.id = paciente.id;
      // console.log(paciente1);
      // console.log(paciente);

      const pacientesActualizados = pacientes.map((pacienteState) =>
        pacienteState.id === paciente.id ? paciente1 : pacienteState
      );

      setPacientes(pacientesActualizados);
      setPaciente({});
    } else {
      //Creamos un nuevo registro
      console.log("No hay Registro del Paciente");

      paciente1.id = generateId(); //generamos un ID único
      setPacientes([...pacientes, paciente1]);
    }

    // console.log(paciente);
    // console.log(paciente1);

    setNombre("");
    setPropietario("");
    setEmail("");
    setFecha("");
    setHora("");
    setSintomas("");
    setError("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10 font-bold">
        Añane Pacientes y {""}
        <span className="text-indigo-600 ">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && <Error message={"TODOS LOS CAMPOS SON OBLIGATORIOS"} />}
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            {" "}
            Nombre Mascota {nombre}
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded"
            value={nombre}
            onChange={(element) => {
              setNombre(element.target.value);
            }}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            {" "}
            Nombre Propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded"
            value={propietario}
            onChange={(element) => {
              setPropietario(element.target.value);
            }}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email de Contacto"
            className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded"
            value={email}
            onChange={(element) => {
              setEmail(element.target.value);
            }}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            {" "}
            Consulta
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded"
            value={fecha}
            onChange={(element) => {
              setFecha(element.target.value);
            }}
          />
          <input
            type="time"
            name="alta"
            id="alta"
            className="border-2 w-full p-2 mt-2 placeholder-grey-400 rounded"
            value={hora}
            onChange={(element) => {
              setHora(element.target.value);
            }}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            {" "}
            Sintomas
          </label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describle los sintomas de la mascota "
            value={sintomas}
            onChange={(element) => {
              setSintomas(element.target.value);
            }}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 rounded-3xl"
          value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
        />
      </form>
    </div>
  );
};

export default Formulario;
