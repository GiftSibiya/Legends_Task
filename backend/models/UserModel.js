import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});
const UserModel = mongoose.model("user", userSchema);
export default UserModel;
