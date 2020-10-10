import React, {useState} from "react"
import { Alert, Button,Container,Row,Col} from 'react-bootstrap';
// import { Button } from 'react-desktop/windows';

const FileSearch = ({title , onFileSearch}) => {
    const [inputActive, setInputActive] = useState(false)
    const [value, setValue] = useState("")
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
                <Container fluid>
                    <Row fluid>
                    <Col>
                        <input 
                        className="form-control"
                        value={value}
                        onChange={(e)=> setValue(e.target.value)}
                        />
                    </Col>
                    <Col>
                        <Button 
                            onClick={()=>setInputActive(false)}>
                            关闭
                        </Button>
                    </Col>
                    </Row>
                </Container>
            }
        </Alert>
    )
}

export default FileSearch