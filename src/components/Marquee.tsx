import Link from "next/link";
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

interface IHeadlines {
    title : string,
    id : string
}

const Marquee = async() => {
    const res = await fetch('https://news-api-v2.vercel.app/api/news?limit=10')
    const data = await res.json()
    const headlines : IHeadlines[]= data.data
    return (
        <div className="bg-red-700 text-white">
            <div className="flex max-w-7xl mx-auto">
                <div className="font bg-red-800 py-1 px-3">সর্বশেষ</div>
            <MarqueeText className="py-1" direction='right' duration={8}>
                 {
              headlines.map((h,i) =>
               <Link className="hover:underline" href={`/news/${h.id}`} key={i}> 
                <span>{h.title}</span>
                <span className="mx-5">•</span>
               </Link>
              )  
            }
            </MarqueeText>
            </div>
           
        </div>
    );
};

export default Marquee;