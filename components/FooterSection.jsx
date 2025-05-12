import Image from "next/image";


export default function FooterSection(){
    

    return(

        <div className="flex flex-col items-center justify-center p-10 bg-green-800   ">
            <Image
            src="/images/luanch_card.png"
            height={100}
            width={300}
            quality={100}
            alt="Footer Image"
            className="drop-shadow-2xl animate-bounce  "
            />

        </div>

    )




}