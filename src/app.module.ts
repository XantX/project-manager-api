import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectsModule } from './modules/projects/projects.module';
import DbConfig from './config/db.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [DbConfig],
      isGlobal: true,
    }),
    ProjectsModule,
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        uri: `mongodb://${configService.get<string>(
          'mongo.user',
        )}:${configService.get<string>(
          'mongo.password',
        )}@${configService.get<string>(
          'mongo.host',
        )}:${configService.get<string>(
          'mongo.port',
        )}/${configService.get<string>('mongo.database')}`,
      }),
      inject: [ConfigService],
    }),
  ],
})
export class AppModule {}
