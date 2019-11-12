import { UserStrategyInterface } from "../interfaces/user-strategy-interface";
import { User } from "../../models/user";
import { Administrateur } from "../../models/administrateur";

/**
 * @name ClientStrategy
 * @author Aélion
 * @version 1.0.0
 * @package helpers.strategies
 */
export class AdminStrategy implements UserStrategyInterface {
    create(name: string, email: string, phone: string, address: string): User {
        const admin: Administrateur = Administrateur.getInstanceOf();
        admin.setAddress(address)
            .setName(name)
            .setPhone(phone)
            .setEmail(email);
            
        return admin;
    }

}