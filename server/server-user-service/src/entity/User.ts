import {
  Entity,
  PrimaryColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
} from "typeorm";
import { v4 } from "uuid";

@Entity()
export class User extends BaseEntity {
  @PrimaryColumn("uuid")
  id: string;

  @Column("text", { default: "User" })
  username: string;

  @Column("text", { nullable: true })
  score: string;

  @Column("text", { unique: true })
  email: string;

  @Column()
  password: string;

  @Column("bool", { default: false })
  confirmed: boolean;

  @Column("bool", { default: false })
  admin: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column("text", { nullable: true })
  ip: string;

  @BeforeInsert()
  updateDates() {
    this.updatedAt = new Date();
  }
  @BeforeInsert()
  addId() {
    this.id = v4();
  }
}
