import React from 'react'
import { ListGroup,Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash} from '@fortawesome/free-solid-svg-icons'
import { faMarkdown} from '@fortawesome/free-brands-svg-icons'


const FileList = ({files,onFileClick,onSaveEdit,onFileDelete})=>{
    return(
        <ListGroup variant="flush" className={"file-list"}>
            {
                files.map(file => (
                    <ListGroup.Item 
                    className="bg-light d-flex align-items-center file-item row"
                    key={file.id}
                    >
                        <span className="col-2">
                            <FontAwesomeIcon 
                                title={"markdown"}
                                icon={faMarkdown}
                                size={"lg"} 
                            />
                        </span>
                        <span>{file.title}</span>
                        <Button 
                            className={"icon-button c"}
                            onClick={()=>{}}>
                            <FontAwesomeIcon 
                                title={"编辑"}
                                icon={faEdit}
                                size={"lg"} 
                            />
                        </Button>
                        <Button 
                            className={"icon-button"}
                            onClick={()=>{}}>
                            <FontAwesomeIcon 
                                title={"删除"}
                                icon={faTrash}
                                size={"lg"} 
                            />
                        </Button>
                    </ListGroup.Item>
                ))
            }

        </ListGroup>
    )
}

export default FileList