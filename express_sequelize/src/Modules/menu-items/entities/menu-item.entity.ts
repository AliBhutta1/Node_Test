import {
  Table,
  Column,
  Model,
  AutoIncrement,
  PrimaryKey,
  BelongsTo,
  ForeignKey,
  HasMany
} from 'sequelize-typescript';
import { ModelAttributeColumnOptions } from 'sequelize';

import Event from '../../events/entities/event.entity';

@Table({
  tableName: 'menu_item',
  updatedAt: false,
})
export default class MenuItem extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column
  declare id: number;

  @Column
  name: string;

  @Column
  url: string;

  @ForeignKey(() => MenuItem)
  @Column({
    type: 'integer',
    defaultValue: null,
  } as ModelAttributeColumnOptions)
  parentId: number;

  @Column({ type: 'datetime' } as ModelAttributeColumnOptions)
  declare createdAt: Date;

  @BelongsTo(() => MenuItem, 'parentId')
  parent: MenuItem;

  @HasMany(() => MenuItem, 'parentId')
  children: MenuItem[];
}
