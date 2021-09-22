const Validarion = (values) => {
    let errors={};

    if(!values.Name){
        errors.Name="Name is required.";
    }

    if(!values.Email){
        errors.Email="Email is required.";
    } else if(!/\S+@\S+\.\S+/.test(values.Email)){
        errors.Email="Email is invalid.";
    }

    if(!values.Password){
        errors.Password="Password is required.";
    } else if(values.Password.length < 6){
        errors.Password="Password must be more than 6 characters.";
    }

   if (!values.Password2) {
       errors.Password2 = "Password is required.";
   } else if(values.Password2 !== values.Password) {
       errors.Password2 = "Password dot not match.";
   }

    if(!values.Date){
        errors.Date="Date is required.";
    }

    if(!values.Gender){
        errors.Gender="Gender is required.";
    }

    return errors;
};

export default Validarion;