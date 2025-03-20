import Sequelize, {Model} from "sequelize";

export default class Aluno extends Model{
  static init(sequelize){
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: ' ',
        validate:{
          len: {
            args: [3,255],
            msg:'Nome precisa ter mais de 3 e menos de 255 caracteres',
          },
        },
      },
      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: ' ',
        validate:{
          len: {
            args: [3,255],
            msg:'Sobrenome precisa ter mais de 3 e menos de 255 caracteres',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: ' ',
        unique: {
          msg: 'Email ja existe'
        },
        validate:{
          isEmail: {
            msg:'Email inválido',
          },
        },
      },
      idade: {
        type: Sequelize.INTEGER,
        defaultValue: ' ',
        validate:{
          isInt: {
            msg:'Idade precisa ser um numero inteiro',
          },
        },
      },
      peso: {
        type: Sequelize.FLOAT,
        defaultValue: ' ',
        validate:{
          isFloat: {
            msg:'Peso inválido',
          },
        },
      },
      altura: {
        type: Sequelize.FLOAT,
        defaultValue: ' ',
        validate:{
          isFloat: {
            msg:'Altura inválida',
          },
        },
      },

    },
    {
      sequelize
    });
    return this;
  }
}
