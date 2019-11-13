/**
 * @name iRepository
 * @author Aélion
 * @version 1.0.0
 * @package repositories
 * @abstract Interface that specified Repositories
 */
export interface Repository<T> {
    add(t: T): Repository<T>;
    get(id: number): T;
    delete(id: number): Repository<T>;
    update(t: T): Repository<T>;
    getRepository(): Map<number, T>;
}