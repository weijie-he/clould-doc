import React from 'react'
import { ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash} from '@fortawesome/free-solid-svg-icons'
import { faMarkdown} from '@fortawesome/free-brands-svg-icons'


const FileList = ({files,onFileClick,onSaveEdit,onFileDelete})=>{
    return(
        <ListGroup variant="flush" className={"file-list"}>
            files.map(file => (
                <ListGroup.Item>Cras justo odio</ListGroup.Item>

            ))
        </ListGroup>
    )
}

export default FileList