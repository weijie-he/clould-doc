import React, {useState, useEffect} from "react"
import { Alert, Button} from 'react-bootstrap';

const FileSearch = ({title , onFileSearch}) => {
    const [inputActive, setInputActive] = useState(false)
    const [value, setValue] = useState("")

    const closeSearch = (event) => {
        event
    }

    useEffect(()=>{
        const handleInputEvent = (event) => {
            const {keyCode} = event
            // 回车键
            if( keyCode === 13 && inputActive === true){
                onFileSearch(value)
            }
            // 按下esc
            else if( keyCode === 13 && inputActive === true){
                
            }
        }
    })

    return(
        <Alert variant={'primary'}>
            { !inputActive && 
                <div className="d-flex justify-content-between align-items-center">
                    <span>{title}</span>
                    <Button  
                    onClick={()=>setInputActive(true)}>
                        搜索
                    </Button>            
                </div>
            }
            { inputActive && 
                <div className="row">
                    <input 
                        className="form-control col-8"
                        value={value}
                        onChange={(e)=> setValue(e.target.value)}
                    />
                    <Button 
                        className="col-4"
                        onClick={()=>setInputActive(false)}>
                        关闭
                    </Button>
                </div>
            }
        </Alert>
    )
}

export default FileSearch