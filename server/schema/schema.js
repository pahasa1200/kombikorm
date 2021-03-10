const graphql = require('graphql')

const {
    GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt,
    GraphQLList, GraphQLNonNull, GraphQLBoolean
} = graphql

const Orders = require('../models/order')
const Products = require('../models/product')

// const OrderType = new GraphQLObjectType({
//     name: 'Order',
//     fields: () => ({
//         id: {type: GraphQLID},
//         name: {type: new GraphQLNonNull(GraphQLString)},
//         productId: {type: new GraphQLNonNull(GraphQLString)},
//         watched: {type: new GraphQLNonNull(GraphQLBoolean)},
//         rate: {type: GraphQLInt},
//         order: {
//             type: OrderType,
//             resolve(parent, args) {
//                 return Orders.findById(parent.directorId)
//             }
//         }
//     }),
// })

const ProductType = new GraphQLObjectType({
    name: 'Product',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: new GraphQLNonNull(GraphQLString)},
        description: {type: new GraphQLNonNull(GraphQLString)},
        cost: {type: new GraphQLNonNull(GraphQLInt)},
        countOfProducts: {type: new GraphQLNonNull(GraphQLInt)},
        // products: {
        //     type: new GraphQLList(ProductType),
        //     resolve(parent, args) {
        //         return Products.find({id: parent.id})
        //     }
        // }
    }),
})

// const Mutation = new GraphQLObjectType({
//     name: 'Mutation',
//     fields: {
//         addDirector: {
//             type: DirectorType,
//             args: {
//                 name: {type: new GraphQLNonNull(GraphQLString)},
//                 age: {type: new GraphQLNonNull(GraphQLInt)}
//             },
//             resolve(parent, args) {
//                 const director = new Directors({
//                     name: args.name,
//                     age: args.age
//                 })
//                 return director.save()
//             }
//         },
//         addMovie: {
//             type: MovieType,
//             args: {
//                 name: {type: new GraphQLNonNull(GraphQLString)},
//                 genre: {type: new GraphQLNonNull(GraphQLString)},
//                 directorId: {type: GraphQLID},
//                 watched: {type: new GraphQLNonNull(GraphQLBoolean)},
//                 rate: {type: GraphQLInt},
//             },
//             resolve(parent, args) {
//                 const movie = new Movies({
//                     name: args.name,
//                     genre: args.genre,
//                     directorId: args.directorId,
//                     watched: args.watched,
//                     rate: args.rate,
//                 })
//                 return movie.save()
//             }
//         },
//         deleteDirector: {
//             type: DirectorType,
//             args: {id: {type: GraphQLString}},
//             resolve(parent, args) {
//                 return Directors.findByIdAndRemove(args.id)
//             }
//         },
//         deleteMovie: {
//             type: MovieType,
//             args: {id: {type: GraphQLString}},
//             resolve(parent, args) {
//                 return Movies.findByIdAndRemove(args.id)
//             }
//         },
//         updateDirector: {
//             type: DirectorType,
//             args: {
//                 id: {type: GraphQLID},
//                 name: {type: new GraphQLNonNull(GraphQLString)},
//                 age: {type: new GraphQLNonNull(GraphQLInt)}
//             },
//             resolve(parent, args) {
//                 return Directors.findByIdAndUpdate(
//                     args.id,
//                     {$set: {name: args.name, age: args.age}},
//                     {new: true},
//                 )
//             }
//         },
//         updateMovie: {
//             type: MovieType,
//             args: {
//                 id: {type: GraphQLID},
//                 name: {type: new GraphQLNonNull(GraphQLString)},
//                 genre: {type: new GraphQLNonNull(GraphQLString)},
//                 directorId: {type: GraphQLID},
//                 watched: {type: new GraphQLNonNull(GraphQLBoolean)},
//                 rate: {type: GraphQLInt},
//             },
//             resolve(parent, args) {
//                 return Movies.findByIdAndUpdate(
//                     args.id,
//                     {$set: {name: args.name, genre: args.genre, directorId: args.directorId,
//                             watched: args.watched, rate: args.rate}},
//                     {new: true},
//                 )
//             }
//         },
//     }
// })

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        product: {
            type: ProductType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                return Products.findById(args.id)
            }
        },
        // director: {
        //     type: DirectorType,
        //     args: {id: {type: GraphQLID}},
        //     resolve(parent, args) {
        //         return Directors.findById(args.id)
        //     }
        // },
        products: {
            type: new GraphQLList(ProductType),
            resolve(parent, args) {
                return Products.find({})
            }
        },
    //     directors: {
    //         type: new GraphQLList(DirectorType),
    //         resolve(parent, args) {
    //             return Directors.find({})
    //         }
    //     }
    },
})

module.exports = new GraphQLSchema({
    query: Query,
    // mutation: Mutation,
})