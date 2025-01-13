import {Table,Column, Model, DataType} from "sequelize-typescript"

@Table({
    tableName: 'UNEFA00201',
    timestamps: true,
})

export default class IV00101 extends Model {
    @Column/*campo 1*/({
        type: DataType.STRING(10),
    })
    declare ALUMNO?: string

    @Column/*campo 2*/({
        type: DataType.STRING(50)
    })
    declare ALUNOMBRE?: string

    @Column/*campo 3*/({
        type: DataType.STRING(50)
    })
    declare ALUNAPELL?: string

    @Column/*campo 4*/({
        type: DataType.STRING(50)
    })
    declare ALUNTELEF?: string

    @Column/*campo 5*/({
        type: DataType.INTEGER
    })
    declare ALUNEDAD?: number
};