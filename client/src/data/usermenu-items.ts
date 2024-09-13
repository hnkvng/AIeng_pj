interface UserMenuItem {
  id: number;
  title: string;
  icon: string;
  color?: string;
}

const userMenuItems: UserMenuItem[] = [
  {
    id: 1,
    title: 'Hồ sơ',
    icon: 'mingcute:user-2-fill',
    color: 'text.primary',
  },
  {
    id: 2,
    title: 'Cài đặt tài khoản',
    icon: 'material-symbols:settings-account-box-rounded',
    color: 'text.primary',
  },
  {
    id: 3,
    title: 'Thông báo',
    icon: 'ion:notifications',
    color: 'text.primary',
  },
  {
    id: 4,
    title: 'Chọn tài khoản',
    icon: 'material-symbols:switch-account',
    color: 'text.primary',
  },
  {
    id: 5,
    title: 'Trung tâm hỗ trợ',
    icon: 'material-symbols:live-help',
    color: 'text.primary',
  },
  {
    id: 6,
    title: 'Đăng xuất',
    icon: 'material-symbols:logout',
    color: 'error.main',
  },
];

export default userMenuItems;
