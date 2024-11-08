import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserBill } from './UserBill';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('increment')
  user_id: number;

  @Column({ type: 'varchar', length: 10 })
  role: string;

  @Column({ type: 'varchar', length: 32 })
  name: string;

  @Column({ type: 'varchar', length: 16 })
  nis: string;

  @Column({ type: 'varchar', length: 32 })
  email: string;

  @Column({ type: 'varchar', length: 8 })
  class_origin: string;

  @Column({ type: 'varchar', length: 255 })
  password: string;

  @OneToMany(() => UserBill, (userBill) => userBill.user)
  userBill: UserBill[];
}
