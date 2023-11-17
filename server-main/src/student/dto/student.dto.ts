import { IsArray, IsString } from 'class-validator'

export class StudentDto {

	@IsString()
	surName: string
	@IsString()
	name: string
	@IsString()
	patronymic: string
	@IsString()
	bthDay: string
	@IsString()
	homeaddres: string
	@IsString()
	liveaddres: string
	@IsString()
	admissionYear: string
	@IsString()
	studyType: string
	@IsString()
	faculty: string
	@IsString()
	speciality: string
	@IsString()
	group: string
	@IsString()
	numberRecordBook: string
	@IsString()
	dateDeduction: string
	@IsString()
	reasonDeduction: string
}


