import Model from './model/model.js';
import View from './view/view.js';
import Presenter from './presenter/presenter.js';

class Main {
    static init() {
        const appContainer = document.getElementById('app');
        const model = new Model();
        const view = new View(appContainer);
        new Presenter(model, view);
    }
}

Main.init();



