import {memo, ReactElement} from 'react'
import styled from "styled-components";
import { ElementProps } from "@core/type"


const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

interface UploadFileProps {
    handleChange: (value: FileList | null) => void,
}

const UploadFile : ElementProps<UploadFileProps> = (
    {
        handleChange,
    }
) : ReactElement => {
    return (
        <VisuallyHiddenInput
            type="file"
            onChange={(event) => handleChange(event.target.files)}
            multiple
        />
    )
}

export default memo(UploadFile);