const { Pacotes } = require("../configs/Pacotes.js");
const P = new Pacotes()

class Banco{
    fs = P.fs

    Guardar(Local,Conteudo) {
        this.fs.writeFileSync(Local, JSON.stringify(Conteudo))
    }

    Buscar(Local){
        return JSON.parse(this.fs.readFileSync(Local))
    }
}

module.exports = {
    Banco
}