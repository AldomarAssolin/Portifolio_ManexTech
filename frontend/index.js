import express from 'express'
import ejs from 'ejs';
import projects from './public/js/projects.cjs';
import cursos from './public/js/cursos.cjs';
import * as fs from 'fs'; // Importe o módulo fs
const app = express();

app.set('view engine', 'ejs'); // Define o mecanismo de visualização como EJS
app.use(express.static('public')); // Define a pasta para arquivos estáticos (CSS, imagens, etc.)

app.get('/', (req, res) => {

    try {
        // Importar o conteúdo do package.json como uma string
        const packageJsonContent = fs.readFileSync('./package.json', 'utf-8');

        // Converter o conteúdo do JSON para um objeto
        const packageJson = JSON.parse(packageJsonContent);
    
        const authorName = packageJson.author;
    
        res.render('index', {projects, cursos, authorName}); // Renderiza o arquivo EJS chamado "index.ejs" na pasta "views"
      } catch (error) {
        console.error('Erro:', error);
        res.status(500).send('Erro interno do servidor');
      }
    
    
});

app.listen(3003, () => {
    console.log('Servidor iniciado na porta 3000');
});