import { useEffect } from "react";
import HomeContent from "../components/pagecontent/home-content";

function HomePage() {
  useEffect(() =>{
    document.title = "SCC- Demo Home"
  })
  return (
    <>
      <HomeContent />
    </>
  );
}
export default HomePage;
