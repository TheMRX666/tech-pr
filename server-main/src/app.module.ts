import { PrismaService } from './prisma.service';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { StudentModule } from './student/student.module';

@Module({
  imports: [ConfigModule.forRoot(), StudentModule],
  providers: [PrismaService],
})
export class AppModule {}
