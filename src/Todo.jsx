import { FaTrashCan } from 'react-icons/fa6'
import { MdEdit } from "react-icons/md";
import styles from './todo.module.css'
import InputModal from './InputModal';
import Modal from './Modal'
import { useEffect, useState } from 'react';



export default function Todo({ id, title, checked, deleteTodo, checkTodo, editTodo }) {
    const [inputModalVisibility, setInputModalVisibility] = useState(false)
    const [confirmModalVisibility, setConfirmModalVisibility] = useState(false)
    const [confrmModalBtnPress, setConfrmModalBtnPress] = useState(-1)
    const [toBeDeleted, setToBeDeleted] = useState(null)
    const takeEditedTitle = () => {
        setInputModalVisibility(true)
    }
    const confirmAndDelete = (id) => {
        setToBeDeleted(id)
        setConfirmModalVisibility(true)
    }

    

    useEffect(() => {
        if (confrmModalBtnPress == 0) {
            deleteTodo(toBeDeleted)
        } 
    }, [confrmModalBtnPress])

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
                onClick={() => confirmAndDelete(id)}>
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

            {confirmModalVisibility &&
            <Modal
            title={"Warning!"}
            message="Are you sure you want to delete this?"
            setModalVisibilty={setConfirmModalVisibility}
            variant="confirmation"
            setBtnPress={setConfrmModalBtnPress}>
            </Modal>}

            {}
            
        </>
    )
}