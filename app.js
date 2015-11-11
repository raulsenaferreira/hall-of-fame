var mongoose = require('mongoose');

var db = mongoose.connection;

db.on('error', console.error);
db.once('open', function() {
  // Create your schemas and models here.
  
});

var professor = new mongoose.Schema({
    nome: { type: String }
  , materia: String
  , pontualidade: {type: String, default: "Desaparecido(a)"}
  , didatica: String
  , dominioAssunto: String
  , entusiasmo: String
  , justo: String
  , atualizado_em: { type: Date, default: Date.now }
  });

var aluno = new mongoose.Schema({
    matricula: { type: String }
  , curso: String
  , periodo: {type: String, default: "Desaparecido(a)"}
  , atualizado_em: { type: Date, default: Date.now }
  });

var Professor = mongoose.model('Professor', professor);
var Aluno = mongoose.model('Aluno', aluno);
