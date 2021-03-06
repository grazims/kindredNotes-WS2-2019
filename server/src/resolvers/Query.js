const {getUserId} = require('../utils')
const CITIES = require('cities.json')

const Query = {
  users(parent, args, context) {
    return context.prisma.users()
  },

  note(parent, {id}, context) {
    return context.prisma.note({id})
  },

  inbox: async (parent, args, context) => {
    const userId = getUserId(context)
    const interests = await context.prisma.user({id: userId}).interests()

    return context.prisma.notes({
      where: {
        AND: [
          {
            author: {
              id_not: userId,
            },
          },

          {
            topic_some: {
              title_in: interests.map(d => d.title),
            },
          },
        ],
      },
    })
  },

  outbox: async (parent, args, context) => {
    const userId = getUserId(context)

    return context.prisma.notes({
      where: {
        author: {
          id: userId,
        },
      },
    })
  },

  me(parent, args, context) {
    const id = getUserId(context)
    return context.prisma.user({id})
  },

  validateCity(parent, {city}, context) {
    return CITIES.some(({name}) => name.toLowerCase() === city.toLowerCase())
  },

  getCityCoords(parent, {city}, context) {
    const cityData = CITIES.find(
      ({name}) => name.toLowerCase() === city.toLowerCase(),
    )

    if (!cityData) return null

    const {lat, lng} = cityData
    return {lat, lng}
  },
}

module.exports = {Query}
