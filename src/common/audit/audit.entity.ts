import { Prop } from '@nestjs/mongoose';

export class AuditModel {
  @Prop({ required: false, default: Date.now })
  createdAt: Date;
  @Prop({ required: false, default: Date.now })
  updatedAt: Date;
  @Prop({ required: false, default: false })
  status: boolean;
}
