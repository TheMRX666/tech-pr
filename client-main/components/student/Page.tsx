

import { useDispatch, useSelector } from 'react-redux'
import styles from '../Students.module.scss'
import { useEffect, useState } from 'react';
import { fetchGameById } from '@/store/getAllStudents/GetAllStudents';
import { RootState } from '@/store';
import { useRouter } from 'next/router';
import Link from 'next/link';

export const PageStudent = () => {
    const [accesDel, setAccesDel] = useState(false)
    const [showStatus, setShowStatus] = useState('')
    const router = useRouter();
    const { id } = router.query;
  
    const dispatch = useDispatch();
  
    useEffect(() => {
      if (id) {
        // @ts-ignore
        dispatch(fetchGameById(id as string));
      }
    }, [dispatch, id]);
  
    const student = useSelector((state: RootState) =>
      state.api.find((student: any) => student.id === parseInt(id as string))
    );
  
    const [formState, setFormState] = useState({
      surName: '',
      name: '',
      patronymic: '',
      bthDay: '',
      homeaddres: '',
      liveaddres: '',
      admissionYear: '',
      studyType: '',
      faculty: '',
      speciality: '',
      group: '',
      numberRecordBook: '',
      dateDeduction: '',
      reasonDeduction: '',
    });
  
    useEffect(() => {
      if (student) {
        setFormState({
          surName: student.surName,
          name: student.name,
          patronymic: student.patronymic,
          bthDay: student.bthDay,
          homeaddres: student.homeaddres,
          liveaddres: student.liveaddres,
          admissionYear: student.admissionYear,
          studyType: student.studyType,
          faculty: student.faculty,
          speciality: student.speciality,
          group: student.group,
          numberRecordBook: student.numberRecordBook,
          dateDeduction: student.dateDeduction,
          reasonDeduction: student.reasonDeduction,
        });
      }
    }, [student]);
  
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      try {
        const response = await fetch(`http://localhost:4200/api/students/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formState),
        });
        if (response.ok) {
            window.location.reload();
        } else {
          console.log(response.statusText);
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormState({
        ...formState,
        [event.target.name]: event.target.value,
      });
    };
  
    if (!student) {
      return <div className='loader'></div>
    }



    const handleDelete = async () => {
        try {
          const response = await fetch(`http://localhost:4200/api/students/${id}`, {
            method: 'DELETE'
          });
          if (response.ok) {
            setAccesDel(true)
          } else {
            console.log(response.statusText);
          }
        } catch (error) {
          console.log(error);
        }
      };

    return(
        <div className={styles.cart}>
            <div className={styles.cart__page}>
                <Link href='/' className='main_btn'>
                    Назад
                </Link>
                {
                    accesDel === false ?
                    <form onSubmit={handleSubmit} className={styles.cart__page_form}>
                        <label>
                            Фамілія
                            <h3>{student.surName}</h3>
                            <input type="text" name="surName" value={formState.surName} onChange={handleChange} />
                        </label>
                        <label>
                            Імя
                            <h3>{student.name}</h3>
                            <input type="text" name="name" value={formState.name} onChange={handleChange} />
                        </label>
                        <label>
                            По батькові
                            <h3>{student.patronymic}</h3>
                            <input type="text" name="patronymic" value={formState.patronymic} onChange={handleChange} />
                        </label>
                        <label>
                            День народження
                            <h3>{student.bthDay}</h3>
                            <input type="text" name="bthDay" value={formState.bthDay} onChange={handleChange} />
                        </label>
                        <label>
                            Домашній адрес
                            <h3>{student.homeaddres}</h3>
                            <input type="text" name="homeaddres" value={formState.homeaddres} onChange={handleChange} />
                        </label>
                        <label>
                            Адреса проживання
                            <h3>{student.liveaddres}</h3>
                            <input type="text" name="liveaddres" value={formState.liveaddres} onChange={handleChange} />
                        </label>
                        <label>
                            Рік вступу
                            <h3>{student.admissionYear}</h3>
                            <input type="text" name="admissionYear" value={formState.admissionYear} onChange={handleChange} />
                        </label>
                        <label>
                            Тип навчання
                            <h3>{student.studyType}</h3>
                            <input type="text" name="studyType" value={formState.studyType} onChange={handleChange} />
                        </label>
                        <label>
                            Факультет
                            <h3>{student.faculty}</h3>
                            {
                                // @ts-ignore
                                <select name="faculty" value={formState.faculty} onChange={handleChange}>
                                    <option className='hide' value="">Виберіть факультет</option>
                                    <option value="FEM">Факультет економіки та менеджменту</option>
                                    <option value="FICT">Факультет інформаційних систем та технологій</option>
                                    <option value="YF">Юридичний факультет</option>
                                    <option value="FPCT">Факультет психології та соціальних технологій</option>
                                    <option value="FBK">Фаховий бізнес-коледж</option>
                                </select>
                            }
                        </label>
                        <label>
                            Група
                            <h3>{student.group}</h3>
                            <input type="text" name="group" value={formState.group} onChange={handleChange} />
                        </label>
                        <label>
                            Спеціальність
                            <h3>{student.speciality}</h3>
                            <input type="text" name="speciality" value={formState.speciality} onChange={handleChange} />
                        </label>
                        <label>
                            Номер квитка
                            <h3>{student.numberRecordBook}</h3>
                            <input type="text" name="numberRecordBook" value={formState.numberRecordBook} onChange={handleChange} />
                        </label>
                        <label>
                            Дата відрахування
                            <input name="dateDeduction" value={formState.dateDeduction} type="date" onChange={handleChange}/>
                        </label>
                        <label>
                            Причини відрахування
                            <input type="text" name="reasonDeduction" value={formState.reasonDeduction} onChange={handleChange}/>
                        </label>
                        <div className={styles.cart__page_form_box}>
                            <button type="submit" className="main_btn">Зберегти</button>
                            <button onClick={handleDelete} className={styles.cart__page_form_delete}>Видалити</button>
                        </div>
                    </form>
                    :
                    <div className={styles.acces}>
                        <h3>Студента успішно видалено!</h3>
                    </div>
                }
            </div>
        </div>
    )
}