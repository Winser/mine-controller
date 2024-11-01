import type { NextApiRequest, NextApiResponse } from 'next'
import { initDataBase } from '@/database/initDatabse'

export default async function energyUpdateHandler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    await initDataBase()
    res.status(200).send('OK')
}