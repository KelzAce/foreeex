import { Wallet } from "apps/wallet/src/entities/wallet.entity"
import {Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from "typeorm"

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
}
