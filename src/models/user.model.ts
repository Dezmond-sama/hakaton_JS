import { Table, Column, AllowNull, AutoIncrement, PrimaryKey, Model, Default, DataType, Unique } from 'sequelize-typescript'

@Table
export default class User extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id!: number

    @Unique
    @AllowNull(false)
    @Column(DataType.STRING)
    email!: string

    @AllowNull(false)
    @Column(DataType.STRING)
    password!: string
}