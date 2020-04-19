import 'reflect-metadata';

import {createConnection, getConnectionManager, useContainer} from 'typeorm';
import {Container} from 'typedi';
import {buildSchema} from 'type-graphql';
import {ApolloServer, gql} from "apollo-server-lambda";

import {User} from './entities/User';
import {Post} from './entities/Post';
import {Group} from './entities/Group';
import {UserResolver} from './resolvers/user-resolver';

export interface Context {
    user: User;
}

const DEFAULT_CONNECTION: string = 'default';

let db;

const createHandler = async () => {
    useContainer(Container);

    const connectionManager = getConnectionManager();
    if (connectionManager.has(DEFAULT_CONNECTION)) {
        db = connectionManager.get(DEFAULT_CONNECTION);

        if (!db.isConnected) {
            await db.connect()
        }
    } else {
        db = await createConnection({
            type: 'mysql',
            database: process.env.DB_NAME!,
            username: process.env.USERNAME!,
            password: process.env.PASSWORD!,
            port: parseInt(process.env.MYSQL_PORT!),
            host: process.env.MYSQL_HOST!,
            entities: [Group, Post, User],
            synchronize: true,
            logger: 'advanced-console',
            logging: 'all',
            // dropSchema: true, // this makes everything go bye bye when connection ends
            cache: true
        });
    }

    const schema = await buildSchema({
        resolvers: [UserResolver],
        container: Container
    });

    const server = new ApolloServer({schema});
    return server.createHandler();
};

export const handler = (event, context, callback) => {

    context.callbackWaitsForEmptyEventLoop = false;

    createHandler().then((handler) => handler(event, context, callback));
};
