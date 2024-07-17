import React from 'react'
import { CardContent, CardDescription, CardFooter, CardTitle, CardHeader, Card } from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Dataitem } from '../categories/clothing/page'
type Props = {
  item: Dataitem
}

const ClothingCard = (props: Props) => {


  return (
    <div className="m-1  w-full ">
      <Card >
        <CardHeader>
          <Link href={props.item.link} target="_blank"><Button variant="link"><CardTitle><div className='text-wrap '> {props.item.title}</div></CardTitle></Button></Link>


        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap justify-between justify-around">
            <div className="">
    <Image src={props.item.image} height={0} width={100} alt="medicine" />
            </div>
            <div className='flex-col'>
              {/* <div className="flex justify-between m-2">
                <div className="">
                  <Label htmlFor="text">Quantity :</Label>

                </div>
                <div>
                  <div className="text-sm text-muted-foreground px-4">{props.item.groceryQnty}</div>

                </div>
              </div> */}
              <div className="flex justify-between m-2">
                <div className="">
                  <Label htmlFor="text">MRP :</Label>

                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{props.item.price}</div>

                </div>
              </div>
              <div className="flex justify-between m-2">
                <div className="">
                  <Label htmlFor="text">Discount Price :</Label>

                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{props.item.discountPrice}</div>

                </div>
            </div>
            <div className="flex justify-between m-2">
                <div className="">
                  <Label htmlFor="text">You saved</Label>

                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{props.item.discount}</div>

                </div>
            </div>
            </div>

          </div>

        </CardContent>
        <CardFooter>
          <p>{props.item.scrapFrom}</p>
        </CardFooter>
      </Card>
    </div>
  )
}

export default ClothingCard