    const { Schema, model } = require("mongoose");

    const Account = new Schema(
    {
        accountID: {
        type: String, // Cambiado a tipo String
        required: [true],
        unique: true,
        trim: true
        },
        email: {
        type: String,
        required: [true, "Email is required."],
        unique: true,
        lowercase: true,
        trim: true,
        },
        password: {
        type: String,
        required: [true, "Password is required."],
        },
        name: {
        type: String,
        required: [true, "Name is required."],
        },
        isCompany: {
        type: Boolean,
        required: [true],
        },
        companyID: {
        type: String,
        required: [false]
        },
        isProfessional: {
        type: Boolean,
        required: [true],
        },
        professionalID: {
        type: String,
        required: [false]
        },
    }
    );

    // Modificado para utilizar el modelo "Account" en lugar de "Shipment"
    const AccountModel = model("Account", Account);

    module.exports = AccountModel;