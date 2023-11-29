import { useState, useEffect } from "react";

import Formulario from "./Formulario/Formulario";
import Header from "./Header/Header";
import ListadoDePacientes from "./Listado de Pacientes/ListadoDePacientes";

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    const obtenerLocalStorage = () => {
      const pacienteLocalStorage =
        JSON.parse(localStorage.getItem("pacientes")) ?? [];

      setPacientes(pacienteLocalStorage);
    };

    obtenerLocalStorage();
  }, []);

  useEffect(() => {
    // console.log("Componente Listo o Actualizado");

    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(
      (paciente) => paciente.id !== id
    );

    // console.log("Eliminado ususarion con el " + id);
    setPacientes(pacientesActualizados);
  };

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          paciente={paciente}
          pacientes={pacientes}
          setPacientes={setPacientes}
          setPaciente={setPaciente}
        />
        <ListadoDePacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;
