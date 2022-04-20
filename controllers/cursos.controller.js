let listaDeCursos = require('../models/cursos.json');
const fs = require('fs');

const CursoController = {
    cadastrarCurso(req, res){
        const { titulo, descricao, professor } = req.body;

        // Parametro vazio é undefined, considerado falsy.
        if(!titulo || !descricao || !professor){
            return res.status(400).json({error: 'Você precisa passar os atributos corretamente.'})
        }

        listaDeCursos.push({
            id: listaDeCursos.length,
            titulo,
            descricao,
            professor,
        });

        fs.writeFileSync('./models/cursos.json', JSON.stringify(listaDeCursos));

        res.status(201).json({message: 'Cadastro efetuado com sucesso!'});
    },

    listarCursos(req, res){

        const listaDeCursos = fs.readFileSync("./models/cursos.json", 'utf-8');

        res.status(200).send(listaDeCursos);
    },

    deletarCurso(req, res) {
        const { id } = req.params;
        let novaLista = [];


        listaDeCursos.forEach(curso => {
            if (curso.id != id) {
                novaLista.push(curso);
            };
        });

        fs.writeFileSync('./models/cursos.json', JSON.stringify(novaLista));

        res.sendStatus(204);
    }
};

module.exports = CursoController;