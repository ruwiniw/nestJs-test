import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthModule } from './health/health.module';

@Module({
  //imports: [HealthModule],
  imports: [
    //MongooseModule.forRoot('mongodb+srv://user:user456@cluster0.ed7b5n9.mongodb.net/?retryWrites=true&w=majority'),
    MongooseModule.forRoot('mongodb://localhost/27017:social'),
    HealthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
