const sequilze = require('../core/database');
const { DataTypes } = require('sequelize');

const RoadmapModel = sequilze.define('Roadmap', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM,
    values: ['waiting', 'published', 'rejected'],
    defaultValue: 'waiting',
  },
  thumbnail: DataTypes.STRING,
  title: DataTypes.STRING,
  description: DataTypes.TEXT,
});

const CoursesModel = sequilze.define('Courses', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM,
    values: ['waiting', 'published', 'rejected'],
    defaultValue: 'waiting',
  },
  thumbnail: DataTypes.STRING,
  title: DataTypes.STRING,
  content: DataTypes.TEXT,
});

CoursesModel.belongsTo(RoadmapModel, {
  foreignKey: 'roadmapId',
  as: 'roadmap',
});
RoadmapModel.hasMany(CoursesModel, { as: 'courses' });

const createDatabase = async () => {
  await RoadmapModel.sync();
  await CoursesModel.sync();
};

createDatabase();

module.exports = { RoadmapModel, CoursesModel };
