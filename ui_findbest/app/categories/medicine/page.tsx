"use client"
import React, { ReactEventHandler } from 'react'
import { useState } from 'react'
import { Loader2 } from "lucide-react"
import axios from 'axios'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import MedicineCard from '@/app/component/MedicineCard'
type Props = {}
type Dataitem = {
    medicineMRP: string;
    medicineName: string;
    medicineNewPrice: string;
    medicineQnty: string;
    medicineSavedPrice: string;
    medicineURL: string;
    scrapFrom: string;
  };
const page = (props: Props) => {
    const [searchInput, setSearchInput] = useState("");
    const [searchResults, setSearchResults] = useState<Dataitem[][]>([]);
    const [loading, setLoading] = useState(false);
    const handleSearch = async () => {
        try {
            const API = process.env.NEXT_API;
            setLoading(true);
            const response = await axios.get(
                `http://localhost:4000/api/medicine/${searchInput}`
            );
            setSearchResults(response.data);
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    };
    const [searchValue, setSearchValue] = useState('');

    return (
        <div>
            <div className='text-center text-3xl font-bold m-5'>Medicine Search</div>
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
            {!loading && searchResults.length > 0 && (
                <div className='flex flex-wrap justify-between justify-around justify-center p-4 '>
                    {searchResults.map((singleResult, index) => {
                        if (singleResult.length === 0) {
                            return null;
                        }
                        return singleResult.map((item:Dataitem, subIndex:number) => (
                            <div key={subIndex} className='w-full sm:w-1/2 md:w-1/3   transition-all hover:scale-105'>
                                <MedicineCard item={item} />
                            </div>
                        ));
                    })}
                </div>
            )}
            <div></div>


        </div>
    )
}

export default page