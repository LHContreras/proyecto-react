
const Paciente = () => {
  return (
    <div>
      <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Nombre: {""}
          <span>Hook</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Nombre Propietario: {""}
          <span>Luis </span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Email: {""}
          <span>correo@correo.com</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Fecha Alta: {""}
          <span>30 de Noviembre 2023</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Sintoimas: {""}
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio
            repellat architecto et labore odit repellendus nulla voluptatem
            adipisci reprehenderit recusandae est illum, dolor in consectetur
            debitis amet reiciendis. Ipsum, nisi.
          </span>
        </p>
      </div>
    </div>
  )
}

export default Paciente
