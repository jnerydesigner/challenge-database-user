import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddCollunmProductImage1628973253167 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn("products", new TableColumn(
      {
        name: "imageProduct",
        type: "varchar",
        isNullable: true
      },
    ));

    await queryRunner.addColumn("products", new TableColumn(
      {
        name: "driverImage",
        type: "varchar",
        isNullable: true
      },
    ));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('products', 'driverImage');
    await queryRunner.dropColumn('products', 'imageProduct');
  }

}
