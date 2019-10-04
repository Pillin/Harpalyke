const validNumberRegex = /^[-]{0,1}[0-9]{0,200}[.]?[0-9]{0,3}$/;

const isValidNumber = value => validNumberRegex.test(value);

module.exports = {
  isValidNumber
};
