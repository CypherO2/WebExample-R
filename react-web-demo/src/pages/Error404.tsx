
import { useEffect } from "react";
import ErrorContent from "../components/pagecontent/not-found-content";
function ErrorPage() {
  useEffect(() =>{
    document.title = "404 - Not Found"
  })
  return (
    <>

        <ErrorContent />

    </>
  );
}
export default ErrorPage;