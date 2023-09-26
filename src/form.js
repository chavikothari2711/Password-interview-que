import { useState } from "react";
import Strength from "./Strength";

function Form() {
  const [type, setType] = useState("password");
  const [password, setPassword] = useState("");
  function changeType() {
    if (type === "password") setType("text");
    else setType("password");
  }
  function clearPassword() {
    window.location.reload();
  }
  return (
    <div>
      <input
        type={type}
        className="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={changeType}> Show/Hide</button>
      <button onClick={clearPassword}>Clear</button>
      <br />
      <Strength password={password} />
    </div>
  );
}
export default Form;
