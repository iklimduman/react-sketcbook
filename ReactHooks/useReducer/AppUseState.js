import "./styles.css";
import { useState } from "react";

// SAME EXAMPLE WITH USESTATE IN ORDER TO SEE DIFFERENCE

export default function AppUseState() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [err, setErr] = useState('')

  function handleSubmit(e) {
    console.log(e)
    e.preventDefault();
    if (username === "iklim" && password === "password") {
      setSuccess(true);
      setErr('')
    } else {
      setSuccess(false);
      setErr('wrong username or password')
    }
  }

  const handleLogOut = () => {
    setSuccess(false);
    setUsername("");
    setPassword("");
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {success ? (
        <div>
          <h1>hello {username}</h1>
          <button onClick={handleLogOut}>Log out</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {success ? null : <h2>{err}</h2>}
          <input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          ></input>
          <input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          ></input>
          <button type="submit">Log in</button>
        </form>
      )}
    </div>
  );
}
