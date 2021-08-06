import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToOne, JoinTable, JoinColumn } from 'typeorm';
import { Category } from '../../categories/entities/Category';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn('increment')
  id?: number;

  @Column()
  name: string;

  @Column()
  categoryId: number;

  @ManyToOne(() => Category, (category: Category) => category.products)
  @JoinColumn()
  category: Category;

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
