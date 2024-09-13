export const rootPaths = {
    homeRoot: '/',
    authRoot: 'auth',
    errorRoot: 'error',
};

export default { 
    home: `${rootPaths.homeRoot}`,
    login: `/${rootPaths.authRoot}/login`,
    register: `/${rootPaths.authRoot}/register`, 
    notebook: `/notebook`,
    listening: `/listening`,
    speaking: `/speaking`,
    reading: `/reading`,
    writting: `/writting`,
    quiz: `/quiz`,
    testing: `/testing`,
    setting: `/setting`,
    support: `/support`,
    404: `/${rootPaths.errorRoot}/404`,
}

