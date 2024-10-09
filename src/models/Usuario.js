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
    papel: {
      type: DataTypes.ENUM,
      values: ["administrador", "autor", "leitor"],
      defaultValue: "leitor",
      required: true,
      allowNull: false,
    },
  },
  {
    tableName: mysqlTable,
  }
);

export default Usuario;
