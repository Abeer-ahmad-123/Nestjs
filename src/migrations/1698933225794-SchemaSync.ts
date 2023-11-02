import { MigrationInterface, QueryRunner } from 'typeorm';

export class SchemaSync1698933225794 implements MigrationInterface {
  name = 'SchemaSync1698933225794';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "coffess" ADD "description" character varying NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "coffess" DROP COLUMN "description"`);
  }
}
