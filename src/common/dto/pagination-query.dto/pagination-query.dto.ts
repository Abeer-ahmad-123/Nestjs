import { IsOptional, IsPositive } from 'class-validator';

export class PaginationQueryDto {
  @IsOptional()
  @IsPositive()
  //   @Type(() => Number)   transformOptions: {
  //     enableImplicitConversion: true, //no longer have to specify types with type decorator
  //   }, // if this is true in main.ts then we can go without this type
  limit: number;

  @IsOptional()
  @IsPositive()
  //   @Type(() => Number)
  offset: number;
}
