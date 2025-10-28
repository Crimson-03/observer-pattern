import { Subscriber } from "./interface";

export class User implements Subscriber {
    private name: string;
    private email: string;

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }

    update(productName: string): void {
        console.log(
          `Email Service::: Email Sent to ${this.email}, Hi ${this.name}, ${productName} is available.`
        );
    }
}

export class LoggingService implements Subscriber {
    update(productName: string): void {
        console.log(`Logging Service::: ${productName} became available`);
    }
}