module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.23.0-test.3). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateInterest {
  count: Int!
}

type AggregateNote {
  count: Int!
}

type AggregateNoteResponse {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Interest {
  id: ID!
  title: String!
}

type InterestConnection {
  pageInfo: PageInfo!
  edges: [InterestEdge]!
  aggregate: AggregateInterest!
}

input InterestCreateInput {
  id: ID
  title: String!
}

input InterestCreateManyInput {
  create: [InterestCreateInput!]
  connect: [InterestWhereUniqueInput!]
}

type InterestEdge {
  node: Interest!
  cursor: String!
}

enum InterestOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
}

type InterestPreviousValues {
  id: ID!
  title: String!
}

input InterestScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  AND: [InterestScalarWhereInput!]
  OR: [InterestScalarWhereInput!]
  NOT: [InterestScalarWhereInput!]
}

type InterestSubscriptionPayload {
  mutation: MutationType!
  node: Interest
  updatedFields: [String!]
  previousValues: InterestPreviousValues
}

input InterestSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: InterestWhereInput
  AND: [InterestSubscriptionWhereInput!]
  OR: [InterestSubscriptionWhereInput!]
  NOT: [InterestSubscriptionWhereInput!]
}

input InterestUpdateDataInput {
  title: String
}

input InterestUpdateInput {
  title: String
}

input InterestUpdateManyDataInput {
  title: String
}

input InterestUpdateManyInput {
  create: [InterestCreateInput!]
  update: [InterestUpdateWithWhereUniqueNestedInput!]
  upsert: [InterestUpsertWithWhereUniqueNestedInput!]
  delete: [InterestWhereUniqueInput!]
  connect: [InterestWhereUniqueInput!]
  set: [InterestWhereUniqueInput!]
  disconnect: [InterestWhereUniqueInput!]
  deleteMany: [InterestScalarWhereInput!]
  updateMany: [InterestUpdateManyWithWhereNestedInput!]
}

input InterestUpdateManyMutationInput {
  title: String
}

input InterestUpdateManyWithWhereNestedInput {
  where: InterestScalarWhereInput!
  data: InterestUpdateManyDataInput!
}

input InterestUpdateWithWhereUniqueNestedInput {
  where: InterestWhereUniqueInput!
  data: InterestUpdateDataInput!
}

input InterestUpsertWithWhereUniqueNestedInput {
  where: InterestWhereUniqueInput!
  update: InterestUpdateDataInput!
  create: InterestCreateInput!
}

input InterestWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  AND: [InterestWhereInput!]
  OR: [InterestWhereInput!]
  NOT: [InterestWhereInput!]
}

input InterestWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createInterest(data: InterestCreateInput!): Interest!
  updateInterest(data: InterestUpdateInput!, where: InterestWhereUniqueInput!): Interest
  updateManyInterests(data: InterestUpdateManyMutationInput!, where: InterestWhereInput): BatchPayload!
  upsertInterest(where: InterestWhereUniqueInput!, create: InterestCreateInput!, update: InterestUpdateInput!): Interest!
  deleteInterest(where: InterestWhereUniqueInput!): Interest
  deleteManyInterests(where: InterestWhereInput): BatchPayload!
  createNote(data: NoteCreateInput!): Note!
  updateNote(data: NoteUpdateInput!, where: NoteWhereUniqueInput!): Note
  updateManyNotes(data: NoteUpdateManyMutationInput!, where: NoteWhereInput): BatchPayload!
  upsertNote(where: NoteWhereUniqueInput!, create: NoteCreateInput!, update: NoteUpdateInput!): Note!
  deleteNote(where: NoteWhereUniqueInput!): Note
  deleteManyNotes(where: NoteWhereInput): BatchPayload!
  createNoteResponse(data: NoteResponseCreateInput!): NoteResponse!
  updateNoteResponse(data: NoteResponseUpdateInput!, where: NoteResponseWhereUniqueInput!): NoteResponse
  updateManyNoteResponses(data: NoteResponseUpdateManyMutationInput!, where: NoteResponseWhereInput): BatchPayload!
  upsertNoteResponse(where: NoteResponseWhereUniqueInput!, create: NoteResponseCreateInput!, update: NoteResponseUpdateInput!): NoteResponse!
  deleteNoteResponse(where: NoteResponseWhereUniqueInput!): NoteResponse
  deleteManyNoteResponses(where: NoteResponseWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type Note {
  id: ID!
  createdAt: DateTime!
  message: String!
  author: User!
  topic(where: InterestWhereInput, orderBy: InterestOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Interest!]
  responses(where: NoteResponseWhereInput, orderBy: NoteResponseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [NoteResponse!]
  viewers(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  fontFamily: String!
  fontColor: String!
  backgroundColor: String!
}

type NoteConnection {
  pageInfo: PageInfo!
  edges: [NoteEdge]!
  aggregate: AggregateNote!
}

input NoteCreateInput {
  id: ID
  message: String!
  author: UserCreateOneInput!
  topic: InterestCreateManyInput
  responses: NoteResponseCreateManyInput
  viewers: UserCreateManyInput
  fontFamily: String!
  fontColor: String!
  backgroundColor: String!
}

input NoteCreateManyInput {
  create: [NoteCreateInput!]
  connect: [NoteWhereUniqueInput!]
}

type NoteEdge {
  node: Note!
  cursor: String!
}

enum NoteOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  message_ASC
  message_DESC
  fontFamily_ASC
  fontFamily_DESC
  fontColor_ASC
  fontColor_DESC
  backgroundColor_ASC
  backgroundColor_DESC
}

type NotePreviousValues {
  id: ID!
  createdAt: DateTime!
  message: String!
  fontFamily: String!
  fontColor: String!
  backgroundColor: String!
}

type NoteResponse {
  id: ID!
  createdAt: DateTime!
  message: String!
  author: User!
}

type NoteResponseConnection {
  pageInfo: PageInfo!
  edges: [NoteResponseEdge]!
  aggregate: AggregateNoteResponse!
}

input NoteResponseCreateInput {
  id: ID
  message: String!
  author: UserCreateOneInput!
}

input NoteResponseCreateManyInput {
  create: [NoteResponseCreateInput!]
  connect: [NoteResponseWhereUniqueInput!]
}

type NoteResponseEdge {
  node: NoteResponse!
  cursor: String!
}

enum NoteResponseOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  message_ASC
  message_DESC
}

type NoteResponsePreviousValues {
  id: ID!
  createdAt: DateTime!
  message: String!
}

input NoteResponseScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  message: String
  message_not: String
  message_in: [String!]
  message_not_in: [String!]
  message_lt: String
  message_lte: String
  message_gt: String
  message_gte: String
  message_contains: String
  message_not_contains: String
  message_starts_with: String
  message_not_starts_with: String
  message_ends_with: String
  message_not_ends_with: String
  AND: [NoteResponseScalarWhereInput!]
  OR: [NoteResponseScalarWhereInput!]
  NOT: [NoteResponseScalarWhereInput!]
}

type NoteResponseSubscriptionPayload {
  mutation: MutationType!
  node: NoteResponse
  updatedFields: [String!]
  previousValues: NoteResponsePreviousValues
}

input NoteResponseSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: NoteResponseWhereInput
  AND: [NoteResponseSubscriptionWhereInput!]
  OR: [NoteResponseSubscriptionWhereInput!]
  NOT: [NoteResponseSubscriptionWhereInput!]
}

input NoteResponseUpdateDataInput {
  message: String
  author: UserUpdateOneRequiredInput
}

input NoteResponseUpdateInput {
  message: String
  author: UserUpdateOneRequiredInput
}

input NoteResponseUpdateManyDataInput {
  message: String
}

input NoteResponseUpdateManyInput {
  create: [NoteResponseCreateInput!]
  update: [NoteResponseUpdateWithWhereUniqueNestedInput!]
  upsert: [NoteResponseUpsertWithWhereUniqueNestedInput!]
  delete: [NoteResponseWhereUniqueInput!]
  connect: [NoteResponseWhereUniqueInput!]
  set: [NoteResponseWhereUniqueInput!]
  disconnect: [NoteResponseWhereUniqueInput!]
  deleteMany: [NoteResponseScalarWhereInput!]
  updateMany: [NoteResponseUpdateManyWithWhereNestedInput!]
}

input NoteResponseUpdateManyMutationInput {
  message: String
}

