import React, { useState } from 'react'
import styles from './TextField.module.css'
function TextField({ id, label, variant, required, disabled }) {

    return (
        <div className={styles.form__group}>
            <input required={required} disabled={disabled} type="text" name="" id={id} className={styles.form__field} />
            <label className={styles.form__label}>{label}</label>
        </div>
    )
}

export default TextField