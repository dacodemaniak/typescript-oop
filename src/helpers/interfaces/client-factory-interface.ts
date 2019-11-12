import { Client } from './../../models/client';

/**
 * @name ClientFactoryInterface
 * @author Aélion
 * @version 1.0.0
 * @package helpers.interfaces
 */
export interface ClientFactoryInterface {
    nameOnly(name: string): Client;
    full(name: string, phone: string, email: string): Client;
}