import logo from './assets/notes.svg';

function Header() {
  return (
    <div className="flex items-center md:justify-evenly bg-secondary p-3">
      <h1 className="text-3xl font-marker">App Notes</h1>
      <img src={logo} alt="logo" className="ml-3 w-8 h-8" />
    </div>
  );
}

function FormNote() {
  return (
    <div className="flex md:justify-center items-center p-3">
      <form className="grid w-full md:w-3/4 lg:w-1/2 font-nanum">
        <label
          htmlFor="title"
          className="form-label inline-block mt-5 mb-2 text-slate-100 text-2xl"
        >
          Titulo:
        </label>
        <input
          type="text"
          name="title"
          id="title"
          className="form-control rounded-lg outline-none px-3 py-1 text-base"
        />
        <label
          htmlFor="description"
          className="form-label inline-block mt-5 mb-2 text-slate-100 text-2xl"
        >
          Descripcion:
        </label>
        <input
          type="text"
          name="description"
          id="description"
          className="form-control rounded-lg outline-none px-3 py-1 text-base"
        />
        <button
          type="button"
          className="inline-block mt-5 px-6 py-2.5 bg-secondary text-white font-medium text-lg leading-tight uppercase rounded shadow-md hover:bg-[#474E68] hover:shadow-lg focus:bg-[#474E68] focus:shadow-lg focus:outline-none focus:ring-0  transition duration-150 ease-in-out"
        >
          Agregar nota
        </button>
      </form>
    </div>
  );
}

function CardNote() {
  return (
    <div className="flex justify-center">
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
        <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2 font-marker">
          Card title
        </h5>
        <p className="text-gray-700 text-lg mb-4 font-nanum">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          illo.
        </p>
        <button
          type="button"
          className=" inline-block px-6 py-2.5 bg-secondary text-white font-medium text-lg font-nanum leading-tight uppercase rounded shadow-md hover:bg-[#474E68] hover:shadow-lg focus:bg-[#474E68] focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
        >
          Editar
        </button>
        <button
          type="button"
          className=" inline-block px-6 py-2.5 m-1 bg-secondary text-white font-medium text-lg font-nanum leading-tight uppercase rounded shadow-md hover:bg-[#474E68] hover:shadow-lg focus:bg-[#474E68] focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <div className="grid grid-rows-3"></div>
      <Header></Header>
      <FormNote></FormNote>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-10">
        <CardNote></CardNote>
        <CardNote></CardNote>
        <CardNote></CardNote>
        <CardNote></CardNote>
        <CardNote></CardNote>
        <CardNote></CardNote>
      </div>
    </>
  );
}

export default App;
