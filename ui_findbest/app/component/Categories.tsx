import React from 'react'
import { Separator } from "@/components/ui/separator"
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import Image from 'next/image'
type Props = {}
export interface Album {
    name: string
    cover: string
}
export const All_Category: Album[] = [
    {
        name: "MEDICINE",
        cover:
            "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=500",
    },
    {
        name: "Async Awakenings",
        cover:
            "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=1422",
    },
    {
        name: "The Art of Reusability",
        cover:
            "https://plus.unsplash.com/premium_photo-1664391960037-8aefeab6482b?q=80&w=1526",
    },
    {
        name: "Stateful Symphony",
        cover:
            "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=1376",
    },
]
const Categories = (props: Props) => {
    return (
        <div className='p-4'>
            <div className="flex items-center justify-between">
                <div className="space-y-1">
                    <h2 className="text-2xl font-semibold tracking-tight">
                        Categories
                    </h2>
                    <p className="text-sm text-muted-foreground">
                        Search on in Category
                    </p>
                </div>
            </div>
            <Separator className="my-4" />
            
            <div className='flex flex-wrap w-full justify-between'>
                {All_Category.map((Category,index:number) => <div key={index} className=' w-[310px] rounded-lg m-1'>
                    <Image src={Category.cover} className='w-full aspect-[3/4] h-fit w-fit object-cover transition-all hover:scale-105' width={240} height={0} alt={Category.name} />
                </div>)}
            </div>
        </div>
    )
}

export default Categories