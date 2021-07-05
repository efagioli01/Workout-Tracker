const mongoose = require('mongoose');
const Schema = mongoose.Schema
// const { Schema } = mongoose destructure

const WorkoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: () => new Date()
        },

        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: 'please enter an exercise type'
                },
                name: {
                    type: String,
                    trim: true,
                    required: 'please enter a name for the exercise'
                },
                duration: {
                    type: Number,
                    trim: true,
                    required: 'please enter a number'
                },
                weight: {
                    type: Number,
                    trim: true,
                },
                reps: {
                    type: Number,
                    trim: true,
                },
                sets: {
                    type: Number,
                    trim: true,
                },
                distance: {
                    type: Number,
                    trim: true,
                }
            }
        ]

    },
 
)

const Workout = mongoose.model('Workout', WorkoutSchema)

module.exports = Workout;