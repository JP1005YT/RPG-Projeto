const {Banco} = require("./JSONManger.js")
const DadosGame = new Banco()

class Game{
    local = "./data/game.json"
    obterdados(){
        return DadosGame.Buscar(this.local)
    }
    guardardados(json){
        DadosGame.Guardar(this.local,json)
    }

    d20(){
        let Dados = this.obterdados()
        Dados.Game.D20 = Math.floor(Math.random() * 20)
        this.guardardados(Dados)
    }
}
module.exports = {
    Game
}