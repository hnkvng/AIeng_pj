import { ReactElement } from 'react';
import { Link, Stack, Button, Typography } from '@mui/material';
import Image from '@components/base/Image';
import errorSvg from '@assets/images/error/error.svg';
import { rootPaths } from '@router/paths';

const ErrorPage = (): ReactElement => {
  return (
    <Stack
      minHeight="100%"
      width="fit-content"
      mx="auto"
      justifyContent="center"
      alignItems="center"
      gap={10}
      py={12}
    >
      <Typography variant="h2" color="text.secondary">
        Oops! Không tìm thấy trang!
      </Typography>
      <Typography
        variant="h5"
        fontWeight={400}
        color="text.primary"
        maxWidth={600}
        textAlign="center"
      >
        Chúng tôi không thể tìm thấy trang bạn đang cố truy cập. Chúng tôi xin lỗi vì bất kỳ sự bất tiện này
        có thể đã gây ra. Cảm ơn sự thông cảm của bạn!
      </Typography>
      <Image
        alt="Not Found Image"
        src={errorSvg}
        sx={{
          mx: 'auto',
          height: 200,
        }}
      />
      <Button href={rootPaths.homeRoot} size="large" variant="contained" component={Link}>
        Quay về trang chủ
      </Button>
    </Stack>
  );
};

export default ErrorPage;