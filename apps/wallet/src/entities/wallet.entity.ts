import { Transaction } from "@app/shared/entities/transaction.entity";
import { UserEntity } from "../../../../libs/shared/src/entities/user.entity"
import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('wallets')
export class Wallet {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({default: 'NGN' })
  currency: string;

  @Column({ default: 0.0, scale: 2 })
  balance: number;

  @CreateDateColumn({
    type: 'timestamp',
    name: 'created_at',
  })
  created_at!: Date;

  @OneToOne(() => UserEntity, user => user.wallet)
  @JoinColumn()
  user: UserEntity;

  @OneToMany(() => Transaction, transaction => transaction.wallet)
  transaction: Transaction;
}