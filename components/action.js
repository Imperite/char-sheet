import styles from './action.module.css'

import { useState } from 'react'


export default function Action({ children, data }) {
    const [actionType, setActionType] = useState(data.type)
    function updateCustomziation() {

    }

    return (
        <li class={styles.action}>
            <button className='Add'>+</button>
            <select className={styles.actionType} onChange={updateCustomziation()}>
                <option value='Attack'>Attack</option>
                <option value='Save'>Save</option>
                <option value='Other'>Other</option>
            </select>
            {actionCustomization(actionType, data)}

            <ul className={styles.effects}>
                {children}

            </ul>
        </li>
    )
}

function actionCustomization(type, data) {
    switch (type) {
        case 'Attack':
        case 'Save':
            return (
                <div className={styles.options}>
                    {
                        type == 'Attack' ?
                            <button className={[styles.actionDice, 'dice'].join(' ')}>20</button> : ""}
                    <p className='modifier'>{data.value}</p>
                    <p className='value' contentEditable="true" spellCheck="false">{data.calculation}</p>
                </div>)
        default:
            return (<i>ERROR</i>)
    }
}