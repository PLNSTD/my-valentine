import WhyILoveYou from "./components/whyILoveYou";
import Greetings from "./components/Greetings";
import Footer from "./components/Footer";

// const yesBtnStyle = "text-5xl hover:cursor-pointer";
// const noBtnStyle = "text-xs hover:cursor-pointer";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-primarypink">
      <Greetings />
      <div className="h-full p-5 min-w-screen flex flex-col justify-start">
        <WhyILoveYou />
      </div>
      <Footer />
    </div>
  );
};

export default App;
