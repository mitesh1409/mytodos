function homeController(req, res) {
    res.render('home', {
        metaTitle: 'Mytodos - Home',
        title: 'Welcome to Mytodos',
        description: 'Manage your tasks efficiently with Mytodos.'
    });
}

export {
    homeController
};
