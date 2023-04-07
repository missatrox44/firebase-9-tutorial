import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, signup } = useSignup()

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(email, password);
    signup(email, password)
  };

  //similar to login component
  //track email/password
  //handle submit form 
  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>email:</span>
          <input
            required
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>password:</span>
          <input
            required
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <button>sign up</button>
        {/* will only render IF there is an error */}
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}
