import { Client } from "./../models/client";
import { Repository } from "./i-repository";

/**
 * @name ClientRepository
 * @author Aélion
 * @version 1.0.0
 * @package repositories
 * @abstract Collection of Client
 */
export class ClientRepository implements Repository<Client> {
    private repository: Map<number, Client>;

    public constructor() {
        this.repository = new Map<number, Client>();
    }

    /**
     * Returns the Client Map structure
     * @return Map<number, Client>
     */
    public getRepository(): Map<number, Client> {
        return this.repository;
    }

    /**
     * Add a Client to the collection
     * @param client Instsance of a Client
     */
    public add(client: Client): ClientRepository {
        this.repository.set(client.getId(), client);
        return this;
    }

    /**
     * Returns the client with this Id
     * @param id Id of a client
     */
    public get(id: number): Client {
        return this.repository.get(id);
    }

    /**
     * Removes a Client from the Collection
     * @param id Id of a Client
     */
    public delete(id: number): ClientRepository {
        this.repository.delete(id);
        return this;
    }

    /**
     * Replace a Client in the Collection
     * @param client Client to update
     */
    public update(client: Client): ClientRepository {
        return this.add(client);
    }
}