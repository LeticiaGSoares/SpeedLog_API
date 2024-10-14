import conn from "../config/conn.js";
import { DataTypes } from "sequelize";

const mysqlTable = "usuarios";

const Usuario = conn.define(
  mysqlTable,
  {
    usuario_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      required: true,
    },
    nome: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false,
    },
    senha: {
      type: DataTypes.STRING,
      required: false,
      allowNull: true,
      defaultValue: null
    },
    data_nascimento: {
      type: DataTypes.DATEONLY,
      required: true,
      allowNull: false
    },
    foto: {
      type: DataTypes.STRING,
      required: false,
      allowNull: true
    },
    papel: {
      type: DataTypes.ENUM,
      values: ["administrador", "motoboy", "usuario"],
      required: true,
      allowNull: false
    }
  },
  {
    tableName: mysqlTable,
  }
);

export default Usuario;
