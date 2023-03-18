import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { isMongoId } from 'class-validator';
import { MessageResponse } from '../response-message/messages';

@Injectable()
export class MongoIdPipe implements PipeTransform {
  transform(value: string, _metadata: ArgumentMetadata): string {
    if (!isMongoId(value)) {
      throw new BadRequestException(MessageResponse.INVALID_MONGO_ID);
    }
    return value;
  }
}
