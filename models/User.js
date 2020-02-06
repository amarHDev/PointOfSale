const Sequelize = require("sequelize");

const sequelize = new Sequelize("posdb", "root", "", {
  hostname: "localhost",
  dialect: "mysql"
});

sequelize

  .authenticate()
  .then(() => {
    console.log(" connection has been esblished successfuly");
  })
  .catch(err => {
    console.log(" unable to connect");
  });





const User = sequelize.define("user", {
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = User;
