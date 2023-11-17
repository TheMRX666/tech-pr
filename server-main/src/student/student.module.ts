import { StudentController } from './student.controler';
import { PrismaService } from 'src/prisma.service';
import { Module } from '@nestjs/common';
import { StudentService } from './student.service';

@Module({
  controllers: [StudentController],
	providers: [StudentService, PrismaService]
})
export class StudentModule {}
