const { Server } = require("./configs/Server.js");
const { Pacotes } = require("./configs/Pacotes.js");
const P = new Pacotes()
const Servidor = new Server()

Servidor.start()
const app = Servidor.app

app.get("/", async function(req, res) {

});

app.get("/:page", (req, res) => {
    const page = req.params.page;
    const filePath = P.path.join(__dirname, "Pages", page, "index.html");
    
    res.sendFile(filePath);
  });
  
