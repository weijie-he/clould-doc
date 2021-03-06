import React, {useState, useEffect, useRef} from "react"
import { Alert, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTimes} from '@fortawesome/free-solid-svg-icons'

const FileSearch = ({title , onFileSearch}) => {
    const [inputActive, setInputActive] = useState(false)
    const [value, setValue] = useState("")

    const closeSearch = (event) => {
        event.preventDefault();
        setInputActive(false)
        setValue('')
    }

    let node = useRef(null)

    useEffect(()=>{
        const handleInputEvent = (event) => {
            const {keyCode} = event
            // 按下回车键
            if( keyCode === 13 && inputActive === true){
                onFileSearch(value)
            }
            // 按下esc
            else if( keyCode === 13 && inputActive === true){
                closeSearch(event)
            }
        }

        console.log(node)
        // 添加监听器 keyup 事件在按键被松开时触发。
        document.addEventListener('keyup',handleInputEvent)
        // 如果你的 effect 返回一个函数，React 将会在执行清除操作时调用它。
        return () => {
            document.removeEventListener('keyup',handleInputEvent)
        }
    })

    useEffect(()=>{
        if(inputActive){
            node.current.focus()
        }
    },[inputActive])


    return(
        <Alert variant={'primary'} className="d-flex justify-content-between align-items-center">
            { !inputActive && 
                <>
                    <span>{title}</span>
                    <Button  
                    className={"icon-button"}
                    onClick={()=>setInputActive(true)}>
                    <FontAwesomeIcon 
                        title={"搜索"}
                        icon={faSearch}
                        size={"lg"} 
                    />
                    </Button>            
                </>
            }
            { inputActive && 
                <>
                    <input 
                        className="form-control"
                        value={value}
                        onChange={(e)=> setValue(e.target.value)}
                        ref={node}
                    />
                    <Button 
                        className={"icon-button"}
                        onClick={closeSearch}>
                        <FontAwesomeIcon 
                            title={"关闭"}
                            icon={faTimes}
                            size={"lg"} 
                        />
                    </Button>
                </>
            }
        </Alert>
    )
}

export default FileSearch