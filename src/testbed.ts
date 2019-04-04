import { TestLog } from "./decoartor/log.decorator";

export class TestBed {
    private callbacks: any[];
    constructor() {
        this.callbacks = [];
    }

    public add(...methods) {
        this.callbacks.push(...methods);
    }

    public run() {
        this.callbacks.forEach(test => {
            this.exec(test);
        });
    }

    @TestLog
    private exec(test) {
        return test();
    }
}
