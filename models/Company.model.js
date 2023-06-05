const { Schema, model } = require("mongoose");

const Company = new Schema(
  {
    companyID: {
        type: String,
        required: [false]
      },  
    accountID: {
      type: String, // Cambiado a tipo String
      required: [true],
      unique: true,
      trim: true
    },
    
    name: {
      type: String,
      required: [true, "Name is required."],
    },
      },
  {
    timestamps: true,
  }
);

// Modificado para utilizar el modelo "Account" en lugar de "Shipment"
const AccountModel = model("Account", Account);

module.exports = AccountModel;