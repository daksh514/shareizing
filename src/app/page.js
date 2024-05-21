import logData from "@/actions";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import connectDB from "@/lib/database/mongoose";

export default async function Home() {

  
  const dbData = await connectDB()
  // console.log(dbData);
  return (
    <div className="w-full">
    <Hero/>
    <button onClick={()=>logData()}>Log Data</button>
    </div>
  );
}
