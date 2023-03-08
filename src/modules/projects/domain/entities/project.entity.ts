import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProjectDocument = HydratedDocument<Project>;

@Schema()
export class Project {
  @Prop({ required: true })
  readonly title: string;
  @Prop({ required: true })
  readonly description: string;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
