import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    first: String,
    last: String,
  },
});

userSchema.virtual("fullName").get(function () {
  return `${this.name.first} ${this.name.last}`;
});

userSchema.set("toJSON", { getters: true, virtuals: true });
userSchema.set("toObject", { getters: true, virtuals: true });

const User = mongoose.model("User", userSchema);

export default User;
