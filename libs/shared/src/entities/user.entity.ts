import { Wallet } from "apps/wallet/src/entities/wallet.entity"
import {Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm"
import { Transaction } from "./transaction.entity"

@Entity('users')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    email: string

    @Column()
    password: string

    @OneToOne(() => Wallet, wallet => wallet.user, { cascade: true })
    @JoinColumn()
    wallet: Wallet;

    @OneToMany(() => Transaction, transaction => transaction.user, { cascade: true})
    @JoinColumn()
    transaction: Transaction
}
