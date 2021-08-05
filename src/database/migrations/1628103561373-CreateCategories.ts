import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCategories1628103561373 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'categories',
        columns: [
          {
            name: 'id',
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: "name",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "slug",
            type: "varchar",
            isNullable: true,
          },
          {
            name: 'description',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()'
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('categories');
  }

}
