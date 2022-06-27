const express = require('express');
const RoadmapController = require('../controller/roadmap_controller');
const CoursesController = require('../controller/courses_controller');
const router = express.Router();

router.get('/roadmap', RoadmapController.index);
router.get('/roadmap/:id', RoadmapController.show);
router.post('/roadmap', RoadmapController.store);
router.put('/roadmap/:id', RoadmapController.update);
router.delete('/roadmap/:id', RoadmapController.destroy);

router.get('/courses', CoursesController.index);
router.get('/courses/:id', CoursesController.show);
router.post('/courses', CoursesController.store);
router.put('/courses/:id', CoursesController.update);
router.delete('/courses/:id', CoursesController.destroy);

module.exports = router;
