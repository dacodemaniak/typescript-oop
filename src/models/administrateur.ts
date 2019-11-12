import { User } from "./user";

/**
 * @name Administrateur
 * @author Aélion
 * @version 1.0.0
 * @package models
 */
export class Administrateur extends User {

    private address: string;

    /**
     * Static attribute : instance of an Administrateur object
     */
    private static instanceOf: Administrateur = null;

    private constructor() {
        super();
    }

    public static getInstanceOf(): Administrateur {
        if (Administrateur.instanceOf === null) {
            Administrateur.instanceOf = new Administrateur();
        }
        return Administrateur.instanceOf;
    }

    /**
     * Sets the address of an administrator
     * @param address 
     */
    public setAddress(address: string): Administrateur {
        if (Administrateur.instanceOf && this.address == null) {
            this.address = address;
        }
        return this;
    }

    /**
     * Returns the address of an administrator
     * @returns string
     */
    public getAddress(): string {
        return this.address;
    }
}