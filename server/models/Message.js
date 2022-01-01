module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define("Message", {
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
  return Message;
};
