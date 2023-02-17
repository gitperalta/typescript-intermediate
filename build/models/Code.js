"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Code = void 0;
class Code {
    constructor(title, description, completed, urgency) {
        this.summary = () => {
            return `Programing todo ${this.title} - ${this.completed}`;
        };
        this.title = title;
        this.description = description;
        this.completed = completed;
        this.urgency = urgency;
    }
}
exports.Code = Code;
//# sourceMappingURL=Code.js.map