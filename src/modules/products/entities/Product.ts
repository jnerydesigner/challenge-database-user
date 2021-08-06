import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToOne, JoinTable, JoinColumn } from 'typeorm';
import { Category } from '../../categories/entities/Category';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn('increment')
  id?: number;

  @Column()
  categoryId: number;

  @Column()
  name: string;

  @Column()
  manufacturingDate: Date;

  @Column()
  perishableProduct: boolean;

  @ManyToOne(() => Category, (category: Category) => category.products)
  @JoinColumn()
  category: Category;

  @Column()
  expirationDate: Date;

  @Column({
    type: 'decimal',
    precision: 5,
    scale: 2
  })
  price: Number;


}
