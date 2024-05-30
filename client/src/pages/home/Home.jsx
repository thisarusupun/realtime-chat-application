import Sidebar from "../../components/sidebar/Sidebar";
import MessageContaier from "../../components/messages/MessageContaier";

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <Sidebar />
      <MessageContaier />
    </div>
  );
};

export default Home;
