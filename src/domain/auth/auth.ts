import { Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Status } from "./enum/status.enum";
import { Users } from "../user/user";

@Entity("auth")
export class Auth {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    uuid: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({
        type: "enum",
        enum: Status,
        default: Status.ACTIVE
    })
    status: Status;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @OneToOne(() => Users, (user) => user.auth)
    user?: Users;

    @OneToOne(() => Driver, (driver) => driver.auth)
    driver?: Driver;
}