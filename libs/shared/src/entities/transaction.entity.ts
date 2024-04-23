import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Wallet } from "apps/wallet/src/entities/wallet.entity"
import { UserEntity } from './user.entity';


@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: 'buy' | 'sell';

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  amount: number;

  @OneToMany(() => UserEntity, user => user.transaction)
  user: UserEntity;

  @ManyToOne(() => Wallet, wallet => wallet.transaction)
  wallet: Wallet;
}

