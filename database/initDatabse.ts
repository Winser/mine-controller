import { Database } from "sqlite"
import { dbConnect } from "./sqlite"

export const initDataBase = async () => {
    const db = await dbConnect()
    console.debug('Initializing database...')
    await createEnergyTable(db)
}

const createEnergyTable = async (db: Database) => {
    console.debug('Creating energy table...')
    db.exec(`CREATE TABLE IF NOT EXISTS energy (
        name TEXT PRIMARY KEY NOT NULL, 
        stored INTEGER NOT NULL DEFAULT 0,
        capacity INTEGER NOT NULL DEFAULT 0
        )`)
}
