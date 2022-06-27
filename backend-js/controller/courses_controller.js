const { CoursesModel } = require('../model/roadmap_model');

class CoursesController {
  async index(req, res) {
    const result = await CoursesModel.findAll();
    if (result)
      return res.status(200).json({
        length: result.length,
        data: result,
      });
    return res.status(404).json({ message: 'courses not founde' });
  }

  async show(req, res) {
    return res.json({ message: 'show route' });
  }

  async store(req, res) {
    const { title, thumbnail, content, roadmapId } = req.body;
    if (title && thumbnail && content && roadmapId) {
      await CoursesModel.create({
        title: title,
        thumbnail: thumbnail,
        content: content,
        roadmapId: roadmapId,
      });
      return res.status(201).json({ message: 'success' });
    }
    return res.status(401).json({ message: 'you need to pass body' });
  }

  async update(req, res) {
    return res.json({ message: 'update route' });
  }

  async destroy(req, res) {
    return res.json({ message: 'destroy route' });
  }
}

const CoursesControllerInstance = new CoursesController();

module.exports = CoursesControllerInstance;
