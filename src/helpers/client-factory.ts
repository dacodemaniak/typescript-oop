import { Client } from './../models/client';
import { ClientFactoryInterface } from './interfaces/client-factory-interface';
import { IdFactory } from './id-factory';
/**
 * @name ClientFactory
 * @author Aélion
 * @version 1.0.0
 * @package helpers
 */
export class ClientFactory implements ClientFactoryInterface {
    public nameOnly(name: string): Client {
        return <Client> (new Client()
            .setName(name));
    }

    public full(name: string, phone: string, email: string): Client {
        return this.createFullClient(name, phone, email);
    }

    private createFullClient(name: string, phone: string, email: string): Client {
        // My Logic here... verify email pattern
        // My logic here... verify phone pattern

        const client: Client = new Client();
            client.setId(IdFactory.getId())
            client.setEmail(email)
            client.setName(name)
            client.setPhone(phone);
        return client;
    }
}