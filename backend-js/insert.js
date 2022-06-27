const { RoadmapModel, CoursesModel } = require('./model/roadmap_model');

const run = async () => {
  await CoursesModel.create({
    title: 'Aljabar',
    content: 'Aljabar adalah',
    roadmapId: '802270ac-a327-42c0-9da3-e7a66771f4ba',
  });
};

run();