input NoteResponseUpdateManyWithWhereNestedInput {
  where: NoteResponseScalarWhereInput!
  data: NoteResponseUpdateManyDataInput!
}

input NoteResponseUpdateWithWhereUniqueNestedInput {
  where: NoteResponseWhereUniqueInput!
  data: NoteResponseUpdateDataInput!
}

input NoteResponseUpsertWithWhereUniqueNestedInput {
  where: NoteResponseWhereUniqueInput!
  update: NoteResponseUpdateDataInput!
  create: NoteResponseCreateInput!
}

input NoteResponseWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  message: String
  message_not: String
  message_in: [String!]
  message_not_in: [String!]
  message_lt: String
  message_lte: String
  message_gt: String
  message_gte: String
  message_contains: String
  message_not_contains: String
  message_starts_with: String
  message_not_starts_with: String
  message_ends_with: String
  message_not_ends_with: String
  author: UserWhereInput
  AND: [NoteResponseWhereInput!]
  OR: [NoteResponseWhereInput!]
  NOT: [NoteResponseWhereInput!]
}

input NoteResponseWhereUniqueInput {
  id: ID
}

input NoteScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  message: String
  message_not: String
  message_in: [String!]
  message_not_in: [String!]
  message_lt: String
  message_lte: String
  message_gt: String
  message_gte: String
  message_contains: String
  message_not_contains: String
  message_starts_with: String
  message_not_starts_with: String
  message_ends_with: String
  message_not_ends_with: String
  fontFamily: String
  fontFamily_not: String
  fontFamily_in: [String!]
  fontFamily_not_in: [String!]
  fontFamily_lt: String
  fontFamily_lte: String
  fontFamily_gt: String
  fontFamily_gte: String
  fontFamily_contains: String
  fontFamily_not_contains: String
  fontFamily_starts_with: String
  fontFamily_not_starts_with: String
  fontFamily_ends_with: String
  fontFamily_not_ends_with: String
  fontColor: String
  fontColor_not: String
  fontColor_in: [String!]
  fontColor_not_in: [String!]
  fontColor_lt: String
  fontColor_lte: String
  fontColor_gt: String
  fontColor_gte: String
  fontColor_contains: String
  fontColor_not_contains: String
  fontColor_starts_with: String
  fontColor_not_starts_with: String
  fontColor_ends_with: String
  fontColor_not_ends_with: String
  backgroundColor: String
  backgroundColor_not: String
  backgroundColor_in: [String!]
  backgroundColor_not_in: [String!]
  backgroundColor_lt: String
  backgroundColor_lte: String
  backgroundColor_gt: String
  backgroundColor_gte: String
  backgroundColor_contains: String
  backgroundColor_not_contains: String
  backgroundColor_starts_with: String
  backgroundColor_not_starts_with: String
  backgroundColor_ends_with: String
  backgroundColor_not_ends_with: String
  AND: [NoteScalarWhereInput!]
  OR: [NoteScalarWhereInput!]
  NOT: [NoteScalarWhereInput!]
}

type NoteSubscriptionPayload {
  mutation: MutationType!
  node: Note
  updatedFields: [String!]
  previousValues: NotePreviousValues
}

input NoteSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: NoteWhereInput
  AND: [NoteSubscriptionWhereInput!]
  OR: [NoteSubscriptionWhereInput!]
  NOT: [NoteSubscriptionWhereInput!]
}

input NoteUpdateDataInput {
  message: String
  author: UserUpdateOneRequiredInput
  topic: InterestUpdateManyInput
  responses: NoteResponseUpdateManyInput
  viewers: UserUpdateManyInput
  fontFamily: String
  fontColor: String
  backgroundColor: String
}

input NoteUpdateInput {
  message: String
  author: UserUpdateOneRequiredInput
  topic: InterestUpdateManyInput
  responses: NoteResponseUpdateManyInput
  viewers: UserUpdateManyInput
  fontFamily: String
  fontColor: String
  backgroundColor: String
}

input NoteUpdateManyDataInput {
  message: String
  fontFamily: String
  fontColor: String
  backgroundColor: String
}

