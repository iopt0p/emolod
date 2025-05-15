import { PartialType } from '@nestjs/swagger';
import { RegistrationDto } from './registration.dto';

export class LoginDto extends PartialType(RegistrationDto) {
  email: string;
  password: string;
}
