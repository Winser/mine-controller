import type { NextApiRequest, NextApiResponse } from 'next'
import { dbConnect } from '@/database/sqlite'
import { getAllEnergyStorage } from '@/database/energy/getAll'

export default async function energyUpdateHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.status(405).json({ message: 'Method not allowed' })
    return
  }
  
  const db = await dbConnect()
  const rows = await getAllEnergyStorage()

  res.status(200).json(rows)
}