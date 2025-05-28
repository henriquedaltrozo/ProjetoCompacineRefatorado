import { MovieModel } from '@/movies/domain/models/movies.model'
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity('movies')
export class Movie implements MovieModel {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column('varchar')
  image: string

  @Column('varchar')
  name: string

  @Column('text')
  description: string

  @Column('text')
  actors: string[]

  @Column('varchar')
  genre: string

  @Column('timestamp')
  release_date: Date

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: Date
}
