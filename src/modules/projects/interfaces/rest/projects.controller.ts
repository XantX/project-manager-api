import { Body, Controller, Get, Logger, Post } from '@nestjs/common';
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
    return await this._projectService.create(projectDto);
  }
}
