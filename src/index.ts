import { User, LoggingService } from "./observer";
import { Product } from "./publishers";

const product1 = new Product('MacBook M3');
const user1 = new User("Krishan", "krishan.kumar1@rupyy.com");
const user2 = new User("Manav", "manav.maheshwari@rupyy.com");
const logger = new LoggingService();

product1.subscribe(user1);
product1.subscribe(user2);
product1.subscribe(logger);
product1.setAvailability(true);
product1.unSubscribe(user2);
product1.notifyAll();
