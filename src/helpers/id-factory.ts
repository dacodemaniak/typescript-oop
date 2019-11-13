/**
 * @name IdFactory
 * @author Aélion
 * @version 1.0.0
 * @package helpers
 * @abstract Generate Auto Increment Id
 */
export class IdFactory {
    private static id: number = 0;

    public static getId(): number {
        IdFactory.id = IdFactory.id + 1;
        return IdFactory.id;
    }
}