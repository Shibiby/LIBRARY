const express = require('express');
const bookController = require('../controllers/bookController');

const bookRouter = express.Router();
const bookService = require('../services/goodreadsServices');

function router(nav) {
  const { getIndex, getById, middleware } = bookController(bookService, nav);
  //  authorizing user
  bookRouter.use(middleware);

  //  end of authorization
  bookRouter.route('/')
    .get(getIndex);
  bookRouter.route('/:id')
    .get(getById);
  return bookRouter;
}

module.exports = router;
