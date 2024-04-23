import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';


@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: 'buy' | 'sell';

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  amount: number;

  @Column({ type: 'decimal', precision: 10, scale: 4 })
  price: number; 

  // Additional columns as needed, such as status, currency pair, etc.
}
