
import { useEffect } from "react";
import ContactContent from "../components/pagecontent/contact-content";
function Contacts() {
  useEffect(() =>{
    document.title = "SCC- Demo Contacts"
  })
  return (
    <>

        <ContactContent />

    </>
  );
}
export default Contacts;