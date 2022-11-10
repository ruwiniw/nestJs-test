import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { Test } from '@nestjs/testing';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const httpAdapter = app.getHttpAdapter();
  await app.listen(3000);
  const adapterHost = app.get(HttpAdapterHost);
  const adapter = adapterHost.httpAdapter;
  const instance = adapter.getInstance();
}
bootstrap();

// require('dotenv').config();

//   const { createAgent } = require('@forestadmin/agent');
//   const { createMongooseDataSource } = require('@forestadmin/datasource-mongoose');
//   // Retrieve your mongoose connection
//   // const connection = require('./mongoose-models');
//   const connection = require('./app.module');

  // Create your Forest Admin agent
  // This must be called BEFORE all other middleware on the app
  // createAgent({
  //   authSecret: process.env.FOREST_AUTH_SECRET,
  //   envSecret: process.env.FOREST_ENV_SECRET,
  //   isProduction: process.env.NODE_ENV === 'production',
    
  // })
  //   // Create your Mongoose datasource
  //   .addDataSource(createMongooseDataSource(connection))
  //   // Replace "myNestJsApp" by your NestJs application
  //   .mountOnNestJs(Test)
  //   .start();
