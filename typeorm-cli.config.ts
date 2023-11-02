import { Coffee } from 'src/coffees/entities/coffee.entity';
import { Flavor } from 'src/coffees/entities/flavor.entity/flavor.entity';
import { CoffeeRefactor1698929757728 } from 'src/migrations/1698929757728-CoffeeRefactor';
import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'postgres',
  password: '1234',
  database: 'postgres',
  entities: [Coffee, Flavor],
  migrations: [CoffeeRefactor1698929757728],
});
