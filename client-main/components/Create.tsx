import styles from './Students.module.scss'
import { toggleButton } from '@/store/toggleCreate/ToggleCreate'
import { FC, useEffect, useState } from 'react';
import { useDispatch } from "react-redux"
import { useSelector } from 'react-redux'
import { toggleValue } from './Students';
import cn from 'classnames'
import { RootState } from '@/store';
import { useRouter } from 'next/router';

export const Create: FC<toggleValue> = ({ value }) => {
    const [hide, setHide] = useState(false)
    const [createGroup, setCreateGroup] = useState('')
    const [message, setMessage] = useState(false)
    const [showStatus, setShowStatus] = useState('')

    const [surName, setSurName] = useState('');
    const [name, setName] = useState('');
    const [patronymic, setPatronymic] = useState('');
    const [bthDay, setBthDay] = useState('');
    const [homeaddres, setHomeaddres] = useState('');
    const [liveaddres, setLiveaddres] = useState('');
    const [admissionYear, setAdmissionYear] = useState('');
    const [studyType, setStudyType] = useState('');
    const [faculty, setFaculty] = useState('');
    const [group, setGroup] = useState('');
    const [speciality, setSpeciality] = useState('');
    const [numberRecordBook, setNumberRecordBook] = useState('');
    const [dateDeduction, setDateDeduction] = useState('');
    const [reasonDeduction, setReasonDeduction] = useState('');

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const res = await fetch('http://localhost:4200/api/students', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({  
            surName, name, patronymic, bthDay, homeaddres,
            liveaddres, admissionYear, studyType, faculty,
            speciality, group, numberRecordBook, dateDeduction,
            reasonDeduction 
        }),
        });

        if (res.ok) {
            setMessage(true)
            router.push('/').then(() => {
                window.location.reload();
            });
        } else {
            setMessage(false)
        }
    };


    const toggle = useSelector((state: RootState) => state.toggle.value)

    useEffect(() => {
        if(toggle){
            setHide(false)
        } else {
            setTimeout(() => {
                setHide(true)
            }, 500)
        }
    })

    const dispatch = useDispatch();
    
    const toggleClick = () => {
        dispatch(toggleButton())
    }

    return(
        <div style={{display: hide === false ? 'block' : 'none'}} className={cn(styles.cart__create, !value && 'hide')}>
            <button onClick={toggleClick} className="main_btn">
                Назад
            </button>
            <form onSubmit={handleSubmit}>
                <label>
                    Фамілія
                    <input value={surName} onChange={(e) => setSurName(e.target.value)} type="text" required/>
                </label>
                <label>
                    Імя
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" required/>
                </label>
                <label>
                    По батькові
                    <input value={patronymic} onChange={(e) => setPatronymic(e.target.value)} type="text" required/>
                </label>
                <label>
                    Рік народження
                    <input value={bthDay} onChange={(e) => setBthDay(e.target.value)} type="date" required/>
                </label>
                <label>
                    Домашня адреса
                    <input value={homeaddres} onChange={(e) => setHomeaddres(e.target.value)} type="text" required/>
                </label>
                <label>
                    Адреса проживання
                    <input value={liveaddres} onChange={(e) => setLiveaddres(e.target.value)} type="text" required/>
                </label>
                <label>
                    Рік вступу
                    <input value={admissionYear} onChange={(e) => setAdmissionYear(e.target.value)} type="date" required/>
                </label>
                <label>
                    Тип навчання
                    <input value={studyType} onChange={(e) => setStudyType(e.target.value)} type="text" required/>
                </label>
                <label>
                    Факультет
                    <select value={createGroup} onChange={(e) => {setCreateGroup(e.target.value); setFaculty(e.target.value)}}>
                        <option className='hide' value="">Виберіть факультет</option>
                        <option value="FEM">Факультет економіки та менеджменту</option>
                        <option value="FICT">Факультет інформаційних систем та технологій</option>
                        <option value="YF">Юридичний факультет</option>
                        <option value="FPCT">Факультет психології та соціальних технологій</option>
                        <option value="FBK">Фаховий бізнес-коледж</option>
                    </select>
                </label>
                
                {createGroup === 'FEM' &&
                <label>
                    Група
                    <select value={group} onChange={(e) => setGroup(e.target.value)}>
                        <option className='hide' value="">Група</option>
                        <option value="111">111</option>
                        <option value="112/1">112/1</option>
                        <option value="113">113</option>
                        <option value="114">114</option>
                        <option value="115/1">115/1</option>
                        <option value="115/2">115/2</option>
                        <option value="115/3">115/3</option>
                        <option value="115/4">115/4</option>
                        <option value="115/5">115/5</option>
                        <option value="115/6">115/6</option>
                        <option value="115/7">115/7</option>
                        <option value="115/8">115/8</option>
                        <option value="116">116</option>
                        <option value="117">117</option>
                    </select>
                </label>
                }
                {createGroup === 'FICT' &&
                <label>
                    Група
                    <select value={group} onChange={(e) => setGroup(e.target.value)}>
                        <option className='hide' value="">Група</option>
                        <option value="211">211</option>
                        <option value="212/1">212/1</option>
                        <option value="212/2">212/2</option>
                        <option value="212/3">212/3</option>
                        <option value="213">213</option>
                    </select>
                </label>
                }
                {createGroup === 'YF' &&
                <label>
                    Група
                    <select value={group} onChange={(e) => setGroup(e.target.value)}>
                        <option className='hide' value="">Група</option>
                        <option value="411/1">411/1</option>
                        <option value="411/2">411/2</option>
                        <option value="412">412</option>
                    </select>
                </label>
                }
                {createGroup === 'FPCT' &&
                <label>
                    Група
                    <select value={group} onChange={(e) => setGroup(e.target.value)}>
                        <option className='hide' value="">Група</option>
                        <option value="311/1">311/1</option>
                        <option value="311/2">311/2</option>
                        <option value="312">312</option>
                    </select>
                </label>
                }
                {createGroup === 'FBK' &&
                <label>
                    Група
                    <select value={group} onChange={(e) => setGroup(e.target.value)}>
                        <option className='hide' value="">Група</option>
                        <option value="011">011</option>
                        <option value="012">012</option>
                        <option value="013">013</option>
                        <option value="014">014</option>
                        <option value="015">015</option>
                    </select>
                </label>
                }
                <label>
                    Спеціальність
                    <input value={speciality} onChange={(e) => setSpeciality(e.target.value)} type="text" required/>
                </label>
                <label>
                    Номер залікової книжки
                    <input value={numberRecordBook} onChange={(e) => setNumberRecordBook(e.target.value)} type="text" required/>
                </label>
                <label>
                    Статус
                    <select onChange={(e) => setShowStatus(e.target.value)}>
                        <option className='hide' value="">Виберіть пункт</option>
                        <option value="VD">Відрахований</option>
                        <option value="NVD">Не відрахований</option>
                    </select>
                </label>
                {
                    showStatus === 'VD' ?
                    <>
                        <label>
                            Дата відрахування
                            <input value={dateDeduction} onChange={(e) => setDateDeduction(e.target.value)} type="date" required/>
                        </label>
                        <label>
                            Причини відрахування
                            <input value={reasonDeduction} onChange={(e) => setReasonDeduction(e.target.value)} type="text" required/>
                        </label>
                    </>
                    :
                    <>
                    </>
                }
                <button type='submit' className="main_btn">Додати</button>
                <p className={message === true ? 'messageTrue' : 'hide'}>Студент успішно добавлений!</p>
            </form>
        </div>
    )
}