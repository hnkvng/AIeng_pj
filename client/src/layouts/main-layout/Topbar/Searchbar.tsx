import { memo } from 'react'
import IconifyIcon from "@/components/base/IconifyIcon"
import { IconButton, TextField } from "@mui/material"



const Searchbar = ({showSearchMobile} : {showSearchMobile: boolean}) => {
    return (
        <TextField
              variant='outlined'
              fullWidth
              placeholder="Search here..."
              sx={{
                visibility: {xs: showSearchMobile ? 'visible' : 'hidden', sm: 'visible'},
                '& .MuiOutlinedInput-root': {
                    '&.Mui-focused fieldset': {
                        borderColor: 'text.primary',
                        borderWidth: 1,
                    }
                }
              }}
              slotProps={
                {
                    input: {
                        endAdornment: (
                            <IconButton
                                sx={{
                                    padding: 5,
                                    cursor: 'pointer',
                                    borderRadius: 10,
                                    color: 'text.secondary',
                                    height: 40,
                                    ':hover': {
                                        backgroundColor: 'action.hover'
                                    }
                                }}
                                onClick={() => console.log('search')}
                            >
                              <IconifyIcon icon="akar-icons:search" width={13} height={13}/>
                            </IconButton>
                        ),
                        style: {
                            borderRadius: 10,
                        }
                    }
                }
              }
            />
    )
}

export default memo(Searchbar);