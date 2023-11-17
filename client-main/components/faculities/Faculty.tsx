import styles from './Faculty.module.scss'
import { useSelector } from 'react-redux'
import { FEM } from './FEM'
import { FICT } from './FICT'
import { YF } from './YF'
import { FPCT } from './FPCT'
import { FBK } from './FBK'
import { RootState } from '@/store'

export const Faculty = () => {

    const toggle = useSelector((state: RootState) => state.toggle.value)

    return(
        <div style={{display: toggle === false ? 'block' : 'none'}} className={styles.faculty}>
            <FEM />
            <FICT/>
            <YF />
            <FPCT />
            <FBK />
        </div>
    )
}