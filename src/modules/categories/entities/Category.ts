import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, OneToOne, ManyToOne, JoinTable, JoinColumn } from 'typeorm';
import { Product } from '../../products/entities/Product';

@Entity('categories')
export class Category {


  @PrimaryGeneratedColumn('increment')
  id?: number;

  @Column()
  name: string;

  @Column()
  slug: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at?: Date;

  @UpdateDateColumn()
  updated_at?: Date;

  @OneToMany(() => Product, product => product.category, {
    eager: true
  })
  @JoinColumn()
  products: Product[];


}
