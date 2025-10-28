import { Publisher, Subscriber } from "./interface";

export class Product implements Publisher {
    private subscribers : Subscriber[];
    private isAvailable: boolean = false;
    private name: string;

    constructor(name: string) {
        this.name = name;
        this.subscribers = [];
    }

    subscribe(subscriber: Subscriber): void {
        this.subscribers.push(subscriber);
    }

    unSubscribe(subscriber: Subscriber): void {
        this.subscribers = this.subscribers.filter(o => o !== subscriber);
    }

    setAvailability(status: boolean) {
        this.isAvailable = status;
        if(this.isAvailable) this.notifyAll();
    }
    
    notifyAll(): void {
        for(let obs of this.subscribers) {
            obs.update(this.name);
        }
    }
}