import React, { useState } from "react";

let isLoggedIn = false;

function Login({ switchForm, ThemeStyles }) {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const profile = {
      email: formData.email,
      password: formData.password
    };
    console.log(profile);
    isLoggedIn = true;

    fetch("http://127.0.0.1:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(profile)
    }).then(res => res.json())
      .then(data => console.log(data));

  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '75vh' }}>
      <form onSubmit={handleSubmit} className="m-3" style={ThemeStyles}>
        <div className="space-y-12">
          <div className="border-b border-white-950 pb-12">
            <h2 className="text-3xl font-medium py-2 border-white-900 px-4 text-slate-200 leading-30">Login Form</h2>
            <div className="mt-12 grid grid-cols-0 gap-x-6 gap-y-8 xl:grid-cols-7">
              <div className="xl:col-span-4">
                <label htmlFor="email" className="block text-xl font-medium leading-6">Email address <span className="text-green-600">(required)</span></label>
                <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-teal-750 border border-gray-300 rounded-md shadow-xl focus:outline-none focus:ring-orange-900 focus:border-orange-900"/>
              </div>
              <div className="xl:col-span-4">
                <label htmlFor="password" className="block text-xl font-medium leading-6">Password <span className="text-green-500">(required)</span></label>
                <input id="password" name="password" type="password" value={formData.password} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-teal-750 border border-gray-300 rounded-md shadow-xl focus:outline-none focus:ring-orange-900 focus:border-orange-900"/>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="submit" className="rounded-md bg-green-600 px-3 py-2 text-xl font-semibold text-white shadow-xl hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">Login</button>
          <p className="register cursor-pointer" style={{ cursor: 'pointer' }} onClick={switchForm}>Register</p>
        </div>
      </form>
    </div>
  );
}


function Register({ switchForm, ThemeStyles }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    position: "",
    postalCode: ""

  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const profile = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      address: formData.address,
      position: formData.position,
      postalCode: formData.postalCode
    };
    console.log(profile);

    fetch("http://127.0.0.1:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(profile)
    }).then(res => res.json())
    .then(data => console.log(data));
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '75vh' }}>
      <form onSubmit={handleSubmit} className="m-3" style={ThemeStyles}>
        <h2 className="text-2xl font-medium py-2 border-white-500 px-4 text-slate-200 leading-30">Registration Form</h2>
        <div className="grid grid-cols-2 gap-7">
          <div>
            <label htmlFor="firstName" className="block text-xl font-medium">First Name<span className="text-green-600">(required)</span></label>
            <input id="firstName" name="firstName" type="text" value={formData.firstName} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-teal-750 border border-gray-300 rounded-md shadow-xl focus:outline-none focus:ring-orange-900 focus:border-orange-900"/>
          </div>
          <div>
            <label htmlFor="lastName" className="block text-xl font-medium">Last Name<span className="text-green-600">(required)</span></label>
            <input id="lastName" name="lastName" type="text" value={formData.lastName} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-teal-750 border border-gray-300 rounded-md shadow-xl focus:outline-none focus:ring-orange-900 focus:border-orange-900"/>
          </div>
          <div>
            <label htmlFor="email" className="block text-xl font-medium">Email<span className="text-green-600">(required)</span></label>
            <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-teal-750 border border-gray-300 rounded-md shadow-xl focus:outline-none focus:ring-orange-900 focus:border-orange-900"/>
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block text-xl font-medium">Phone Number<span className="text-green-600">(required)</span></label>
            <input id="phoneNumber" name="phoneNumber" type="tel" value={formData.phoneNumber} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-teal-750 border border-gray-300 rounded-md shadow-xl focus:outline-none focus:ring-orange-900 focus:border-orange-900"/>
          </div>
          <div>
            <label htmlFor="address" className="block text-xl font-medium">Address<span className="text-green-600">(required)</span></label>
            <input id="address" name="address" type="address" value={formData.address} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-teal-750 border border-gray-300 rounded-md shadow-xl focus:outline-none focus:ring-orange-900 focus:border-orange-900"/>
          </div>
          <div>
            <label htmlFor="position" className="block text-xl font-medium">Position<span className="text-green-600">(required)</span></label>
            <input id="position" name="position" type="text" value={formData.position} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-teal-750 border border-gray-300 rounded-md shadow-xl focus:outline-none focus:ring-orange-900 focus:border-orange-900"/>
          </div>
          <div>
            <label htmlFor="postalCode" className="block text-xl font-medium">Postal Code<span className="text-green-600">(required)</span></label>
            <input id="postalCode" name="postalCode" type="text" value={formData.postalCode} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-teal-750 border border-gray-300 rounded-md shadow-xl focus:outline-none focus:ring-orange-900 focus:border-orange-900"/>
          </div>
        </div>
        <div className="flex justify-end mt-6">
          <button type="submit" className="rounded-md bg-green-600 px-3 py-2 text-xl font-semibold text-white shadow-xl hover:bg-green-500">Register</button>
          <p className="ml-4 cursor-pointer" onClick={switchForm}>Login</p>
        </div>
      </form>
    </div>
  );
}

function Form() {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const switchForm = () => {
    setIsLoginForm(prev => !prev);
  };

  return (
    <div>
      {/* <h1 className="text-2xl  font-bold leading-30">Login Form</h1>
      <p className="mt-1 text-base text-green-600 leading-6 ">Login to your account.</p> */}
      {isLoginForm ? (
        <Login switchForm={switchForm} />
      ) : (
        <Register switchForm={switchForm} />
      )}
    </div>
  )
}


export default Form;
