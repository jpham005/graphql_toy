import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import { AuthorsModule } from './authors/authros.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://42stat:0214@db/42stat'),
    AuthorsModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      cors: {
        origin: 'https://localhost:8080',
        credentials: true,
      },
      // debug: false,
      // playground: false,
      // include: [] for limit scan subset module for multiple endpoint.
    }),
  ],
})
export class AppModule {}
