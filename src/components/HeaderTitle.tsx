import styles from '../components/Styles.module.css'


export default function HeaderTitle( props: {title: string}) {
    return (
        <div className={styles.HeaderTitle}>
            {/* {props.ttl} */}
            <span>{props.title}</span>
        </div>
    )}