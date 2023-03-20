import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { MongoIdPipe } from '../../../../common/pipes/mongo-id.pipe';
import { ProjectDto } from '../../application/dtos/project.dto';
import { ProjectService } from '../../application/services/project.service';
import { Project } from '../../domain/entities/project.entity';

@Controller({ version: '1', path: 'projects' })
export class ProjectsController {
  constructor(private readonly _projectService: ProjectService) {}

  @Get()
  async getProject(): Promise<Project[]> {
    return await this._projectService.findAll();
  }
  @Post()
  async create(@Body() projectDto: ProjectDto): Promise<Project> {
    const result = await this._projectService.create(projectDto);
    return result;
  }
  @Delete(':id')
  async delete(@Param('id', MongoIdPipe) id: string): Promise<Project> {
    return await this._projectService.delete(id);
  }
  @Patch(':id')
  async updated(
    @Param('id', MongoIdPipe) id: string,
    @Body() updateProjectDto: Partial<ProjectDto>,
  ): Promise<Project> {
    return await this._projectService.update(updateProjectDto, id);
  }
}
