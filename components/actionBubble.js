import Action from "./action";
import styles from './actionBubble.module.css'
import Effect from "./effect";

import { useState } from "react";
import { actions } from "../data";

export default function ActionBubble() {
    const [actionType, setIndex] = useState("Attack");


    return (
        <ul class={styles.bubble}>
            <h2 id={styles.title}>Longsword</h2>
            <h2 id={styles.actionType}>Action</h2>
            <span id={styles.lineBreak}></span>
            <i id={styles.description}>martial weapon</i>

            {/* code for one action */}
            <Action data={actions[1]}>
                <Effect />
            </Action>
        </ul >
    )
}