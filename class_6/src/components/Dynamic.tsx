import Image from "next/image"


// const type = {
//     pic: string,
//     heading: 
// }


function Dynamic() {


    let mapping = [
    
        {
            info: "[1]  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit doloremque architecto corporis nisi",
            pic: "/model1.png"
        },

        {
            info: "[2]  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit doloremque architecto corporis nisi",
            pic: "/model2.png"
        },

        {
            info: "[3]  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit doloremque architecto corporis nisi",
            pic: "/model3.png"
        },

        {
            info: "[4]  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit doloremque architecto corporis nisi",
            pic: "/model4.png"
        },

        {
            info: "[5]  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit doloremque architecto corporis nisi",
            pic: "/model5.png"
        },

        {
            info: "[6]  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit doloremque architecto corporis nisi",
            pic: "/model6.png"
        }

    ]


    // CSS

  return (
    <>
    <div className="main">

     {mapping.map((item, index) =>(

        <div className="card" key={index}>

            <Image className="img" src={item.pic} alt="card" width={200} height={200}/>
            <h1 className="heading">{item.info}</h1>

        </div>

     ))}

    </div>
    </>
  )




// Tailwind

    return(
        <>
        
        {mapping.map((item, index) =>(

            <div className="ml-[20px] h-[300px] w-[200px] bg-red-300 hover:h-[310px] shadow-xl p-[5px] float-left">

             <Image src={item.pic} alt="card" width={200} height={200} className="h-[130]" />

             <h1 key={index} className="text-white font-bold mt-[20px] ml-[10px]" >{item.info}</h1>

            </div>

        ))}

        </>
    )


}

export default Dynamic