// dependencies
const { Schema, model } = require('mongoose');
const moment = require('moment');

// pseudocode
// username: String, Unique, Required, Trimmed
// email: String, Required, Unique, Validate against Mongoose
// thoughts: Array of the thought model
// friends: Array of the friends model
// friendCount: Virtual that retrieves the length of the user's friend's array

// create User Schema
const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            match: [
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                'email is invalid'
            ]
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

UserSchema.virtual('friendCount').get(function() {
    // console.log(this.friends.length);
    return this.friends.length;
});

// create the User model using the UserSchema
const User = model('User', UserSchema);

// export the User model
module.exports = User;