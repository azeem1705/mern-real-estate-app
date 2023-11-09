
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    validate: {
      validator: function(v) {
        return /[A-Z]/.test(v);
      },
      message: props => `${props.value} must contain at least one capital letter`
    }
  }
});

const User = mongoose.model('User', userSchema);

export default User;
