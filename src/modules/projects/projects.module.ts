import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectService } from './application/services/project.service';
import { Project, ProjectSchema } from './domain/entities/project.entity';
import { ProjectsController } from './interfaces/rest/projects.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Project.name, schema: ProjectSchema }]),
  ],
  controllers: [ProjectsController],
  providers: [ProjectService],
})
export class ProjectsModule {}
