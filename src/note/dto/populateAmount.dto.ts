import { ApiProperty } from '@nestjs/swagger';
import { Min, Max, IsNumber } from 'class-validator';

export class PopulateAmountDTO {
  @IsNumber()
  @Min(1)
  @Max(10)
  @ApiProperty()
  amount: number;
}
