import { Module } from '@nestjs/common';
import { ProjectsController } from './interfaces/rest/projects.controller';

@Module({
  controllers: [ProjectsController],
})
export class ProjectsModule {}
