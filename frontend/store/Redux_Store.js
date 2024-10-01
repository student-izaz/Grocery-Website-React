const redux = require('redux');

const INITIAL_VALUE = {
    items: [],
};

const reducer = (store = INITIAL_VALUE, action) => {
    let newStore = store;
    console.log(newStore)
}

const itemStore = redux.createStore(reducer);

const subscriber = () => {
    const state = itemStore.getState();
    console.log(state);
}

itemStore.subscribe(subscriber);

itemStore.dispatch({type: 'items'});