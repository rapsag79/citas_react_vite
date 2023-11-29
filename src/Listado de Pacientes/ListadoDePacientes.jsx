import Paciente from "../Paciente/Paciente";

const ListadoDePacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black  text-3xl text-center">
            Listado de Pacientes
          </h2>
          <p className="text-xl font-bold mt-5 mb-10 text-center">
            Administra tus {""}
            <span className="text-indigo-600">pacientes y Citas</span>
          </p>
          {pacientes.map((paciente) => {
            return (
              <Paciente
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
              />
            );
          })}
        </>
      ) : (
        <>
          <h2 className="font-black  text-3xl text-center">
            No hay Pacientes en la Lista
          </h2>
          <p className="text-xl font-bold mt-5 mb-10 text-center">
            Comienza Agregando Pacientes
            <span className="text-indigo-600"> a tu lista </span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoDePacientes;
