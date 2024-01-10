import { type NextRequest, NextResponse } from 'next/server'
import { log } from 'node:util'

export const POST = async (request: NextRequest) => {
  const data = await request.json()
  console.log(data)
  const res = await fetch(
    'https://api.follow.it/subscription-form/NmpGQmZDSHJwOE1pWTh6Zlh2Vkhzb1cyMEJPOHNoOG5kdFp0U3JBczB5YjFwaGl1SXpONmd5b0lqUWNPN1F0VU4zejJyT2ZaUnJRbEdNbVFKVjY0QjYyVzRrQWwrdEZqZDQvaVhqZUNOMm9RMXcraDhpTkx5RXErWStwU28vUW98YlNhQjhQN0VvQU5DUndzTU9hekpMN0RHVXEvM1c3bkR1L3BmZUVOUll6dz0=/8',
    {
      method: 'post',
      body: JSON.stringify(data),
      cache: 'no-cache',
    },
  ).then((responese) => responese.json())
  return NextResponse.json(res)
}
