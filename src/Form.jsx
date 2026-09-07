import React, { use, useRef } from 'react'

const Form = () => {
  let nameRef = useRef();
  let emailRef = useRef();
  let maleRef = useRef();
  let femaleRef = useRef();
  let languageRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    console.log("running");

    let obj = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      male: maleRef.current.checked,
      female: femaleRef.current.checked,
      language: languageRef.current.value
    }
    console.log(obj)
  }
  return (
    <div>
      <h1>This is uncontrolled component</h1>
      <form action="">
        <label htmlFor="">Name : </label>
        <input ref={nameRef} type='text' placeholder='Enter Name' /><br /><br />

        <label htmlFor="">Email : </label>
        <input ref={emailRef} type='email' placeholder='Enter Email' /><br /><br />

        <label htmlFor="">Gender : </label>
        <label htmlFor=''>Male</label>
        <input value = 'male' ref={maleRef} type='radio' name='gender' />
        <label htmlFor=''>Female</label>
        <input value = 'female' ref={femaleRef} type='radio' name='gender' /> <br /><br />

        <select ref={languageRef} name='' id=''>
          <option value="">Select a language</option>
          <option value="Python">Python</option>
          <option value="Html">Html</option>
          <option value="CSS">CSS</option>
          <option value="Java Script">Java Script</option>
        </select> <br /><br />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default Form