input NoteUpdateManyInput {
  create: [NoteCreateInput!]
  update: [NoteUpdateWithWhereUniqueNestedInput!]
  upsert: [NoteUpsertWithWhereUniqueNestedInput!]
  delete: [NoteWhereUniqueInput!]
  connect: [NoteWhereUniqueInput!]
  set: [NoteWhereUniqueInput!]
  disconnect: [NoteWhereUniqueInput!]
  deleteMany: [NoteScalarWhereInput!]
  updateMany: [NoteUpdateManyWithWhereNestedInput!]
}

input NoteUpdateManyMutationInput {
  message: String
  fontFamily: String
  fontColor: String
  backgroundColor: String
}

input NoteUpdateManyWithWhereNestedInput {
  where: NoteScalarWhereInput!
  data: NoteUpdateManyDataInput!
}

input NoteUpdateWithWhereUniqueNestedInput {
  where: NoteWhereUniqueInput!
  data: NoteUpdateDataInput!
}

input NoteUpsertWithWhereUniqueNestedInput {
  where: NoteWhereUniqueInput!
  update: NoteUpdateDataInput!
  create: NoteCreateInput!
}

input NoteWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  message: String
  message_not: String
  message_in: [String!]
  message_not_in: [String!]
  message_lt: String
  message_lte: String
  message_gt: String
  message_gte: String
  message_contains: String
  message_not_contains: String
  message_starts_with: String
  message_not_starts_with: String
  message_ends_with: String
  message_not_ends_with: String
  author: UserWhereInput
  topic_every: InterestWhereInput
  topic_some: InterestWhereInput
  topic_none: InterestWhereInput
  responses_every: NoteResponseWhereInput
  responses_some: NoteResponseWhereInput
  responses_none: NoteResponseWhereInput
  viewers_every: UserWhereInput
  viewers_some: UserWhereInput
  viewers_none: UserWhereInput
  fontFamily: String
  fontFamily_not: String
  fontFamily_in: [String!]
  fontFamily_not_in: [String!]
  fontFamily_lt: String
  fontFamily_lte: String
  fontFamily_gt: String
  fontFamily_gte: String
  fontFamily_contains: String
  fontFamily_not_contains: String
  fontFamily_starts_with: String
  fontFamily_not_starts_with: String
  fontFamily_ends_with: String
  fontFamily_not_ends_with: String
  fontColor: String
  fontColor_not: String
  fontColor_in: [String!]
  fontColor_not_in: [String!]
  fontColor_lt: String
  fontColor_lte: String
  fontColor_gt: String
  fontColor_gte: String
  fontColor_contains: String
  fontColor_not_contains: String
  fontColor_starts_with: String
  fontColor_not_starts_with: String
  fontColor_ends_with: String
  fontColor_not_ends_with: String
  backgroundColor: String
  backgroundColor_not: String
  backgroundColor_in: [String!]
  backgroundColor_not_in: [String!]
  backgroundColor_lt: String
  backgroundColor_lte: String
  backgroundColor_gt: String
  backgroundColor_gte: String
  backgroundColor_contains: String
  backgroundColor_not_contains: String
  backgroundColor_starts_with: String
  backgroundColor_not_starts_with: String
  backgroundColor_ends_with: String
  backgroundColor_not_ends_with: String
  AND: [NoteWhereInput!]
  OR: [NoteWhereInput!]
  NOT: [NoteWhereInput!]
}

