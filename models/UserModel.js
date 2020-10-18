let UserSchema = require("../mongooseModel/User");
let mongoose = require("mongoose");
let User = mongoose.model("User", UserSchema);

module.exports = {
  //add new user in database
  createUser: async (data, id) => {
    var user = await User.findOne({}).sort({ _id: -1 }).limit(1);
    if (user && user.seq) {
      data.seq = user.seq + 1;
    } else {
      data.seq = 1;
    }
    var transaction = await new User(data).save();
    return transaction;
  },
  //get all user based on limit and skip
  getUsers: async (data) => {
    var skip = parseInt(data.start);
    var limit = parseInt(data.count);
    var users = await User.find({}).skip(skip).limit(limit);
    return users;
  },
};
