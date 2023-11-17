import { StudentService } from './student.service';
import { StudentDto } from './dto/student.dto';
export declare class StudentController {
    private readonly studentService;
    constructor(studentService: StudentService);
    getAll(): Promise<import(".prisma/client").Student[]>;
    createProduct(dto: StudentDto): Promise<number>;
    updateProduct(id: string, dto: StudentDto): Promise<import(".prisma/client").Student>;
    deleteProduct(id: string): Promise<import(".prisma/client").Student>;
    getProduct(id: string): Promise<import(".prisma/client").Student>;
}
