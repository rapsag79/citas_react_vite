const Error = ({ message }) => {
  return (
    <div className="bg-red-700 text-white text-center p-3 uppercase font-bold mb-3 rounded-md translate-y-+1">
      <h2>{message}</h2>
    </div>
  );
};

export default Error;
