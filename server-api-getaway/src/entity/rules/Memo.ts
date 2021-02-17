import { Entity, PrimaryColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn, BeforeInsert } from "typeorm";
import { ObjectType, Field } from "type-graphql";
import { v4 } from 'uuid';

@ObjectType()
@Entity()
export class MemoRules extends BaseEntity {
  @PrimaryColumn('uuid')
  id: string;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  levels: number;

  @Field()
  @Column()
  sizes: string[];
 
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
