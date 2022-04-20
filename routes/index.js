const express = require('express');
const CursoController = require('../controllers/cursos.controller');

const routes = express.Router();

routes.post('/cursos', CursoController.cadastrarCurso);
routes.get('/CURSOS', CursoController.listarCursos);
routes.delete('/cursos/:id', CursoController.deletarCurso);

module.exports = routes;