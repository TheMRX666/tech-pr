import { toggleButton } from '@/store/toggleCreate/ToggleCreate'
import { GroupButton } from '@/store/chouseGroup/ChouseGroup'
import { useDispatch } from "react-redux"
import styles from './Students.module.scss'
import { useSelector } from 'react-redux'
import { toggleValue } from './Students'
import { FC, useState } from 'react'
import cn from 'classnames'
import { RootState } from '@/store'
import { ShowVdButton } from '@/store/showVd/ShowVd'
import { ShowSearchButton } from '@/store/showSearch/ShowSearch'
import Link from 'next/link'

export const Navigation: FC<toggleValue> = ({ value }) => {
    const [searchArray, setSearchArray] = useState('')

    const dispatch = useDispatch();

    const category = useSelector((state: RootState) => state.category.value)
    const apiData = useSelector((state: RootState) => state.api)
    const showVg = useSelector((state: RootState) => state.showVd.value)
    const searchShow = useSelector((state: RootState) => state.searchShow.value)

    const showSearchBtn = () => {
        dispatch(ShowSearchButton())
    }
    const showVdbtn = () => {
        dispatch(ShowVdButton())
    }
    const toggleClick = () => {
        dispatch(toggleButton())
    }
    const chouseCategory = (value: string) => {
        dispatch(GroupButton(value))
    }

    return(
        <div className={cn(styles.cart__top, value && 'hideTop')}>
            <input onClick={showSearchBtn} onChange={(e) => setSearchArray(e.target.value)} placeholder='Введіть імя студента' type="text" className={styles.cart__top_input} />
            <div className={cn('showBox', searchShow === true ? 'active' : '')}>
                <ol className={cn(styles.search_list, searchShow === false ? styles.search_list_hide : '')}>
                    { // @ts-ignore 
                    apiData.filter((student) => student.name == searchArray).map((student) => (
                        <li key={student.id}>
                            <Link className={styles.search_list_link} href={'/student/' + student.id}>{student.name}</Link>
                        </li>
                    ))}
                </ol>
            </div>
            {searchShow && <div onClick={showSearchBtn} className="showFon"></div>}
            <button onClick={showVdbtn} className="main_btn">{showVg === false ? 'Відраховані студенти' : 'Всі студенти'}</button>
            <button onClick={toggleClick} className="main_btn">Додати студента</button>
            {
                category === 1 &&
                <select onChange={(e) => chouseCategory(e.target.value)}>
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
            }
            {
                category === 2 &&
                <select onChange={(e) => chouseCategory(e.target.value)}>
                    <option value="211">211</option>
                    <option value="212/1">212/1</option>
                    <option value="212/2">212/2</option>
                    <option value="212/3">212/3</option>
                    <option value="213">213</option>
                </select>
            }
            {
                category === 3 &&
                <select onChange={(e) => chouseCategory(e.target.value)}>
                    <option value="411/1">411/1</option>
                    <option value="411/2">411/2</option>
                    <option value="412">412</option>
                </select>
            }
            {
                category === 4 &&
                <select onChange={(e) => chouseCategory(e.target.value)}>
                    <option value="311/1">311/1</option>
                    <option value="311/2">311/2</option>
                    <option value="312">312</option>
                </select>
            }
            {
                category === 5 &&
                <select onChange={(e) => chouseCategory(e.target.value)}>
                    <option value="011">011</option>
                    <option value="012">012</option>
                    <option value="013">013</option>
                    <option value="014">014</option>
                    <option value="015">015</option>
                </select>
            }
        </div>
    )
}