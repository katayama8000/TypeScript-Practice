"use strict";
const route = (event) => {
    event = event || window.event;
    console.log('route', event.target.href);
    event.preventDefault();
    window.history.pushState({}, '', event.target.href);
    historyLength();
    historyState();
    handleLocation();
};
const routes = {
    '/SPA/': '/SPA/pages/index.html',
    '/SPA/about/': '/SPA/pages/about.html',
    '/SPA/lorem/': '/SPA/pages/lorem.html',
    404: '/SPA/pages/404.html',
};
const handleLocation = async () => {
    const path = window.location.pathname;
    console.log('handleLocation', path);
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    console.log('html', html);
    historyLength();
    historyState();
    document.getElementById('main-page').innerHTML = html;
};
// window.onpopstate = () => {
//   console.log('onpopstate');
//   handleLocation();
// };
//window.route = route;
handleLocation();
const historyLength = () => {
    console.log('length');
    console.log(window.history.length);
};
const historyState = () => {
    console.log('state');
    console.log(window.history.state);
};
