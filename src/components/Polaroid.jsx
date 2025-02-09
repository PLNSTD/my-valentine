import PropTypes from "prop-types";

const Polaroid = ({ cardDescription, closeCard }) => {
  return (
    <div className="flex justify-center items-center fixed inset-0 z-50 bg-black/50">
      <div
        className="p-4 pt-6 bg-white shadow-lg rounded-lg transform rotate-2 w-[350px] h-[420px]"
        onClick={() => closeCard()}
      >
        {/* Red "X" Button */}
        <button
          // Handle the close action
          className="absolute -top-2 -right-2 bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center shadow-md hover:bg-red-600  duration-300 ease-in-out hover:scale-125 hover:cursor-pointer"
        >
          <span className="text-xl font-bold">×</span>
        </button>
        {/* Photo */}
        {/* <img
              src="your-photo-url.jpg" // Replace with your photo URL
              alt="Polaroid Photo"
              className="w-full h-64 object-cover"
            /> */}
        <div className="bg-black w-full h-64"></div>
        {/* Whitespace for Caption */}
        <div className="h-16 flex items-center justify-center">
          <p className="text-center text-gray-700">{cardDescription}</p>
        </div>
      </div>
    </div>
  );
};

Polaroid.propTypes = {
  cardDescription: PropTypes.string,
  closeCard: PropTypes.func,
};

export default Polaroid;
