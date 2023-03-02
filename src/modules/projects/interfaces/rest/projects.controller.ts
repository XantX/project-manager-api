import { Controller, Get } from '@nestjs/common';

@Controller('projects')
export class ProjectsController {
  @Get()
  public getProject(): string[] {
    return ['Proyecto 1', 'Proyecto2'];
  }
}
