import axios from "axios";
import { FormEvent, useState } from "react";
import "./stock-api.css";
function DadJoke() {
  const [dadJoke, setDadJoke] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleClick = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
      });
      console.log(response.data);
      setDadJoke(response?.data["joke"]);
    } catch (error) {
      setErrorMessage(String(error));
    }
  };
  return (
    <>
      {" "}
      <form onSubmit={handleClick} className="form1">
        <label htmlFor="stockcode">Get Dad Joke:</label>
        <button type="submit" id="Button-API">
          Press Here
        </button>
      </form>
      {dadJoke && (
        <>
          <br />
          <h2 className="text-center" id="Dad-Joke">
            {dadJoke}.
          </h2>
        </>
      )}
      {errorMessage && <p>{errorMessage}</p>}
    </>
  );
}
export default DadJoke;
