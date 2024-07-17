import React from 'react'
import { CardContent, CardDescription, CardFooter, CardTitle, CardHeader, Card } from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
type Dataitem = {
    groceryIMG:string,
    scrapFrom:string,
    groceryName:string,
    groceryURL:string,
    groceryQnty:string,
    groceryMRP:string,
    groceryNewPrice:string,
    grocerySavedPrice:string,
}
type Props = {
  item: Dataitem
}

const GroceryCard = (props: Props) => {


  return (
    <div className="m-1  w-full ">
      <Card >
        <CardHeader>
          <Link href={props.item.groceryURL} target="_blank"><Button variant="link"><CardTitle>{props.item.groceryName}</CardTitle></Button></Link>


        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap justify-between justify-around">
            <div className="">
              <Image src={props.item.groceryIMG} height={0} width={100} alt="medicine" />
            </div>
            <div className='flex-col'>
              <div className="flex justify-between m-2">
                <div className="">
                  <Label htmlFor="text">Quantity :</Label>

                </div>
                <div>
                  <div className="text-sm text-muted-foreground px-4">{props.item.groceryQnty}</div>

                </div>
              </div>
              <div className="flex justify-between m-2">
                <div className="">
                  <Label htmlFor="text">MRP :</Label>

                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{props.item.groceryMRP}</div>

                </div>
              </div>
              <div className="flex justify-between m-2">
                <div className="">
                  <Label htmlFor="text">Discount Price :</Label>

                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{props.item.groceryNewPrice}</div>

                </div>
            </div>
            <div className="flex justify-between m-2">
                <div className="">
                  <Label htmlFor="text">You saved</Label>

                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{props.item.grocerySavedPrice}</div>

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

export default GroceryCard