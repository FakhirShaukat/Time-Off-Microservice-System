import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Balance {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  employeeId: number;

  @Column()
  locationId: number;

  @Column()
  totalDays: number;

  @Column()
  usedDays: number;
}