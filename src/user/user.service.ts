import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './user.model';
import { CreateUserDto } from './dto/create-user.input';
import { randomUUID } from 'crypto';

@Injectable()
export class UserService {
  private users: User[];

  constructor() {
    this.users = [];
  }

  findOneById(id: string): User {
    const user = this.users.find((u) => u.id === id);
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  addNewUser(user: CreateUserDto): User {
    const newUser: User = {
      ...user,
      id: randomUUID(),
    };
    this.users.push(newUser);

    return newUser;
  }
}
