import { Client } from './../models/client';
import { ClientFactoryInterface } from './interfaces/client-factory-interface';
/**
 * @name ClientFactory
 * @author Aélion
 * @version 1.0.0
 * @package helpers
 */
export class ClientFactory implements ClientFactoryInterface {
    public nameOnly(name: string): Client {
        return (new Client()
            .setName(name));
    }

    public full(name: string, phone: string, email: string): Client {
        return this.createFullClient(name, phone, email);
    }

    private createFullClient(name: string, phone: string, email: string): Client {
        // My Logic here... verify email pattern
        // My logic here... verify phone pattern

        const client: Client = new Client()
            .setEmail(email)
            .setName(name)
            .setPhone(phone);
        return client;
    }
}