import { useState } from 'react'
import Modal from './Modal.jsx'
import styles from './newtodo.module.css'
import { MdAddCircle } from "react-icons/md";


export default function NewTodo({addTodo}) {
    const [inputValue, setInputValue] = useState('')
    const [modalVisibility, setModalVisibility] = useState(false)

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const submitInput = () => {
        if (!inputValue) {
            return setModalVisibility(true)
        }
        addTodo(inputValue)
        setInputValue('')
    }

    return (
        <>
            <div className={styles.new_todo_div}>
            <input 
            className={styles.input_box}
            type="text" 
            placeholder="New todo" 
            onChange={(e) => handleChange(e)}
            value={inputValue}
            />
            <button className={styles.add_button} onClick={submitInput}><MdAddCircle className={styles.add_icon}></MdAddCircle></button>

            </div>
            
            {modalVisibility && <Modal
            title="⚠ Error"
            message="Todo can't be empty"
            setModalVisibilty={setModalVisibility}>
            </Modal> 
            }
            
        </>
        
    )
}