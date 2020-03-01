const {getUserId} = require('../../utils')

const note = {
  async createNote(parent, {message, tags}, context) {
    const userId = getUserId(context)
    return context.prisma.createNote({
      message,
      fontFamily: 'sans-serif',
      fontColor: '#000',
      backgroundColor: '#fff',
      author: {connect: {id: userId}},
      topic: {
        create: tags.map(tag => ({title: tag})),
      },
    })
  },

  async viewNote(parent, {id}, context) {
    const userId = getUserId(context)

    return context.prisma.updateNote({
      where: {id},
      data: {
        viewers: {
          connect: [{id: userId}],
        },
      },
    })
  },

  async favoriteNote(parent, {id}, context) {
    const userId = getUserId(context)

    return context.prisma.updateUser({
      where: {id: userId},
      data: {
        favoriteNotes: {
          connect: {id},
        },
      },
    })
  },

  async createNoteResponse(parent, {id, message}, context) {
    const userId = getUserId(context)

    return context.prisma.updateNote({
      where: {id},
      data: {
        responses: {
          create: {message, author: {connect: {id: userId}}},
        },
      },
    })
  },
}

module.exports = {note}
