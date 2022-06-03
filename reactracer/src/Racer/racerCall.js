const appendedSeparator = {
  boolean: " t",
  string: " ",
  number: " ",
};

export const racerCall = (...args) => {
  const inputArguments = [...args];

  inputArguments.map((arg) => appendedSeparator[typeof arg]);
  let call = inputArguments.join(" ");

  const racerCommand = `(${call})\r\n`;

  return racerCommand;
};
