module.exports = function(sequelize, DataTypes) {
  const EnergySource = sequelize.define("EnergySource", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    typeName: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]  
    }
  });

  EnergySource.associate = function(models){
    EnergySource.belongsToMany(models.Generation, {
      through: "GenerationEnergySource"
    });
  };

  return EnergySource;
}