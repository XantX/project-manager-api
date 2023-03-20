import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class ProjectDto {
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  description: string;
}
