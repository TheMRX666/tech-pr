import { PrismaService } from 'src/prisma.service';
import { StudentDto } from './dto/student.dto';
export declare class StudentService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<import(".prisma/client").Student[]>;
    byId(id: number): Promise<import(".prisma/client").Student>;
    create(dto: StudentDto): Promise<number>;
    update(id: number, dto: StudentDto): Promise<import(".prisma/client").Student>;
    delete(id: number): Promise<import(".prisma/client").Student>;
}
