import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CrudService } from 'src/modules/common/crud-service.abstract';
import { Project, ProjectDocument } from '../../domain/entities/project.entity';
import { ProjectDto } from '../dtos/project.dto';

@Injectable()
export class ProjectService extends CrudService<Project> {
  constructor(
    @InjectModel(Project.name) private _projectModel: Model<ProjectDocument>,
  ) {
    super();
  }

  async create(_entityDto: ProjectDto): Promise<Project> {
    const model = new this._projectModel(_entityDto);
    const result = await model.save();
    return result;
  }
  async findAll(): Promise<Project[]> {
    return this._projectModel.find();
  }
}
