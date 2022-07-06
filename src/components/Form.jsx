import { useState } from "react"

const Form = (props) => {

  const [ name, setName ] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("submitted")
    props.addPlayer(name)
    setName("")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
       Name: <input value={name} onChange={(event) => setName(event.target.value)}/>
       <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form