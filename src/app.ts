import { User } from "./models/user";
import { Client } from "./models/client";
import { Administrateur } from "./models/administrateur";
import { ClientFactory } from "./helpers/client-factory";
import { UserFactory } from "./helpers/user-factory";
import { AdminStrategy } from "./helpers/strategies/admin-strategy";
import { ClientStrategy } from "./helpers/strategies/client-strategy";

/**
 * @name App
 * @author Aélion
 * @version 1.0.0
 */
export class App {
    public constructor() {
        const factory: UserFactory = new UserFactory();

        // Create a client
        const client: Client = factory.create(
            'Bond',
            '007777777',
            'james@bond.co.uk'
        );

        // To create an admin
        factory.setStrategy(new AdminStrategy());
        const admin: Administrateur = <Administrateur> factory.create(
            'Super Admin',
            '911911911',
            'admin@help.me',
            '10, Baker Street'
        );

        // Yet another user, don't forget to switch strategy back
        factory.setStrategy(new ClientStrategy());
        const bonClient: Client = factory.create(
            'Picsou',
            '666666666',
            'dollar@donaldville.com'
        );

        console.log('client ' + client.getName());
        console.log('admin : ' + admin.getName() + ' Adresse : ' + admin.getAddress());
        console.log('bonClient ' + bonClient.getName());
    }
}

// Load the app...
const app: App = new App();