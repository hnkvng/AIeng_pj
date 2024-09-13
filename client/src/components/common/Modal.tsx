import { ReactElement } from "react";
import { Box, Modal, Typography } from "@mui/material"
import {  ElementProps, StyleMui } from "@core/type"

interface ModalAppProps {
    open: boolean,
    title?: string,
    content: ReactElement,
    handleClose: () => void,
}

const ModalApp : ElementProps<ModalAppProps> = (
    {
        open,
        title,
        content,
        handleClose,
    }
) : ReactElement => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {title}
                </Typography>
                {content}
            </Box>
        </Modal>
    )
}


const style : StyleMui = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '5px',
    boxShadow: 24,
    p: 4,
};


export default ModalApp;