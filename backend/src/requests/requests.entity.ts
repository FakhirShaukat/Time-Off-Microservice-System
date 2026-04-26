import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class TimeOffRequest {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  employeeId: number;

  @Column()
  daysRequested: number;

  @Column()
  status: string; // pending, approved, rejected
}