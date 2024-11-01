import sqlite3 from 'sqlite3'
import { Database, open } from 'sqlite'

let db: Database
export const dbConnect = async () => {
    if (db) {
        return db
    }
    db = await open({
        filename: './database/database.db',
        driver: sqlite3.Database
    })

    return db
}
