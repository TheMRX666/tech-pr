"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let StudentService = class StudentService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAll() {
        const students = await this.prisma.student.findMany();
        return students;
    }
    async byId(id) {
        const student = await this.prisma.student.findUnique({
            where: {
                id
            }
        });
        if (!student)
            throw new common_1.NotFoundException('student not found!');
        return student;
    }
    async create(dto) {
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
    async update(id, dto) {
        const { surName, name, patronymic, bthDay, homeaddres, liveaddres, admissionYear, studyType, faculty, speciality, group, numberRecordBook, dateDeduction, reasonDeduction } = dto;
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
        });
    }
    async delete(id) {
        return this.prisma.student.delete({ where: { id } });
    }
};
StudentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], StudentService);
exports.StudentService = StudentService;
//# sourceMappingURL=student.service.js.map