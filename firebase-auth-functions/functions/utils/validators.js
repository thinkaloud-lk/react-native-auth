const Joi = require('@hapi/joi');

// const isEmpty = string => {
//   if (string.trim() === '') return true;
//   else return false;
// };

// const isValidEmail = email => {
//   const emailRegEx = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   if (email.match(emailRegEx)) return true;
//   else return false;
// };

// const validateSignUpData = newUser => {
//   const errors = {};
//   if (isEmpty(newUser.email)) {
//     errors.email = 'Email must not be empty';
//   } else if (!isValidEmail(newUser.email)) {
//     errors.email = 'Email is not valid';
//   } else if (isEmpty(newUser.password)) {
//     errors.password = 'Password must not be empty';
//   } else if (isEmpty(newUser.firstName)) {
//     errors.firstName = 'First name must not be empty';
//   } else if (isEmpty(newUser.lastName)) {
//     errors.lastName = 'Last Name must not be empty';
//   }

//   const valid = Object.keys(errors) > 0 ? false : true;

//   return {
//     errors,
//     valid,
//   };
// };

// const validateSignInData = user => {
//   const errors = {};
//   if (isEmpty(user.email)) {
//     errors.email = 'Email must not be empty';
//   } else if (!isValidEmail(user.email)) {
//     errors.email = 'Email is not valid';
//   } else if (isEmpty(user.password)) {
//     errors.password = 'Password must not be empty';
//   }
//   const valid = Object.keys(errors) > 0 ? false : true;
//   console.log(errors);
//   return {
//     errors,
//     valid,
//   };
// };

const validateSignUpData = newUser => {
  const schema = Joi.object({
    email: Joi.string()
      .min(5)
      .max(255)
      .required()
      .email(),
    password: Joi.string()
      .min(5)
      .max(255)
      .required(),
    firstName: Joi.string()
      .min(5)
      .max(255),
    lastName: Joi.string()
      .min(5)
      .max(255),
  });

  return schema.validate(newUser);
};

const validateSignInData = newUser => {
  const schema = Joi.object({
    email: Joi.string()
      .min(5)
      .max(255)
      .required()
      .email(),
    password: Joi.string()
      .min(5)
      .max(255)
      .required(),
  });

  return schema.validate(newUser);
};

module.exports = {
  validateSignUpData,
  validateSignInData,
};
