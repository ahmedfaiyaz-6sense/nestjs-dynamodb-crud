import { DynamooseModule } from 'nestjs-dynamoose';
import { NoteModule } from './note/note.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
//import { aws } from 'dynamoose';
import { AppGateway } from './app.gateway';
//aws.ddb.local('http://localhost:8000');
/*const ddb = new aws.ddb.DynamoDB({
  endpoint: 'http://localhost:8000', // Specify the local DynamoDB endpoint
});*/

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DynamooseModule.forRoot({
      aws: {
        accessKeyId: process.env.accessIdKey,
        secretAccessKey: process.env.secretAccessKey,
        region: process.env.region,
      },
      local: true,
      //  ddb: ddb,
      table: {
        create: true,
      },
      logger: true,
    }),

    NoteModule,
  ],
  providers: [AppGateway],
})
export class AppModule {}
