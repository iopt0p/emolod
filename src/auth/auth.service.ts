import { Injectable } from '@nestjs/common';
import { RegistrationDto } from './dto/registration.dto';
import { LoginDto } from './dto/login.dto';
import { User } from './entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto) {
    const user = await this.userRepository.findOne({
      where: { email: loginDto.email },
    });

    if (!user) {
      throw new Error('Invalid email or password');
    }

    if (!(await bcrypt.compare(loginDto.password, user.password))) {
      throw new Error('Invalid email or password');
    }

    return { access_token: this.jwtService.sign({ sub: user.id }) };
  }

  async registration(registrationDto: RegistrationDto) {
    const user = this.userRepository.create(registrationDto);
    await this.userRepository.save(user);

    return { access_token: this.jwtService.sign({ sub: user.id }) };
  }
}
