import { Schema, Types, model, Model } from 'mongoose'
import { Car } from '../interfaces/Car.interface'

const ItemSchema = new Schema<Car>(
    {
        color: {
            type: String,
        },
        gas: {
            type: String,
            enum: ["gasoline", "electric"]
        },
        year: {
            type: Number,
        }

    },
    {
        timestamps: true,
        versionKey: false,
    },
)