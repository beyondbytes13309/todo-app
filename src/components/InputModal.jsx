import { useState } from "react"
import styles from './styles/inputModal.module.css'

export default function InputModal({ title, message, setInputModalVisibility, editTodo, todoID }) {
    const [editedInput, setEditedInput] = useState(message)
    

    const handleChange = (e) => {

        setEditedInput(e.target.value)
    }

    const handleSave = () => {
        
        editTodo(todoID, editedInput)
        setEditedInput('')
        setInputModalVisibility(false)
    }

    const handleCancel = () => {
        setInputModalVisibility(false)
        setEditedInput('')
    }

    return (
        <>
            <div className={styles.input_modal_div}>
                <h2 className={styles.modal_h2}>{title}</h2>
                <input className={styles.input_box_edit} placeholder="Edit todo" type="text" value={editedInput} onChange={(e) => handleChange(e)}/>
                <div className={styles.button_haven}>
                    <button className={styles.edit_save} onClick={handleSave}>Save</button>
                    <button className={styles.cancel_save} onClick={handleCancel}>Cancel</button>
                </div>
                
            </div>
        </>
    )
}