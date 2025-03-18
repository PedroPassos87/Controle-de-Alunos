import Aluno from "../models/Aluno";

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: "Giovanna",
      sobrenome: "Passos",
      email: "gi@gmail.com",
      idade: 17,
      peso: 45,
      altura: 1.65

    });
    res.json({novoAluno});
  }
}

export default new HomeController();
