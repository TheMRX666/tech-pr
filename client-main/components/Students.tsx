import { Category } from './Category'
import { Create } from './Create'
import { Navigation } from './Navigation'
import { useSelector } from 'react-redux'
import styles from './Students.module.scss'
import { RootState } from '@/store'
import { Faculty } from './faculities/Faculty'

export interface toggleValue {
    value: boolean
}

export const Students = () => {

    const toggle = useSelector((state: RootState) => state.toggle.value)
    const searchShow = useSelector((state: RootState) => state.searchShow.value)

    return (
        <>
            <Category value={toggle} />
            <div style={{overflow: searchShow == true ? 'hidden' : ''}} className={styles.cart}>
                <Navigation value={toggle} />
                <Create value={toggle} />
                <Faculty />
            </div>
        </>
    )
}