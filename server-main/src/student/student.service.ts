import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { StudentDto } from './dto/student.dto'

@Injectable()
export class StudentService {
	constructor(
		private prisma: PrismaService,
	) {}

	async getAll(){
		const students = await this.prisma.student.findMany()

		return students
	}

	async byId(id: number) {
		const student = await this.prisma.student.findUnique({
			where: {
				id
			}
		})

		if (!student) throw new NotFoundException('student not found!')
		return student
	}


	async create(dto: StudentDto) {
		const student = await this.prisma.student.create({
			data: {
				surName: dto.surName,
				name: dto.name,
				patronymic: dto.patronymic,
				bthDay: dto.bthDay,
				homeaddres: dto.homeaddres,
				liveaddres: dto.liveaddres,
				admissionYear: dto.admissionYear,
				studyType: dto.studyType,
				faculty: dto.faculty,
				speciality: dto.speciality,
				group: dto.group,
				numberRecordBook: dto.numberRecordBook,
				dateDeduction: dto.dateDeduction,
				reasonDeduction: dto.reasonDeduction
			  },
		});
		return student.id;
		}
	

	async update(id: number, dto: StudentDto) {
		const {
			surName,
			name,
			patronymic,
			bthDay,
			homeaddres,
			liveaddres,
			admissionYear,
			studyType,
			faculty,
			speciality,
			group,
			numberRecordBook,
			dateDeduction,
			reasonDeduction
		} = dto

		return this.prisma.student.update({
			where: {
				id
			},
			data: {
				surName,
				name,
				patronymic,
				bthDay,
				homeaddres,
				liveaddres,
				admissionYear,
				studyType,
				faculty,
				speciality,
				group,
				numberRecordBook,
				dateDeduction,
				reasonDeduction
			}
		})
	}

	async delete(id: number) {
		return this.prisma.student.delete({ where: { id } })
	}
}
