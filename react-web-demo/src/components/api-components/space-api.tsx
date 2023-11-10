import axios from "axios";
import { FormEvent, useState } from "react";
function PeopleInSpace() {
  const [spacePeople, setSpacePeople] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleClick = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        "http://api.open-notify.org/astros.json"
      );
      console.log(response.data);
    } catch (error) {
      setErrorMessage(String(error));
    }
  };
  return (
    <>
      {" "}
      <form onSubmit={handleClick} className="form1">
        <label htmlFor="stockcode">People in Space</label>
        <button type="submit">Get</button>
      </form>
      {spacePeople && <p>The value of the stock is: {spacePeople}.</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </>
  );
}
export default PeopleInSpace;
