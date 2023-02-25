import { YogaDriver, YogaDriverConfig } from '@graphql-yoga/nestjs';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import { AuthorsModule } from './authors/authros.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://42stat:0214@db/42stat'),
    AuthorsModule,
    GraphQLModule.forRoot<YogaDriverConfig>({
      driver: YogaDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      // include: [] for limit scan subset module for multiple endpoint.
    }),
  ],
})
export class AppModule {}
