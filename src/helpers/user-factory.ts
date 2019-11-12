import { UserStrategyInterface } from "./interfaces/user-strategy-interface";
import { ClientStrategy } from "./strategies/client-strategy";
import { User } from './../models/user';
import { Administrateur } from "./../models/administrateur";
import { Client } from "./../models/client";

/**
 * @name UserFactory
 * @author Aélion
 * @version 1.0.0
 * @package helpers
 */
export class UserFactory {
    private strategy: UserStrategyInterface = new ClientStrategy();

    public setStrategy(strategy: UserStrategyInterface): void {
        this.strategy = strategy;
    }

    public create(name: string, phone: string, email: string, address?: string): User {
        return this.strategy.create(name, email, phone, address);
    }
}