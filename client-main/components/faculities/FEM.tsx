import { RootState } from '@/store'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Faculty.module.scss'
import cn from 'classnames'
import { useEffect } from 'react'
import { fetchData } from '@/store/getAllStudents/GetAllStudents'
import Link from 'next/link'

export const FEM = () => {

    const dispatch = useDispatch();
    const apiData = useSelector((state: RootState) => state.api)
    const category = useSelector((state: RootState) => state.category.value)
    const group = useSelector((state: RootState) => state.group.value)
    const showVg = useSelector((state: RootState) => state.showVd.value)

    const filteredStudents = apiData.filter((student) => student.faculty === 'FEM' && student.group === group);

    useEffect(() => {
        // @ts-ignore
        dispatch(fetchData());
      }, []);

    return(
        <div className={cn(styles.faculty__section, category === 1 ? '' : "hideOf")}>
            <h2>Факультет економіки та менеджменту</h2>
            <p className='length'>Кількість студентів: {filteredStudents.length}</p>
            {showVg === false ?
            
            apiData.filter((student) => student.faculty === 'FEM' && student.group === group).map((student, index) => (
            <Link href={'student/' + student.id} key={student.id} className={styles.faculty__section_student}>
                <span className={styles.student_index}>{index + 1}.</span>
                <div className={styles.student_box}>
                    <span className={styles.student_label}>ПІБ</span>
                    <h3 className={styles.student_text}>{student.surName} {student.name} {student.patronymic}</h3>
                </div>
                <div className={styles.student_box}>
                    <span className={styles.student_label}>р. н.</span>
                    <p className={styles.student_text}>{student.bthDay}</p>
                </div>
                <div className={styles.student_box}>
                    <span className={styles.student_label}>Група</span>
                    <p className={styles.student_text}>{student.group}</p>
                </div>
                <div className={styles.student_box}>
                    <span className={styles.student_label}>Номер квитка</span>
                    <p className={styles.student_text}>{student.numberRecordBook}</p>
                </div>
                <div className={styles.student_box}>
                    <span className={styles.student_label}>Статус</span>
                    <p className={styles.student_text}>{student.dateDeduction == '' ? 'Навчається' : 'Відрахований'}</p>
                </div>
                <div className={styles.student_sub}>
                    <p>Подивитись всю інформаці...</p>
                </div>
            </Link>
            ))
            
            :
            apiData.filter((student) => student.faculty === 'FEM' && student.group === group && student.dateDeduction !== '').map((student, index) => (
                <Link href={'student/' + student.id} key={student.id} className={styles.faculty__section_student}>
                    <span className={styles.student_index}>{index + 1}.</span>
                    <div className={styles.student_box}>
                        <span className={styles.student_label}>ПІБ</span>
                        <h3 className={styles.student_text}>{student.surName} {student.name} {student.patronymic}</h3>
                    </div>
                    <div className={styles.student_box}>
                        <span className={styles.student_label}>р. н.</span>
                        <p className={styles.student_text}>{student.bthDay}</p>
                    </div>
                    <div className={styles.student_box}>
                        <span className={styles.student_label}>Група</span>
                        <p className={styles.student_text}>{student.group}</p>
                    </div>
                    <div className={styles.student_box}>
                        <span className={styles.student_label}>Номер квитка</span>
                        <p className={styles.student_text}>{student.numberRecordBook}</p>
                    </div>
                    <div className={styles.student_box}>
                        <span className={styles.student_label}>Статус</span>
                        <p className={styles.student_text}>{student.dateDeduction == '' ? 'Навчається' : 'Відрахований'}</p>
                    </div>
                    <div className={styles.student_sub}>
                        <p>Подивитись всю інформаці...</p>
                    </div>
                </Link>
                ))
        }
        </div>
    )
}
