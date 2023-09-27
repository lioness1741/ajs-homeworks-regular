export default class Validator {
    
    validateUsername(name) {
        return /^[a-zA-Z]{1}[a-zA-Z0-9\-_]+[a-zA-Z]{1}$/.test(name) && !/^.\d{4,}.$/.test(name);
      }
  } 