import paths, { rootPaths } from "@/router/paths";

export interface NavItem {
  id: number;
  path: string;
  title: string;
  icon: string;
  active: boolean;
}

const navItems: NavItem[] = [
  {
    id: 1,
    path: rootPaths.homeRoot,
    title: 'Trang chủ',
    icon: 'ri:home-line',
    active: false,
  },
  {
    id: 2,
    path: paths.notebook,
    title: 'Sổ tay',
    icon: 'mdi:notebook-outline',
    active: false,
  },
  {
    id: 3,
    path: paths.listening,
    title: 'Luyện nghe',
    icon: 'ph:file-audio',
    active: false,
  },
  {
    id: 4,
    path: paths.speaking,
    title: 'Luyện nói',
    icon: 'icon-park-outline:people-speak',
    active: false,
  },
  {
    id: 5,
    path: paths.reading,
    title: 'Luyện đọc',
    icon: 'fluent:read-aloud-16-regular',
    active: false,
  },
  {
    id: 6,
    path: paths.writting,
    title: 'Luyện viết',
    icon: 'jam:write-f',
    active: false,
  },
  {
    id: 7,
    path: paths.quiz,
    title: 'Quiz',
    icon: 'material-symbols:quiz-outline',
    active: false,
  },
  {
    id: 8,
    path: paths.testing,
    title: 'Bài test',
    icon: 'material-symbols:check-circle-outline',
    active: false,
  },
];

export default navItems;
