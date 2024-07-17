"use client"
import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'
import axios from 'axios'
import SmartPhone from '@/app/component/SmartPhone'
import ClothingCard from '@/app/component/ClothingCard'
export type Dataitem = {
    link: string,
    image: string,
    title: string,
    price: string,
    discountPrice: string,
    discount: string,
    scrapFrom: string
}

type Props = {}

const Page = (props: Props) => {
    const [SearchInput, setSearchInput] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [response,setResponse]=useState<Dataitem[][]>([]);
    const handleSearch = async () => {
        try {
            const API = process.env.NEXT_API;
            setLoading(true);
            const response = await axios.get(
                `http://localhost:4000/api/clothing/${SearchInput}`
            );
            setResponse(response.data);
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div>
            <div className='bg-transparent	backdrop-blur-md	sticky top-0 z-10	'>
                <div className='text-center text-3xl font-bold m-5'>Clothes</div>
                <div className='flex flex-wrap	 justify-center m-8'>
                    <div>
                        <Input
                            type="search"
                            placeholder="Search..."
                            className="md:w-[100px] lg:w-[300px] m-2"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchInput(e.target.value)}
                        />
                    </div>

                    <div className='m-2' onClick={handleSearch}> {loading && <Button disabled>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Please wait
                    </Button>}
                        {!loading && <Button>Search</Button>}
                    </div>

                </div>
            </div>
            {!loading && response.length > 0 && (
                <div className='flex flex-wrap justify-between justify-around justify-center p-4 '>
                    {response.map((singleResult, index) => {
                        if (singleResult.length === 0) {
                            return null;
                        }
                        return singleResult.map((item: Dataitem, subIndex: number) => (
                            <div key={subIndex} className='w-full sm:w-1/2 md:w-1/3   transition-all hover:scale-105'>
                                <ClothingCard item={item}/>
                            </div>
                        ));
                    })}
                </div>
            )}
        </div>
    )
}

export default Page