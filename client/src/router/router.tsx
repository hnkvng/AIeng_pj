import { lazy, Suspense} from 'react';
import { Outlet, RouteObject, createBrowserRouter } from 'react-router-dom';
import paths, { rootPaths } from './paths';
import Splash from '@/components/loading/Slash';
import PageLoader from '@/components/loading/PageLoader';

const AuthLayout = lazy(() => import('@layouts/auth-layout'));
const MainLayout = lazy(() => import('@layouts/main-layout'));

const App = lazy(() => import('@/App'));

const LoginPage = lazy(() => import('@pages/login-page/LoginPage'));
const RegisterPage = lazy(() => import('@pages/register-page/RegisterPage'));
const HomePage = lazy(() => import('@pages/home-page/HomePage'));
const NotebookPage = lazy(() => import('@pages/notebook-page/NotebookPage'));
const ListeningPage = lazy(() => import('@pages/listening-page/ListeningPage'));
const SpeakingPage = lazy(() => import('@pages/speaking-page/SpeakingPage'));
const ReadingPage = lazy(() => import('@pages/reading-page/ReadingPage'));
const WritingPage = lazy(() => import('@/pages/writing-page/WritingPage'));
const QuizPage = lazy(() => import('@pages/quiz-page/QuizPage'));
const TestingPage = lazy(() => import('@pages/testing-page/TestingPage'));
const SettingPage = lazy(() => import('@pages/setting-page/SettingPage'));
const SupportPage = lazy(() => import('@pages/support-page/SupportPage'));
const ErrorPage = lazy(() => import('@pages/error-page/ErrorPage'));


const routes: RouteObject[] = [
    {
        path: '/',
        element:  (
            <Suspense fallback = {<Splash/>}> 
                <App />
            </Suspense>
        ),
        children: [
            {
                path: rootPaths.authRoot,
                element: (
                    <AuthLayout>
                        <Suspense fallback = {<PageLoader/>}> 
                            <Outlet/>
                        </Suspense>
                    </AuthLayout>
                ),
                children: [
                    {
                        path: paths.login,
                        element: (
                            <LoginPage/>
                        )
                    },
                    {
                        path: paths.register,
                        element: (
                            <RegisterPage/>
                        )
                    }
                ]
            },
            {
                path: rootPaths.homeRoot,
                element: (
                    <MainLayout>
                        <Suspense fallback = {<PageLoader/>}> 
                            <Outlet/>
                        </Suspense>
                    </MainLayout>
                ),
                children: [
                    {
                        index: true,
                        element: (
                            <HomePage/>
                        )
                    },
                    {
                        path: paths.notebook,
                        element: (
                            <NotebookPage/>
                        )
                    },
                    {
                        path: paths.listening,
                        element: (
                            <ListeningPage/>
                        )
                    },
                    {
                        path: paths.speaking,
                        element: (
                            <SpeakingPage/>
                        )
                    },
                    {
                        path: paths.reading,
                        element: (
                            <ReadingPage/>
                        )
                    },
                    {
                        path: paths.writting,
                        element: (
                            <WritingPage/>
                        )
                    },
                    {
                        path: paths.quiz,
                        element: (
                            <QuizPage/>
                        )
                    },
                    {
                        path: paths.testing,
                        element: (
                            <TestingPage/>
                        )
                    },

                    {
                        path: paths.setting,
                        element: (
                            <SettingPage/>
                        )
                    },
                    {
                        path: paths.support,
                        element: (
                            <SupportPage/>
                        )
                    },
                ]
            }
        ]
    },
    {
        path: '*',
        element: (
            <ErrorPage/>
        )
    }
];

const options: { basename: string } = {
    basename: '/aleng',// thêm tên web trên địa chỉ url
};
  
const router  = createBrowserRouter(routes, options);

export default router;