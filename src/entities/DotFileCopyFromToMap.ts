import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class DotFileCopyFromToMap {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    type: 'varchar',
    unique: true,
    nullable: true,
  })
  type!: string | null;

  @Column({
    type: 'varchar',
    unique: true,
    nullable: true,
  })
  fromPath!: string | null;

  @Column({
    type: 'varchar',
    unique: true,
    nullable: true,
  })
  toPath!: string | null;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
