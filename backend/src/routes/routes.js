import express from 'express';
import todoController from '../controllers/todo';
const router = express.Router();

router.get('/hello', (_req, res) => {
  res.json({message: 'Hello World!'});
});

// ToDo Routes
router.get('/', todoController.index);
router.post('/', todoController.create);
router.get('/:id', todoController.read);
router.put('/:id', todoController.update);
router.delete('/:id', todoController.remove);

export default router;