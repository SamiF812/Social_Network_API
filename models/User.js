const { Schema, model} = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            unique: true,
            required: [true, 'Must enter an email address.'],
            match: [/.+@.+\..+/, 'Email does not match.'],
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId, 
                ref: 'User'
            },  
        ],
    },
    
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);
userSchema
.virtual('friendCount')
    .get( function() {
        if (this.friends === undefined) {
            return 0;
        } else {
        return this.friends.length; }
    });


const User = model('User', userSchema);

module.exports = User;