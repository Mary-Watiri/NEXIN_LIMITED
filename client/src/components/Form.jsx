import { useState } from "react";

var registerPage = false
function Login({switchForm, ThemeStyles}){

  const[formData, setFormData] = useState({
    email: "",
    password: ""
})

function handleChange(event){
    const name = event.target.name
    const value = event.target.value
    setFormData({
        ...formData,
        [name]: [value]
    })
}

// function addUser(newProfile){
//   const updatedProfile = [...formData, newProfile]
//   setFormData(updatedProfile)
// }

function handleSubmit(event){
    event.preventDefault()
    const profile = {
        email: email.value,
        password: password.value
    }
    console.log(profile)

    fetch("http://127.0.0.1:3000/user", {
      method: "GET",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(profile)
    }).then(res => res.json())
    .then(data => console.log(data))
}

    return(
        <form onSubmit={handleSubmit} className="m-3" style={ThemeStyles}>
  <div className="space-y-12">


    <div className="border-b border-white-950 pb-12">
      <h2 className="text-2xl  font-bold leading-30">Login Form</h2>

      <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-7">

        <div className="sm:col-span-4">
          <label htmlFor="email" className="block text-sm font-medium leading-6">Email address  <span className="text-green-600">(required)</span></label>
          <div className="mt-2">
            <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="block w-full rounded-md bg-slate-300 border-0 py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6"/>
          </div>
        </div>
        <div className="sm:col-span-4">
          <label htmlFor="password" className="block text-sm font-medium leading-6">Password <span className="text-green-500">(required)</span></label>
          <div className="mt-2">
            <input id="password" name="password" type="password" value={formData.password} onChange={handleChange} required className="block w-full rounded-md bg-slate-300 border-0 py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6"/>
          </div>
        </div>
        
      </div>
    </div>

  </div>

  <div className="mt-6 flex items-center justify-end gap-x-6">
    <button type="submit" className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">Login</button>
    <p className="register" onClick={switchForm}>Register</p>
  </div>
</form>
    )
}




function Register({switchForm,ThemeStyles}){

  const[formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    address1: "",
    address2: "",
    position: "",
    postalCode: ""
})

function handleChange(event){
    const name = event.target.name
    const value = event.target.value
    setFormData({
        ...formData,
        [name]: [value]
    })
}

// function addUser(newProfile){
//   const updatedProfile = [...formData, newProfile]
//   setFormData(updatedProfile)
// }

function handleSubmit(event){
    event.preventDefault()
    const profile = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        contact: contactNumber.value,
        address1: address1.value,
        address2: address2.value,
        position: position.value,
        postalCode: postalCode.value
    }
    console.log(profile)

    fetch("http://127.0.0.1:3000/user", {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(profile)
    }).then(res => res.json())
    .then(data => console.log(data))
}

    return(
        <form onSubmit={handleSubmit} className="m-3" style={ThemeStyles}>
  <div className="space-y-12">


    <div className="border-b border-white-950/10 pb-12">
      <h2 className="text-2xl  font-bold leading-30">Profile Form</h2>
      <p className="mt-1 text-base text-green-600 leading-6 ">Create a new staff profile.</p>

      <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-4">
          <label htmlFor="first-name" className="block text-sm font-medium leading-6">First name <span className="text-green-600">(required)</span></label>
          <div className="mt-2">
            <input type="text" value={formData.firstName} name="firstName" id="firstName" onChange={handleChange} required className="block w-full bg-slate-300 rounded-md border-0 
            py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div className="sm:col-span-4">
          <label htmlFor="last-name" className="block text-sm font-medium leading-6">Last name</label>
          <div className="mt-2">
            <input type="text" name="lastName" value={formData.lastName} id="lastName" onChange={handleChange} required className="block w-full bg-slate-300 rounded-md border-0 py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div className="sm:col-span-4">
          <label htmlFor="email" className="block text-sm font-medium leading-6">Email address  <span className="text-green-600">(required)</span></label>
          <div className="mt-2">
            <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="block w-full rounded-md bg-slate-300 border-0 py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6"/>
          </div>
        </div>

        

        <div className="col-span-4">
          <label htmlFor="street-address" className="block text-sm font-medium leading-6">Address 1  <span className="text-green-600">(required)</span></label>
          <div className="mt-2">
            <input type="text" name="address1" value={formData.address1} id="address1" onChange={handleChange} required className="block w-full rounded-md border-0 py-1.5 bg-slate-300 text-gray-900 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div className="col-span-4">
          <label htmlFor="position" className="block text-sm font-medium leading-6">Position  <span className="text-green-600">(required)</span></label>
          <div className="mt-2">
            <input type="text" name="position" value={formData.position} id="position" onChange={handleChange} required className="block w-full rounded-md bg-slate-300 border-0 py-1.5 text-gray-900 shadow-sm   placeholder:text-gray-400 sm:text-sm sm:leading-6"/>
          </div>
        </div>

        <div className="sm:col-span-2 sm:col-start-1">
          <label htmlFor="contact" className="block text-sm font-medium leading-6">Contact Number  <span className="text-green-600">(required)</span></label>
          <div className="mt-2">
            <input type="tel" name="contactNumber" id="contactNumber" value={formData.contactNumber} required onChange={handleChange} className="block w-full bg-slate-300 rounded-md border-0 py-1.5 text-gray-900 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6"/>
          </div>
        </div>
      </div>
    </div>


  </div>

  <div className="mt-6 flex items-center justify-end gap-x-6">
    <button type="submit" className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">Create User Profile</button>
    <p className="register" onClick={switchForm}>Login</p>
  </div>
</form>
    )
}

function Form() {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const switchForm = () => {
    setIsLoginForm(prev => !prev);
  };

  return (
    <div>
      <h1 className="text-2xl  font-bold leading-30">Login Form</h1>
      <p className="mt-1 text-base text-green-600 leading-6 ">Login to your account.</p>
      {isLoginForm ? (
        <Login switchForm={switchForm} />
      ) : (
        <Register switchForm={switchForm} />
      )}
    </div>
  )
}

export default Form;



