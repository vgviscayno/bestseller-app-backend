export const validations = {
  name: {
    regex: /^[a-zA-Z ,.'-]+$/,
    message:
      "Only letters, period[.], apostrophe['], space[ ], dash[-] and comma[,]  are allowed for names",
  },
  phoneNumber: {
    regex: /^09[0-9]{9}$/,
    message: "Please input a valid phone number (09123456789)",
  },
  password: {
    regex: /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/,
    message:
      '"password" must have: (1) at least one lowercase and uppercase letter, (2) one non-alphanumeric character, (3) one numeric character',
  },
};
