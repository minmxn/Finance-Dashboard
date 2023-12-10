// goal: to setup schema by reading the data from data.js
import mongoose from "mongoose"
import {loadType} from "mongoose-currency"

// things to note: this file doesnt detect typo
// setup Schema
const Schema = mongoose.Schema
loadType(mongoose) // access mongoose-currency

// Create Monthly Schema
const monthSchema = new Schema(
    {
        // set the type for each variable
        month: String,
        revenue : {
            type: mongoose.Types.Currency, // by default, you will be using mongoose currency
            currency: "USD", // display the currency in USD
            get: (v) => v / 100 // divide by 100 because that is how the mongoose currency work. however, we are allowed to do customization and conversion on our own
        },
        expenses: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v / 100
        },
        operationalExpenses: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v / 100
        },
        nonOperationalExpenses: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v / 100
        },
    },
    {toJSON:{getters: true}} // by default we need to set this so that we can us ethe getter function "get: (v)..."
)

const daySchema = new Schema (
    {
        // set the type for each variable
        date: String,
        revenue : {
            type: mongoose.Types.Currency, // by default, you will be using mongoose currency
            currency: "USD", // display the currency in USD
            get: (v) => v / 100 // divide by 100 because that is how the mongoose currency work. however, we are allowed to do customization and conversion on our own
        },
        expenses: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v / 100
        },
    },
    {toJSON:{getters: true}}
)
// Create Key Performance Indicators Schema
const KPISchema = new Schema(
    {
        // set the type for each variable
        totalProfit: {
            type: mongoose.Types.Currency,
            currency: "USD", // use currency you wish to use
            get: (v) => v / 100 // grab the value in the currency and divide by 100 to get the true value
        },
        totalRevenue: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v / 100
        },
        totalExpenses: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v / 100
        },
        expensesByCategory: {
            type: Map,
            of: {
                type: mongoose.Types.Currency,
                currency: "USD",
                get: (v) => v / 100
            }
        },
        monthlyData: [monthSchema], // array of month schema
        dailyData : [daySchema],
    },
    { timestamps: true, toJSON: {getters: true}} // timeStamp: true helps to display timestamp when the objects are created, providing more convenience
)

const KPI = mongoose.model("KPI", KPISchema)

export default KPI

// Key Performance Indicators
// totalProfit : currency
// totalRevenue : currency
// totalExpenses : currency
// expensesByCategory : Map<string:currency>
// dailyData : Array<Object>
// monthlyData : Array<Object>

// Transaction
// id : mongoDB ID
// buyer : String
// amount : currency
// productIds : Arrat<mogoDB Id>

// Product
// id : mongoDB ID 
// price : currency
// expense : currency
// transactions :  Array<monoDB ID>