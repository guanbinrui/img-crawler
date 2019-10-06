import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
} from 'typeorm';
import { Vendor } from './Vendor';

@Entity()
export class Image extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'bigint' })
  vid: number;

  @ManyToOne(() => Vendor, vendor => vendor.images)
  vendor: Vendor;
}
