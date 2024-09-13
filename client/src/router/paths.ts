export const rootPaths = {
    homeRoot: '/',
    authRoot: 'auth',
    errorRoot: 'error',
};

export default { 
    home: `/${rootPaths.homeRoot}`,
    login: `/${rootPaths.authRoot}/login`,
    register: `/${rootPaths.authRoot}/register`, 
    notebook: `/${rootPaths.homeRoot}/notebook`,
    listening: `/${rootPaths.homeRoot}/listening`,
    speaking: `/${rootPaths.homeRoot}/speaking`,
    reading: `/${rootPaths.homeRoot}/reading`,
    writting: `/${rootPaths.homeRoot}/writting`,
    quiz: `/${rootPaths.homeRoot}/quiz`,
    testing: `/${rootPaths.homeRoot}/testing`,
    setting: `/${rootPaths.homeRoot}/setting`,
    support: `/${rootPaths.homeRoot}/support`,
    404: `/${rootPaths.errorRoot}/404`,
}

