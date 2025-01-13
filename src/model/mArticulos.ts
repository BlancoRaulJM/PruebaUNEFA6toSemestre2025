import {Table,Column, Model, DataType, PrimaryKey} from "sequelize-typescript"

@Table({
    tableName: 'UNEFA00101',
    timestamps: true,
})

export default class IV00101 extends Model {
    @Column/*campo 1*/({
        type: DataType.STRING(10),
    })
    declare ALUMNO?: string

    @Column/*campo 2*/({
        type: DataType.STRING(40)
    })
    declare ARTCATEGO?: string

    @Column/*campo 3*/({
        type: DataType.STRING(250)
    })
    declare ARTNUMERO?: string

    @Column/*campo 4*/({
        type: DataType.STRING(250)
    })
    declare ARTDESCRI?: string

    @Column/*campo 5*/({
        type: DataType.STRING(40)
    })
    declare ARTPRECIO?: boolean
};