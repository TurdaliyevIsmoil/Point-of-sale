import ListItem from "./ListItem"
import styles from './list.module.css'

export default ()=>{
    return <div className={`flex flex-row gap-3 flex-nowrap overflow-x-scroll pb-2 ${styles.categories}`}>
        <ListItem title={'Fastfood'}/>
        <ListItem title={'Icecream'}/>
        <ListItem title={'Sweets'}/>
        <ListItem title={'Drinks'}/>
        <ListItem title={'Chines'}/>
        <ListItem title={'Indian'}/>
        <ListItem title={'Uzbek'}/>
        <ListItem title={'Russian'}/>
    </div>
}