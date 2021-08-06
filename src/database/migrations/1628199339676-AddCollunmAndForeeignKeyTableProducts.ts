import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey, } from "typeorm";

export class AddCollunmAndForeeignKeyTableProducts1628199339676 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn("products", new TableColumn({
      name: "categoryId",
      type: "int",
      isNullable: true,
    }));

    await queryRunner.createForeignKey("products", new TableForeignKey({
      name: 'productCategory',
      columnNames: ["categoryId"],
      referencedColumnNames: ["id"],
      referencedTableName: "categories",
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("products", 'productCategory');
    await queryRunner.dropColumn("products", "categoryId");
  }

}
