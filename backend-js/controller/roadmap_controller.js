const { RoadmapModel } = require('../model/roadmap_model');

class RoadmapController {
  async index(req, res) {
    const result = await RoadmapModel.findAll();
    if (result)
      return res.status(200).json({
        length: result.length,
        data: result,
      });
    return res.json({ message: 'index route' });
  }

  async show(req, res) {
    return res.json({ message: 'show route' });
  }

  async store(req, res) {
    const { title, thumbnail, description } = req.body;
    if (title && thumbnail && description) {
      await RoadmapModel.create({
        title,
        thumbnail,
        description,
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

const RoadmapControllerInstance = new RoadmapController();

module.exports = RoadmapControllerInstance;
