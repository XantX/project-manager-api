import { Module } from '@nestjs/common';
import { ProjectsModule } from './modules/projects/projects.module';

@Module({
  imports: [ProjectsModule],
})
export class AppModule {}
