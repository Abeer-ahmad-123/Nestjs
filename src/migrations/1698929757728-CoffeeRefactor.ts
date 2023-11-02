import { MigrationInterface, QueryRunner } from 'typeorm';

export class CoffeeRefactor1698929757728 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "coffess" RENAME COLUMN "name" TO "title"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "coffess" RENAME COLUMN "title" TO "name"`,
    );
  }
}
