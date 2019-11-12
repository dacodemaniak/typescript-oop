import { User } from './../../models/user';
import { Administrateur } from './../../models/administrateur';
import { Client } from './../../models/client';

/**
 * @name UserStrategyInterface
 * @author Aélion
 * @version 1.0.0
 * @package helpers.interfaces
 */
export interface UserStrategyInterface {
    create(name: string, email: string, phone: string, address?: string): User;
} 