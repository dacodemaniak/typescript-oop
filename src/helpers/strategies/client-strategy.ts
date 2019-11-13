import { UserStrategyInterface } from "../interfaces/user-strategy-interface";
import { User } from "./../../models/user";
import { Client } from "./../../models/client";
import { IdFactory } from "../id-factory";

/**
 * @name ClientStrategy
 * @author Aélion
 * @version 1.0.0
 * @package helpers.strategies
 */
export class ClientStrategy implements UserStrategyInterface {
    create(name: string, email: string, phone: string): User {
        return (new Client()
            .setId(IdFactory.getId())
            .setEmail(email)
            .setName(name)
            .setPhone(phone)
        );
    }

}