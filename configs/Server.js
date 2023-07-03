const { Pacotes } = require("./Pacotes.js");
const P = new Pacotes()

class Server{
    app = P.express();
    PORT = 3000;
    
    start(){
        this.app.set('view engine', 'ejs');
        this.app.use(P.bodyparser.urlencoded({ extended: false }));
        this.app.use(P.bodyparser.json());
        this.app.use(function (req, res, next) {
            res.setHeader('Access-Control-Allow-Origin', '*');
            next();
        });
        this.app.use(P.express.static(P.path.join("public")));
        this.app.use(P.cors());
        this.app.listen(this.PORT, () => {
            console.log(`Servidor rodando na porta ${this.PORT}`);
        });
    }
}

module.exports = {
    Server
}