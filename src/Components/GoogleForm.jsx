/* eslint-disable react/prop-types */
const GoogleForm = ({ src, width, height }) => {
  return (
    <iframe
      src={src}
      width={width}
      height={height}
      className="w-full h-screen rounded-lg"
    >
      Loading...
    </iframe>
  );
};

export default GoogleForm;
