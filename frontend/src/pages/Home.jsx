import { TopBar, Conversations, Sidebar } from "../components";

const Home = () => {
  return (
    <>
      <TopBar />
      <div className="page h-[70vh] max-h-[70vh]   lg:h-[80vh] gap-0 lg:max-h-[80vh] overflow-hidden p-0 lg:w-[80%] w-[98%] flex-col lg:flex-row">
        <Sidebar />
        <Conversations />
      </div>
    </>
  );
};

export default Home;
