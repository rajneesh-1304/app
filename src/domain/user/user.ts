import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Auth } from "../auth/auth";

@Entity("users")
export class Users {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    uuid: string;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    phone: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @OneToOne(() => Auth, auth => auth.user, {
        onDelete: "CASCADE"
    })
    @JoinColumn({ name: "auth_id" })
    auth: Auth;

}