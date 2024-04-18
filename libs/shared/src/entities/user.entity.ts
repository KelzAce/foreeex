import {Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn} from "typeorm"

@Entity('user')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    email: string
}