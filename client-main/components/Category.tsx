import { FC, useState } from 'react'
import styles from './Students.module.scss'
import { toggleValue } from './Students'
import { useDispatch } from "react-redux"
import cn from 'classnames'
import { CategoryButton } from '@/store/chouseCategory/ChouseCategory'
import { GroupButton } from '@/store/chouseGroup/ChouseGroup'

export const Category: FC<toggleValue> = ({ value }) => {
    const [indexCategory, setIndexCategory] = useState(1)

    const dispatch = useDispatch();
    
    const toggleClick = (index: number) => {
        dispatch(CategoryButton(index))
    }
    const chouseCategory = (value: string) => {
        dispatch(GroupButton(value))
    }


    return(
        <ol className={cn(styles.categories, value && 'hideTop')}>
            <li>
                <span onClick={() => {toggleClick(1); chouseCategory('111')}} className={styles.categories__button}>ФЕМ</span>
            </li>
            <li>
                <span onClick={() => {toggleClick(2); chouseCategory('211')}} className={styles.categories__button}>ФІСТ</span>
            </li>
            <li>
                <span onClick={() => {toggleClick(3); chouseCategory('411/1')}} className={styles.categories__button}>ЮФ</span>
            </li>
            <li>
                <span onClick={() => {toggleClick(4); chouseCategory('311/1')}} className={styles.categories__button}>ФПСТ</span>
            </li>
            <li>
                <span onClick={() => {toggleClick(5); chouseCategory('011')}} className={styles.categories__button}>ФБК</span>
            </li>
        </ol>
    )
}