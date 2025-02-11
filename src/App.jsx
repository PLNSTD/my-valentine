import WhyILoveYou from "./components/WhyILoveYou";
import Greetings from "./components/Greetings";
import Footer from "./components/Footer";
import LoveLetter from "./components/LoveLetter";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-primarypink">
      <Greetings />
      <div className="h-full p-5 min-w-screen flex flex-row justify-start">
        <WhyILoveYou />
        <LoveLetter />
      </div>
      <Footer />
    </div>
  );
};

export default App;
