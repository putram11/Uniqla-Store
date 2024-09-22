import bcrypt from "bcryptjs";

export const hashPassword = (password: string): string => {
  const hashedPassword = bcrypt.hashSync(password, 10);
  return hashedPassword;
};

export const comparePassword = (
  password: string,
  hashedPassword: string
): boolean => {
  const isMatch = bcrypt.compareSync(password, hashedPassword);
  return isMatch;
};


