import { IsEmail, IsNotEmpty } from 'class-validator';

export class RegistrationDto {
  @IsNotEmpty({ message: 'Username is required' })
  name: string;

  @IsEmail({}, { message: 'Invalid email address' })
  @IsNotEmpty({ message: 'Email address is required' })
  email: string;

  @IsNotEmpty({ message: 'Password is required' })
  password: string;
}
