import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeeRatingModule } from './coffee-rating/coffee-rating.module';
import { ConfigModule } from '@nestjs/config';
import appConfig from './config/app.config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      //we are using process evironment object loaded by ConfigModule module, now we are calling them before config module loads so all the value becomes undefined here --- forRoot and no useFactory
      //
      useFactory: () => ({
        //behaves like any other asynchronous provider, it can inject dependencies thorugh inject property e.g we can inject ConfigService and use it here insted of using process.env
        type: 'postgres',
        host: process.env.DATABASE_HOST,
        port: +process.env.DATABASE_PORT,
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        autoLoadEntities: true,
        synchronize: true, //disable in production
      }),
    }), // our application is running because asynchronous configuration we added will be loaded after every module registered in application is resolved
    ConfigModule.forRoot({
      // envFilePath: '.env', // when deployed add ignoreEnvFile:true
      // validationSchema: Joi.object({
      //   DATABASE_HOST: Joi.required(),
      //   DATABASE_PORT: Joi.number().default(5433),
      // }),
      load: [appConfig],
    }), //it will load and parse our env file from default location
    CoffeesModule,

    CoffeeRatingModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // {
    //   provide: APP_PIPE,
    //   useClass: ValidationPipe,
    // },// can define it globally here, validation pipe
  ],
})
export class AppModule {}
