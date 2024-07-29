import mongoose from 'mongoose'

const vehicleSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },

        description: {
            type: String,
            required: true,
        },

        price: {
            type: Number,
            required: true,
        },

        manufacture: {
            type: String
        },

        model: {
            type: Number,
            required:true,
        },
    },

    {
        timestamps: true,
    },
);

export const Vehicle = mongoose.model('Vehicle', vehicleSchema);