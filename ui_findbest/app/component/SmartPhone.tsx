import React from 'react'
import { CardContent, CardDescription, CardFooter, CardTitle, CardHeader, Card } from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
type Dataitem = {
  scrapFrom: string,
  fullURL: string,
  name: string,
  image: string,
  price: string,
  SPEC_SCORE: string,
  Status: string,
  Ratings: string
}
type Props = {
  item: Dataitem
}

const SmartPhone = (props: Props) => {
  if (props.item.image.startsWith('//')) {
    props.item.image = `https:${props.item.image}`
  }
  console.log(props);
  return (
    <div className="m-1  w-full ">
      <Card >
        <CardHeader>
          <Link href={props.item.fullURL} target="_blank"><Button variant="link"><CardTitle>{props.item.name}</CardTitle></Button></Link>


        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap justify-between justify-around">
            <div className="">
              <Image src={props.item.image} height={0} width={100} alt="medicine" />
            </div>
            <div className='flex-col'>
              <div className="flex justify-between m-2">
                <div className="">
                  {/* <div>Quantity </div> */}
                  <Label htmlFor="text">Spec Score</Label>

                </div>
                <div>
                  <div className="text-sm text-muted-foreground px-4">{props.item.SPEC_SCORE}</div>

                </div>
              </div>
              <div className="flex justify-between m-2">
                <div className="">
                  {/* <div>Quantity </div> */}
                  <Label htmlFor="text">Price</Label>

                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{props.item.price}</div>

                </div>
              </div>
              <div className="flex justify-between m-2">
                <div className="">
                  {/* <div>Quantity </div> */}
                  <Label htmlFor="text">Status</Label>

                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{props.item.Status}</div>

                </div>
            </div>
            <div className="flex justify-between m-2">
                <div className="">
                  {/* <div>Quantity </div> */}
                  <Label htmlFor="text">Rating</Label>

                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{props.item.Ratings}</div>

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

export default SmartPhone