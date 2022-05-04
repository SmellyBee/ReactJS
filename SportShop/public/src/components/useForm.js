import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
  /*const [values, setValues] = useState({
    name: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    passwordConf: "",
    phoneNumber: "",
    address: "",
    pol: ""
  });*/
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateName = (e) => {
    setName(e.target.value);
  }

  const updateLastname = (e) => {
    setLastname(e.target.value);
  }

  const updateUsername = (e) => {
    setUsername(e.target.value);
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  }

  const updatePassword = (e) => {
    setPassword(e.target.value);
  }

  const updatePasswordConf = (e) => {
    setPasswordConf(e.target.value);
  }

  const updatePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  }

  const updateAdress = (e) => {
    setAddress(e.target.value);
  }

  /*const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };*/

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(name));
    setErrors(validate(lastname));
    setErrors(validate(username));
    setErrors(validate(email));
    setErrors(validate(password));
    setErrors(validate(passwordConf));
    setErrors(validate(phoneNumber));
    setErrors(validate(address));
    //setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  return { /*handleChange,*/ handleSubmit, /*values,*/ name,lastname,
    username,email,
    password,passwordConf,
    phoneNumber,address, 
    updateName, updateLastname,
    updateUsername ,updateEmail,
    updatePassword,updatePasswordConf,
    updatePhoneNumber,updateAdress,errors};
};

export default useForm;
