import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectsModule } from './modules/projects/projects.module';

@Module({
  imports: [
    ProjectsModule,
    MongooseModule.forRoot(
      'mongodb://xantx:password@mongo_db:27017/project-manager',
    ),
  ],
})
export class AppModule {}
