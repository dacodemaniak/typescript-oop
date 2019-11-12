import { User } from "./models/user";
import { Client } from "./models/client";
import { Administrateur } from "./models/administrateur";
import { ClientFactory } from "./helpers/client-factory";

/**
 * @name App
 * @author Aélion
 * @version 1.0.0
 */
export class App {
    public constructor() {
        const moi: Client = new Client();
        moi
            .setName('Aubert')
            .setPhone('0022336655')
            .setEmail('bidule@truc.chose');

        const toi: Client = new Client();
        toi.setEmail('toi@couverture.com');
        toi.setName('Mélanie');
        toi.setPhone('8978451230');


        const factory: ClientFactory = new ClientFactory();
        const lui: Client = factory.full('Bond', '0707070707', 'james@bond.co.uk');

        const admin: Administrateur = Administrateur.getInstanceOf();
        admin.setName('The boss');
        admin.setEmail('theone@master.com');
        admin.setPhone('7777777777');
        admin.setAddress('10 Gottham City');
        
        console.log('Admin vit à : ' + admin.getAddress());

        const autreAdmin: Administrateur = Administrateur.getInstanceOf();
        console.log('Autre admin vit aussi à : ' + admin.getAddress());
        
        // Output names of the users
        console.log('Moi : ' + moi.getName() + ' Toi : ' + toi.getName());
        
    }
}

// Load the app...
const app: App = new App();