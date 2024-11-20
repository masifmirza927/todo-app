import { useState } from "react";



function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const inputVal = (event) => {
    setEmail(event.target.value);
  }

  const inputClick = (event) => {
    if(event.key == "Enter") {
      alert("you pressed enter")
    }
  }

  const handleSubmit = () => {

      console.log(email)
      console.log(password);
      setEmail("")
  }

  return(
    <div>
      <form onSubmit={ (e) => { e.preventDefault() }  }>
        <input onChange={inputVal} onKeyUp={inputClick} type="text" value={email}  placeholder="email"/>
        <input type="password" onChange={ (e) => { setPassword(e.target.value) } }  placeholder="password"/>
        <button className="btn btn-sm btn-secondary" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default App;