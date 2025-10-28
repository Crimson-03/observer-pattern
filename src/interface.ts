export interface Publisher {
    subscribe(subscriber : Subscriber) : void;
    unSubscribe(subscriber : Subscriber): void;
    notifyAll() : void;
}

export interface Subscriber {
    update(productName: string) : void;
}