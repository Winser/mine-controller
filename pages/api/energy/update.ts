import type { NextApiRequest, NextApiResponse } from 'next'
import { dbConnect } from '@/database/sqlite'

export default async function energyUpdateHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.debug(req.body)
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' })
    return
  }

  const { name, stored, capacity } = req.body
  const db = await dbConnect()
  await db.run(`INSERT OR REPLACE INTO energy (name, stored, capacity) 
    VALUES (?, ?, ?)`, [name, stored, capacity])

  res.status(200).send('OK')
}