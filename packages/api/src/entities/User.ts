import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import {EncryptionTransformer} from "typeorm-encrypted";
import {Field, ID, Int, ObjectType} from "type-graphql";

@ObjectType()
@Entity()
export class User {

    @Field(type => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    name: string;

    @Field()
    @Column()
    email: string;

    @Field()
    @Column({
        type: "varchar",
        nullable: false,
        transformer: new EncryptionTransformer({
            key: '88B10856A29EB89FE44946AF70C1C8C7370944B93F43AB7D22042286142EC650',
            algorithm: 'aes-256-cbc',
            ivLength: 16,
            iv: 'A89E19CDE5D1F4BBF082D80E27C24A91'
        })
    })
    password: string;

    @Field(type => Int)
    @Column()
    points: number;

    @Field()
    @Column()
    groupId: string;
}
