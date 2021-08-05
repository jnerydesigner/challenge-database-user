import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProducts1628171477472 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'products',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar'
          },
          {
            name: 'manufacturingDate',
            type: 'timestamp'
          },
          {
            name: 'perishableProduct',
            type: 'boolean'
          },
          {
            name: 'expirationDate',
            type: 'timestamp'
          },
          {
            name: 'price',
            type: 'decimal',
            precision: 5,
            scale: 2,
            default: 0
          }
        ]
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('products');
  }

}
