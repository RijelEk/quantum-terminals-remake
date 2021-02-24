import {
  Entity,
  PrimaryColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
} from "typeorm";
import { ObjectType, Field } from "type-graphql";
import { v4 } from "uuid";

@ObjectType()
@Entity()
export class Games extends BaseEntity {
  @PrimaryColumn("uuid")
  id: string;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  score: string;

  @Field()
  @Column()
  level: string;

  @Field()
  @Column()
  playerId: string;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;

  @BeforeInsert()
  updateDates() {
    this.updatedAt = new Date();
  }

  @BeforeInsert()
  addId() {
    this.id = v4();
  }
}
