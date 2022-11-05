import styles from './effect.module.css'


export default function Effect() {
    return (
        <li className={styles.effect}>
            <button className='Add'>+</button>
            <select className={styles.effectType}>
                <option>Damage</option>
                <option>Condition</option>
                <option>Other</option>
            </select>
            <div className={styles.damage}>
                <button className='dice'>8</button>
                <p className='modifier'>+5</p>
                <p className='value' contentEditable="true" spellCheck="false">STR</p>
                <p>Piercing</p>
            </div>

        </li>
    )
}