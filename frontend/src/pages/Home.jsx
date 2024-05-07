import { Conversations, Sidebar } from "../components";
import { useState } from "react";
import { Chats } from "../components";
const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      {/* <TopBar /> */}
      <div className="page h-[95vh] max-h-[95vh]   lg:h-[80vh] gap-0 lg:max-h-[80vh] overflow-hidden p-0 lg:w-[80%] w-[98%] flex-col lg:flex-row">
        <Sidebar isVisible={isVisible} setIsVisible={setIsVisible} />
        <Conversations />
      </div>
      {isVisible && (
        <div className="fixed  block lg:hidden top-[85px]  right-6 gap-0 border border-pink p-4  w-[80%] sm:w-[60%]  h-[60vh] page z-10 overflow-y-auto">
          <h1>Your Chats</h1>
          <Chats />
        </div>
      )}
    </>
  );
};

export default Home;
