import { Administrateur } from "./administrateur";

/**
 * @name User
 * @author Aélion
 * @version 1.0.0
 * @package models
 */
export abstract class User {
    /**
     * @var string
     * Name of a user
     */
    protected name: string;

    /**
     * @var string
     * Email of a user
     */
    protected email: string;

    /**
     * @var string
     * Phone of a user
     */
    protected phone: string;

    /**
     * Sets the name of the user
     * @param name string Name of the current user
     * @return User
     */
    public setName(name: string): User {
        this.name = name;
        return this;
    }

    /**
     * Returns the name of the user
     * @returns string
     */
    public getName(): string {
        return this.name;
    }

    /**
     * Sets the phone number of this user
     * @param phone 
     * @returns User (this user)
     */
    public setPhone(phone: string): User {
        this.phone = phone;
        return this;
    }

    /**
     * Sets the email of this user
     * @param email 
     * @returns User
     */
    public setEmail(email: string): User {
        this.email = email;
        return this;
    }
}