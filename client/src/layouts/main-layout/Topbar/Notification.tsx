import { ReactElement, useState, memo } from "react"
import IconifyIcon from "@components/base/IconifyIcon"
import { Badge, IconButton, Tooltip} from "@mui/material"


const Notification = () : ReactElement => {
    const [count] = useState(100);
    return (
        <Badge
            color="error"
            badgeContent= {count.toString()}
            sx={{
                padding: 1,
                '& .MuiBadge-badge': {
                  top: 11,
                  right: 11,
                },
            }}
            >
                <Tooltip title="Thông báo" arrow placement="bottom">
                    <IconButton
                        sx={{
                            padding: 1,
                            color: 'text.primary',
                        }}
                    >
                        <IconifyIcon icon="ph:bell-bold" width={29} height={32} />
                    </IconButton>
                </Tooltip>
        </Badge>
    )
}

export default memo(Notification);