import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto/update-coffee.dto';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto/pagination-query.dto';
import { Public } from 'src/common/decorators/public.decorator';

// @UsePipes(ValidationPipe) //controller type
// can apply instace of new class here but it will increase memory usage because nest can easily reuse instaces of same class here we are creating evertime when we will use the word new
@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeeService: CoffeesService) {
    console.log('CoffeesController Created');
  }
  //   @Get()
  //   findAll(@Query() paginationQuery) {
  //     //@Res() response
  //     // response.status(200).send('This action return all coffees');
  //     const { limit, offset } = paginationQuery;

  //     return `This action return all coffees.Limit: ${limit}, offset: ${offset}`;
  //   }

  // @UsePipes(ValidationPipe) // method type
  @Public()
  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    //@Res() response
    // response.status(200).send('This action return all coffees');
    return this.coffeeService.findAll(paginationQuery);
    return `This action return all coffees.`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    //@Param() params
    //params.id
    return this.coffeeService.findOne(id);

    return `This action return #${id} coffee`;
  }

  @Post()
  // Customize Http code
  // @HttpCode(HttpStatus.GONE)
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    //@Body('name') body
    return this.coffeeService.create(createCoffeeDto);
    return createCoffeeDto;
  }

  //can use params scope validation pipe like this
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body(ValidationPipe) updateCoffeeDto: UpdateCoffeeDto,
  ) {
    return this.coffeeService.update(id, updateCoffeeDto);
    return `This action updates #${id} coffee`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeeService.remove(id);
    return `This action removes #${id} coffee`;
  }
}
