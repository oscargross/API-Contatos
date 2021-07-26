import mongoose from 'mongoose'

const drivers = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
    clt:{
        type: String,
        required: true
    },
    licences:[
        {
            licence:{
                type: String,
                required: true
            },
            licencePhoto:{
                type: String,
                required: true
            }
        }
    ],
    vehicles:[
        {
            idVehicle: {
                type: String,
                required: true
            },
            placa: {
                type: String,
                required: true
            },
            type: {
                type: String,
                required: true
            },            
        }
    ]
    
})

const driver = mongoose.model('drivers', drivers)
export default driver