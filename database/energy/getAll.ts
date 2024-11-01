import { dbConnect } from "../sqlite"

type EnergyStorage = {
    name: string
    stored: number
    capacity: number
}

export const getAllEnergyStorage = async (): Promise<EnergyStorage[]> => {
    const db = await dbConnect()
    const rows = await db.all('SELECT * FROM energy')
    return rows
}