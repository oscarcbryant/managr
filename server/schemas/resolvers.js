const { AuthenticationError } = require('apollo-server-express');
const { Profile } = require('../models');
const { signToken } = require('../utils/auth');
const { Player } = require('../models');

const resolvers = {
    Query: {
    profiles: async () => {
    return Profile.find();
    },

    profile: async (parent, { profileId }) => {
    return Profile.findOne({ _id: profileId });
    },
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
        me: async (parent, args, context) => {
        if (context.user) {
            return Profile.findOne({ _id: context.user._id });
        }
        throw new AuthenticationError('You need to be logged in!');
        },

    players: async () => {
        return Player.find().sort({ createdAt: -1 });
    },

    player: async (parent, { playerId }) => {
        return Player.findOne({ _id: playerId });
    
    }
    },

    Mutation: {
    addProfile: async (parent, { name, email, password }) => {
        const profile = await Profile.create({ name, email, password });
        const token = signToken(profile);

        return { token, profile };
    },
    login: async (parent, { email, password }) => {
        const profile = await Profile.findOne({ email });

        if (!profile) {
        throw new AuthenticationError('No profile with this email found!');
        }

        const correctPw = await profile.isCorrectPassword(password);

        if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
        }

        const token = signToken(profile);
        return { token, profile };
    },

    CreatePlayer: async (parent, { firstname, surname, age, email, position }) => {
        return Player.create({ firstname, surname, age, email, position });
    },

    removePlayer: async (parent, { playerId }) => {
        return Player.findOneAndDelete({ _id: playerId });
      },

    },
};

module.exports = resolvers;
