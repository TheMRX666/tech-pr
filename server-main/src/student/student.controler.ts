import { StudentService } from './student.service'
import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Post,
	Put,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { StudentDto } from './dto/student.dto'

@Controller('students')
export class StudentController {
	constructor(private readonly studentService: StudentService) {}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Get()
	async getAll() {
		return this.studentService.getAll()
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post()
	async createProduct(@Body() dto: StudentDto) {
		return this.studentService.create(dto)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Put(':id')
	async updateProduct(@Param('id') id: string, @Body() dto: StudentDto) {
		return this.studentService.update(+id, dto)
	}

	@HttpCode(200)
	@Delete(':id')
	async deleteProduct(@Param('id') id: string) {
		return this.studentService.delete(+id)
	}

	@Get(':id')
	async getProduct(@Param('id') id: string) {
		return this.studentService.byId(+id)
	}
}
