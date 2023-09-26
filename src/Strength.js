import { useState } from "react";

function Strength(props) {
  const password = props.password;
  let hasUpper = false;
  let hasLower = false;
  let hasSpecial = false;
  let hasNumber = false;
  const [text, setText] = useState("");
  let s = 0;
  function check() {
    if (password.length >= 8) {
      document.getElementById("1").style.color = "green";
      s += 1;
    }
    for (let i = 0; i < password.length; i++) {
      if (!hasUpper && password[i] >= "A" && password[i] <= "Z") {
        document.getElementById("2").style.color = "green";
        hasUpper = true;
        s += 1;
      }
      if (!hasLower && password[i] >= "a" && password[i] <= "z") {
        document.getElementById("3").style.color = "green";
        hasLower = true;
        s += 1;
      }
      if (!hasNumber && password[i] >= "0" && password[i] <= "9") {
        document.getElementById("4").style.color = "green";
        hasNumber = true;
        s += 1;
      }
      if (
        (!hasSpecial && password[i] === "@") ||
        password[i] === "$" ||
        password[i] === "#" ||
        password[i] === "!" ||
        password[i] === "&"
      ) {
        document.getElementById("5").style.color = "green";
        hasSpecial = true;
        s += 1;
      }
    }
    if (s < 3) {
      setText("Poor");
      document.getElementById("strength").style.background = "red";
    } else if (s === 3 || s === 4) {
      setText("Moderate");
      document.getElementById("strength").style.background = "yellow";
    } else {
      setText("Rich");
      document.getElementById("strength").style.background = "green";
    }
  }
  return (
    <div>
      <button id="strength" onClick={check}>
        Check Strength
      </button>
      <p>{text}</p>
      <ul>
        <li id="1">Length must be greater than or equal to 8</li>
        <li id="2">Must contain Uppercase</li>
        <li id="3">Must contain LowerCase</li>
        <li id="4">Must contain special Character</li>
        <li id="5">Must have a number</li>
      </ul>
    </div>
  );
}

export default Strength;
