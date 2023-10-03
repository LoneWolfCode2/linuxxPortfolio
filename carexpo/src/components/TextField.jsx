import React, { useState } from 'react'
import styles from './TextField.module.css'
function TextField({ id, label, variant, required, disabled }) {

    return (
        <div className={styles.standard__input}>
            <input required={required} disabled={disabled} type="text" name="test" id={id} className={styles.form__field} placeholder=' ' />
            <label for='test'>{label}</label>
            <span className={styles.underline__tf}></span>
        </div>
    )
}

export default TextField