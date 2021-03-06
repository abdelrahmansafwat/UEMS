require("dotenv").config();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.connect(process.env.MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true });
mongoose.set('useFindAndModify', false);

let employeeSchema = new Schema({
    email: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    nationalId: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    gender: { type: String, required: true },
    status: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    qualification: { type: Schema.Types.Mixed, required: true },
    training: { type: Schema.Types.Mixed, required: true },
    job: { type: String, required: true },
    contractStartDate: { type: Date, required: true },
    endServiceDate: { type: Date, required: true },
    center: { type: String, required: true },
    management: { type: String, required: true },
    salaryRange: { type: String, required: true },
    faculty: { type: String },
    careerLadder: { type: String },
    employmentStatus: { type: String, required: true },
    assignSecondDate: { type: Date },
    assignSecondAuthority: { type: String },
    fileNames: { type: [String], required: true },
});

let employeeModel = mongoose.model("employeeModel", employeeSchema);

module.exports = employeeModel;