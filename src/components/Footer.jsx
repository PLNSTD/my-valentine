import SpotifyBlock from "./SpotifyBlock";

const Footer = () => {
  return (
    <div className="pl-4 fixed bottom-0 w-full flex justify-between">
      <SpotifyBlock />
      {/* <div className="flex flex-col justify-end">
        <p className="p-1 text-sm font-bold">To Pi... From Old Pi</p>
      </div> */}
    </div>
  );
};

export default Footer;
