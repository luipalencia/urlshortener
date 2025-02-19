// import { Module } from '@nestjs/common';
// import { AppController, HealthController } from './app.controller';
// import { AppService, HealthService } from './app.service';

// @Module({
//   imports: [],
//   controllers: [AppController, HealthController],
//   providers: [AppService, HealthService],
// })
// export class AppModule {}
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { GraphQLResolver } from './graphql/resolvers/graphql.resolver';
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      playground: true,
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class',
      },
    }),
  ],
  providers: [GraphQLResolver],
})
export class AppModule {}
