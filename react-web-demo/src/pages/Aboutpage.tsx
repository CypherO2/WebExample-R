import { useEffect } from "react";
import AboutContent from "../components/pagecontent/about-content";
function AboutPage() {
  useEffect(() =>{
    document.title = "SCC- Demo About"
  })
  return (
    <>
        <AboutContent />
    </>
  );
}
export default AboutPage;