import { useEffect } from "react";
import UserContent from "../components/pagecontent/user-content";
function UserPage() {
  useEffect(() => {
    document.title = "SCC- Login/ Sign Up";
  });
  return (
    <>
      <UserContent />
    </>
  );
}
export default UserPage;
