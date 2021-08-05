import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

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

}
