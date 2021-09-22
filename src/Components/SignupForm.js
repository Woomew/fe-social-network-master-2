import React, {useState, useEffect} from "react";
import Validarion from "./Validarion/Validarion";

const SignupForm = ({ submitForm }) => {
    const [values,setValues] =useState({
        Name:"",
        Email:"",
        Password:"",
        Password2:"",
        Date:"",
        Gender:"",
    });

    const  [errors,setErrors] = useState({});
    const [dateIsCorrect, setdataIsCorrect] = useState(false);

    const handleFormSubmit = (event) =>{
        event.preventDefault();
        setErrors(Validarion(values));
        setdataIsCorrect(true);
    };
    useEffect(() =>{
      if(Object.keys(errors).length === 0 && dateIsCorrect){
          submitForm(true);
      }
    }, );
    const handleChange = (event) =>{
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <div className="container body-bg bg-gray-200 max-w-full min-h-screen pt-12 md:pt-20 pb-6 px-2 md:px-0">

           <div className="max-w-screen-2xl mx-auto">

                   <h1 className="text-7xl font-bold text-yellow-500 text-center">PocoPoco</h1>

           </div>

            <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">

                <section>
                    <h3 className="font-bold text-2xl">Wellcome to PocoPoco</h3>
                    <p className="text-md text-gray-900 pt-2">Sign up to your account</p>
                </section>

                <section className="mt-10 space-y-2 ">

                    <form className="flex flex-col form-wrapper" method="POST" action="#">

                        <div className="mb-6 pt-3 rounded text-md bg-blue-300 text-grey-700 Name">
                            <label className="block text-grey-700 text-md font-bold mb-2 ml-3 label">
                                Name
                            </label>
                            <input type="text" id="Name" name="Name" value={values.Name} onChange={handleChange}
                                   className="bg-blue-200 rounded w-full text-gray-800 focus:outline-none border-b-4 border-red-400 focus:border-red-400 transition-500 duration-500 px-3 pb-3"/>
                            {errors.Name && <p className="error font-bold">{errors.Name} </p>}
                        </div>

                        <div className="mb-6 pt-3 rounded text-md bg-blue-300 text-grey-700">
                            <label className="block text-grey-700 text-md font-bold mb-2 ml-3">
                                Email
                            </label>
                            <input type="text" id="Email" name="Email" value={values.Email} onChange={handleChange}
                                   className="bg-blue-200 rounded w-full text-gray-800 focus:outline-none border-b-4 border-red-400 focus:border-red-400 transition-500 duration-500 px-3 pb-3"/>
                            {errors.Email && <p className="error font-bold">{errors.Email} </p>}
                        </div>

                        <div className="mb-6 pt-3 rounded text-md bg-blue-300 text-grey-700">
                            <label className="block text-grey-700 text-md font-bold mb-2 ml-3">
                                Password
                            </label>
                            <input type="text" id="Password" name="Password" value={values.Password} onChange={handleChange}
                                   className="bg-blue-200 rounded w-full text-gray-800 focus:outline-none border-b-4 border-red-400 focus:border-red-400 transition-500 duration-500 px-3 pb-3"/>
                            {errors.Password && <p className="error font-bold">{errors.Password} </p>}
                        </div>

                        <div className="mb-6 pt-3 rounded text-md bg-blue-300 text-grey-700">
                            <label className="block text-grey-700 text-md font-bold mb-2 ml-3">
                                Password Confirm
                            </label>
                            <input type="text" id="Password2" name="Password2" value={values.Password2} onChange={handleChange}
                                   className="bg-blue-200 rounded w-full text-gray-800 focus:outline-none border-b-4 border-red-400 focus:border-red-400 transition-500 duration-500 px-3 pb-3"/>
                            {errors.Password2 && <p className="error font-bold">{errors.Password2} </p>}
                        </div>

                        <div className="mb-6 pt-3 rounded text-md bg-blue-300 text-grey-700">
                            <label className="block text-grey-700 text-md font-bold mb-2 ml-3">
                                Date
                            </label>
                            <input type="Date" id="Date" name="Date" value={values.Date} onChange={handleChange}
                                   className="  bg-blue-200 rounded w-full text-gray-800 focus:outline-none border-b-4 border-red-400 focus:border-red-400 transition-500 duration-500 px-3 pb-3"/>
                            {errors.Date && <p className="error font-bold">{errors.Date} </p>}
                        </div>

                        <div className="mb-6 pt-3 rounded text-md bg-blue-300 text-grey-700">
                            <label className="block text-grey-700 text-md font-bold mb-2 ml-3">
                                Gender
                            </label>
                            <input type="Gender" id="Gender" name="Gender" value={values.Gender} onChange={handleChange}
                                   className="  bg-blue-200 rounded w-full text-gray-800 focus:outline-none border-b-4 border-red-400 focus:border-red-400 transition-500 duration-500 px-3 pb-3"/>
                            {errors.Gender && <p className="error font-bold">{errors.Gender} </p>}
                        </div>



                        <button
                            className="bg-red-400 hover:bg-purple-800 text-white font-bold py-2 rounded w-full shadow-lg hover:shadow-xl transition duration-200"
                            type="submit" onClick={handleFormSubmit}>Sign up
                        </button>

                    </form>

                </section>

            </main>

        </div>
    );

}
export default SignupForm;