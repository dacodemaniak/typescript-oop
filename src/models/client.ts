import { User } from "./user";

/**
 * @name Client
 * @author Aélion
 * @package models
 * @version 1.0.0
 * @version 1.0.1 Added Id to Client
 */
export class Client extends User {
    /**
     * @var number
     * Id of a client unique
     */
    private id: number;

    public setId(): void {}

    public getId(): number {
        return this.id;
    }
}