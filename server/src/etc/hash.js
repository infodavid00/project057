import bcrypt from "bcryptjs";

export default class Hash {
  constructor(token) {
    this.token = token;
  }
  async sign() {
    try {
      const result = await bcrypt.hash(this.token, 10);
      return result;
    } catch (err) {
      throw err;
    }
  }

  async compare(hashedstr) {
    try {
      const result = await bcrypt.compare(this.token, hashedstr);
      return result;
    } catch (err) {
      throw err;
    }
  }
}
