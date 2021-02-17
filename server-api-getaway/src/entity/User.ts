import { Entity, PrimaryColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn, BeforeInsert, OneToMany } from "typeorm";
import { ObjectType, Field } from "type-graphql";
import { Games } from "./Games";
import { v4 } from 'uuid';

@ObjectType()
@Entity()
export class User extends BaseEntity {
  
  @PrimaryColumn('uuid')
  id: string;

  @Field()
  @Column("text", {default:"User"})
  username: string;

  @Field()
  @Column("text", {nullable:true})
  score: string;

  @Field()
  @Column("text", { unique: true })
  email: string;

  @Column()
  password: string;

  @Column("bool", { default: false })
  confirmed: boolean;

  @Column("bool", { default: false })
  admin: boolean;

  @OneToMany(() => Games, (game) => game.playerId)
  games: Games[];

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;

  @Column("text", { nullable:true })
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
