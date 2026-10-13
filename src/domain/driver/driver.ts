import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("driver")
export class Driver {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    uuid: string;

    @Column()
    
}