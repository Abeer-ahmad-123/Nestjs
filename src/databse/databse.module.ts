import { DynamicModule, Module } from '@nestjs/common';
import { DataSource, DataSourceOptions } from 'typeorm';

@Module({})
export class DatabseModule {
  //allowing other modules to pass on it using DataSourceOptions
  static register(options: DataSourceOptions): DynamicModule {
    return {
      module: DatabseModule,
      providers: [
        {
          provide: 'CONNECTION',
          useValue: new DataSource(options).initialize(),
        },
      ],
    };
  }
}
