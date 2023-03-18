import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CrudService } from '../../../../common/crud-service.abstract';
import { MessageResponse } from '../../../../common/response-message/messages';
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

  // TODO: How to add query filter
  async findAll(): Promise<Project[]> {
    return this._projectModel.find();
  }

  async delete(_id: string): Promise<Project> {
    const deletedProject = await this._projectModel.findOneAndRemove({
      _id: _id,
    });
    if (!deletedProject) {
      throw new NotFoundException(
        MessageResponse.DELETE_NOTFOUND_PROJECT.replace(':id', _id),
      );
    }
    return deletedProject;
  }
  async update(
    projectDtoUpdate: Partial<ProjectDto>,
    id: string,
  ): Promise<Project> {
    const updatedProject = await this._projectModel.findByIdAndUpdate(
      id,
      projectDtoUpdate,
      {
        new: true,
      },
    );
    if (!updatedProject) {
      throw new NotFoundException(
        MessageResponse.UPDATE_NOTFOUND_PROJECT.replace(':id', id),
      );
    }
    return updatedProject;
  }
}
