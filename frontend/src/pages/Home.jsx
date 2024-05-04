import Conversations from "../components/Conversations";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <section className="page h-[80vh] max-h-[80vh] overflow-hidden p-0 md:w-[80%] flex-row">
      <Sidebar />
      <Conversations />
    </section>
  );
};

export default Home;
