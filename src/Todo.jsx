import { FaTrashCan } from 'react-icons/fa6'
import { MdEdit } from "react-icons/md";
import styles from './todo.module.css'
import InputModal from './InputModal';
import { useState } from 'react';



export default function Todo({ id, title, checked, deleteTodo, checkTodo, editTodo }) {
    const [inputModalVisibility, setInputModalVisibility] = useState(false)
    const takeEditedTitle = () => {
        setInputModalVisibility(true)
    }
    return (
        <>
            <div className={styles.todo_div}>
                
                <input 
                className={styles.todo_checkbox} 
                type="checkbox" 
                id={id} 
                checked={checked} 
                onChange={() => checkTodo(id)}/>

                <label 
                className={styles.todo_label} 
                htmlFor={id}>
                    {title}
                </label>
                
                <button
                className={styles.edit_button}
                onClick={takeEditedTitle}>
                    <MdEdit className={styles.edit_icon}></MdEdit>
                </button>

                <button 
                className={styles.del_button} 
                onClick={() => deleteTodo(id)}>
                    <FaTrashCan className={styles.trash_icon}></FaTrashCan>
                </button>
                
            </div>
            {inputModalVisibility && 
            <InputModal title="Edit"
            message={title}
            setInputModalVisibility={setInputModalVisibility}
            editTodo={editTodo}
            todoID={id}
            ></InputModal>}
            
        </>
    )
}