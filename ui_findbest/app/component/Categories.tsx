import React from 'react'
import { Separator } from "@/components/ui/separator"
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import Image from 'next/image'
type Props = {}
export interface Album {
    name: string
    artist: string
    cover: string
}
export const All_Category: Album[] = [
    {
        name: "MEDICINE",
        artist: "Ethan Byte",
        cover:
            "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=500",
    },
    {
        name: "Async Awakenings",
        artist: "Nina Netcode",
        cover:
            "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=1422",
    },
    {
        name: "The Art of Reusability",
        artist: "Lena Logic",
        cover:
            "https://plus.unsplash.com/premium_photo-1664391960037-8aefeab6482b?q=80&w=1526",
    },
    {
        name: "Stateful Symphony",
        artist: "Beth Binary",
        cover:
            "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=1376",
    },
]
const Categories = (props: Props) => {
    return (
        <div className='p-8'>
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
            {/* <div className="relative m-2">
                <ScrollArea className="w-full whitespace-nowrap rounded-md border">
                    <div className="flex w-max space-x-4 p-4">
                        {listenNowAlbums.map((artwork) => (
                            <figure key={artwork.artist} className="shrink-0">
                                <div className="overflow-hidden rounded-md">
                                    <Image
                                        src={artwork.cover}
                                        alt={`Photo by ${artwork.artist}`}
                                        className="aspect-[3/4] h-fit w-fit object-cover transition-all hover:scale-105"
                                        width={300}
                                        height={400}
                                    />
                                </div>
                                <figcaption className="pt-2 text-xs text-muted-foreground">
                                    Photo by{" "}
                                    <span className="font-semibold text-foreground">
                                        {artwork.artist}
                                    </span>
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
            </div> */}
            <div className='flex flex-wrap '>
                {All_Category.map((Category) => <div className='w-[24.3%]  rounded-lg m-1'>
                    <Image src={Category.cover} className='aspect-[3/4] h-fit w-fit object-cover transition-all hover:scale-105' width={260} height={0} alt={Category.name} />
                </div>)}
            </div>
        </div>
    )
}

export default Categories