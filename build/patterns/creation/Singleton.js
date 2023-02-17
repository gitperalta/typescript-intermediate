"use strict";
class Singleton {
    constructor() { }
    static getInstance() {
        if (!Singleton.instance)
            Singleton.instance = new Singleton(); // It creates the single public instance
        return Singleton.instance;
    }
    showByConsole() {
        console.log("Singleton Method");
    }
}
//# sourceMappingURL=Singleton.js.map