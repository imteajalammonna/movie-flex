import { useLoaderData, useParams } from "react-router-dom";
import Banner from "../components/Banner";
import Movies from "./Movies";
import { FaFireAlt } from "react-icons/fa";



const Home = () => {
   const movies = useLoaderData();
   const {id } = useParams();
   console.log(movies,id);

    return (
        <div className='container mx-auto min-h-screen m-20'>
            <Banner></Banner>
            <div className="text-2xl p-4 w-full bg-[#FE0233] text-white font-bold flex items-center justify-center rounded-xl my-6"> <FaFireAlt  className="mr-2"></FaFireAlt>Latest Movies </div>
           <Movies></Movies>
        </div>
    );
};

export default Home;