import { ApiProperty } from "@nestjs/swagger";
import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { Role } from "src/roles/roles.model";
import { UserRoles } from "src/roles/user-roles.model";

interface UserCreationAttrs {
    email: string,
    password: string
}


@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {

    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'example@mail.ru', description: 'Электронная почта'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @ApiProperty({example: 'password', description: 'Пароль'})
    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    @ApiProperty({example: 'Иван', description: 'Имя пользователя'})
    @Column({type: DataType.STRING, allowNull: false})
    name: string

    @ApiProperty({example: 'Иванов', description: 'Фамилия пользователя'})
    @Column({type: DataType.STRING, allowNull: false})
    lastName: string;

    @ApiProperty({example: 'Иванович', description: 'Отчество пользователя'})
    @Column({type: DataType.STRING, allowNull: true})
    patronymic: string;

    @ApiProperty({example: '1', description: 'Уникальный идентификатор класса'})
    @Column({type: DataType.STRING, allowNull: false})
    classId: string

    @BelongsToMany(() => Role, () => UserRoles)
    roles: Role[]
}