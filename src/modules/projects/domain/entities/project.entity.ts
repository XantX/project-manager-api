import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { AuditModel } from 'src/common/audit/audit.entity';

export type ProjectDocument = HydratedDocument<Project>;

@Schema()
export class Project extends AuditModel {
  @Prop({ required: true })
  readonly title: string;
  @Prop({ required: true })
  readonly description: string;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
