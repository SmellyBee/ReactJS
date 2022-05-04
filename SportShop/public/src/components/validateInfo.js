export default function validateInfo(name,lastname,
  username,email,
  password,passwordConf,
  phoneNumber,address) {
    let errors = {};
    if (!name) {
      errors.name = 'Ime je obavezno!';
    }
    
    if (!lastname) {
      errors.lastname = 'Prezime je obavezno!';
    }
    if (!username) {
      errors.username = 'Korisničko ime je obavezno!';
    }
    else if (!/^[A-Za-z]+/.test(name.trim())) {
      errors.name = 'Enter a valid name';
    }
  
    if (!email) {
      errors.email = 'Email je obavezan!';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email address is invalid';
    }
    if (!password) {
      errors.password = 'Šifra je obavezna';
    } else if (password.length < 6) {
      errors.password = 'Šifra se mora sastojati barem od 6 karaktera!';
    }
  
    if (!passwordConf) {
      errors.passwordConf = 'Šifra je obavezna';
    } else if (passwordConf !== password) {
      errors.passwordConf = 'Šifre se ne poklapaju';
    }

    if (!phoneNumber) {
      errors.phoneNumber = 'Broj telefona je obavezan!';
    }

    if (!address) {
      errors.address = 'Adresa je obavezna';
    }
    return errors;
  }
  