input NoteWhereUniqueInput {
  id: ID
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  interest(where: InterestWhereUniqueInput!): Interest
  interests(where: InterestWhereInput, orderBy: InterestOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Interest]!
  interestsConnection(where: InterestWhereInput, orderBy: InterestOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): InterestConnection!
  note(where: NoteWhereUniqueInput!): Note
  notes(where: NoteWhereInput, orderBy: NoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Note]!
  notesConnection(where: NoteWhereInput, orderBy: NoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): NoteConnection!
  noteResponse(where: NoteResponseWhereUniqueInput!): NoteResponse
  noteResponses(where: NoteResponseWhereInput, orderBy: NoteResponseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [NoteResponse]!
  noteResponsesConnection(where: NoteResponseWhereInput, orderBy: NoteResponseOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): NoteResponseConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  interest(where: InterestSubscriptionWhereInput): InterestSubscriptionPayload
  note(where: NoteSubscriptionWhereInput): NoteSubscriptionPayload
  noteResponse(where: NoteResponseSubscriptionWhereInput): NoteResponseSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  password: String!
  avatar: String!
  username: String!
  country: String!
  city: String!
  favoriteNotes(where: NoteWhereInput, orderBy: NoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Note!]
  interests(where: InterestWhereInput, orderBy: InterestOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Interest!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  password: String!
  avatar: String!
  username: String!
  country: String!
  city: String!
  favoriteNotes: NoteCreateManyInput
  interests: InterestCreateManyInput
}

input UserCreateManyInput {
  create: [UserCreateInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  password_ASC
  password_DESC
  avatar_ASC
  avatar_DESC
  username_ASC
  username_DESC
  country_ASC
  country_DESC
  city_ASC
  city_DESC
}

type UserPreviousValues {
  id: ID!
  password: String!
  avatar: String!
  username: String!
  country: String!
  city: String!
}

input UserScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  avatar: String
  avatar_not: String
  avatar_in: [String!]
  avatar_not_in: [String!]
  avatar_lt: String
  avatar_lte: String
  avatar_gt: String
  avatar_gte: String
  avatar_contains: String
  avatar_not_contains: String
  avatar_starts_with: String
  avatar_not_starts_with: String
  avatar_ends_with: String
  avatar_not_ends_with: String
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  country: String
  country_not: String
  country_in: [String!]
  country_not_in: [String!]
  country_lt: String
  country_lte: String
  country_gt: String
  country_gte: String
  country_contains: String
  country_not_contains: String
  country_starts_with: String
  country_not_starts_with: String
  country_ends_with: String
  country_not_ends_with: String
  city: String
  city_not: String
  city_in: [String!]
  city_not_in: [String!]
  city_lt: String
  city_lte: String
  city_gt: String
  city_gte: String
  city_contains: String
  city_not_contains: String
  city_starts_with: String
  city_not_starts_with: String
  city_ends_with: String
  city_not_ends_with: String
  AND: [UserScalarWhereInput!]
  OR: [UserScalarWhereInput!]
  NOT: [UserScalarWhereInput!]
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  password: String
  avatar: String
  username: String
  country: String
  city: String
  favoriteNotes: NoteUpdateManyInput
  interests: InterestUpdateManyInput
}

input UserUpdateInput {
  password: String
  avatar: String
  username: String
  country: String
  city: String
  favoriteNotes: NoteUpdateManyInput
  interests: InterestUpdateManyInput
}

input UserUpdateManyDataInput {
  password: String
  avatar: String
  username: String
  country: String
  city: String
}

input UserUpdateManyInput {
  create: [UserCreateInput!]
  update: [UserUpdateWithWhereUniqueNestedInput!]
  upsert: [UserUpsertWithWhereUniqueNestedInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  set: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyMutationInput {
  password: String
  avatar: String
  username: String
  country: String
  city: String
}

input UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput!
  data: UserUpdateManyDataInput!
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput!
  data: UserUpdateDataInput!
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput!
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  avatar: String
  avatar_not: String
  avatar_in: [String!]
  avatar_not_in: [String!]
  avatar_lt: String
  avatar_lte: String
  avatar_gt: String
  avatar_gte: String
  avatar_contains: String
  avatar_not_contains: String
  avatar_starts_with: String
  avatar_not_starts_with: String
  avatar_ends_with: String
  avatar_not_ends_with: String
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  country: String
  country_not: String
  country_in: [String!]
  country_not_in: [String!]
  country_lt: String
  country_lte: String
  country_gt: String
  country_gte: String
  country_contains: String
  country_not_contains: String
  country_starts_with: String
  country_not_starts_with: String
  country_ends_with: String
  country_not_ends_with: String
  city: String
  city_not: String
  city_in: [String!]
  city_not_in: [String!]
  city_lt: String
  city_lte: String
  city_gt: String
  city_gte: String
  city_contains: String
  city_not_contains: String
  city_starts_with: String
  city_not_starts_with: String
  city_ends_with: String
  city_not_ends_with: String
  favoriteNotes_every: NoteWhereInput
  favoriteNotes_some: NoteWhereInput
  favoriteNotes_none: NoteWhereInput
  interests_every: InterestWhereInput
  interests_some: InterestWhereInput
  interests_none: InterestWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}
`
      }
    