import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn('increment')
  id?: number;

  @Column()
  name: string;

  @Column()
  perishableProduct: boolean;

  @Column()
  manufacturingDate: Date;

  @Column()
  expirationDate: Date;

  @Column({
    type: 'decimal',
    precision: 5,
    scale: 2
  })
  price: Number;
}
