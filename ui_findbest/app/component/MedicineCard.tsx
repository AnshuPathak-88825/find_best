import React from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
type Dataitem = {
  medicineMRP: string;
  medicineName: string;
  medicineNewPrice: string;
  medicineQnty: string;
  medicineSavedPrice: string;
  medicineURL: string;
  scrapFrom: string;
};
type Props = {
  item: Dataitem;
};

const MedicineCard = (props: Props) => {
  const ImageUrl =
    "https://plus.unsplash.com/premium_photo-1668487826871-2f2cac23ad56?q=80&w=1412";
  return (
    <div className="m-1  w-full ">
      <Card >
        <CardHeader>
          <Link href={props.item.medicineURL} target="_blank"><Button variant="link"><CardTitle>{props.item.medicineName}</CardTitle></Button></Link>


        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap justify-between justify-around">
            <div className="">
              <Image src={ImageUrl} height={0} width={100} alt="medicine" />
            </div>
            <div className="flex-col">
              <div className="flex justify-between m-2">
                <div className="">
                  {/* <div>Quantity </div> */}
                  <Label htmlFor="text">Quantity</Label>

                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{props.item.medicineQnty}</div>

                </div>
              </div>
              <div className="flex justify-between m-2">
                <div className="">
                <Label htmlFor="text">MRP</Label>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{props.item.medicineMRP}</div>

                </div>
              </div>
              <div className="flex justify-between m-2">
                {/* <div>Discount Price</div> */}
                <Label htmlFor="text">Discount</Label>

                <div>
                  <div className="text-sm text-muted-foreground">{props.item.medicineNewPrice}</div>

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

  );
};

export default MedicineCard;
