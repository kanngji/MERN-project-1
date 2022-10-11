const mongoose = require("mongoose"); // 몽구스 db 스키마를 쓰니까 require("mongoose")를 한다

const Schema = mongoose.Schema; // Schema는 몽구스 Schema를 사용

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
