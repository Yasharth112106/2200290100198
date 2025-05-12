export default function Hero(){
    return <div className='hero flex flex-col justify-center gap-6 '>
        <h1 class="uppercase font-black text-4xl">Contact Us</h1>
        <p class="uppercase text-xl">Lets connect we re here to help and we'd love to hear from you! whether you have a qustion , comment or just want to chat , you can reach out to us through the contact form of this page or by phone email or social media.</p>
        <div className="lower_hero" class="flex  gap-3 justify-between">
            <div className="left" class="flex flex-col mx-auto justify-around " >
                <div className="ok" class="bg-green-300 flex justify-between content-center" >
                    <button class="bg-black text-white"><img src="src/images/image.png" alt="" /> Via support chat</button>
                    <button class="bg-black text-white"><img src="src/images/image.png" alt="" />Via call</button>
                </div>
                <button class="bg-white text-black w-full border-2 border-gray-900"><img src="src/images/image.png"class="bg-black" alt="" />Via email</button> 
                <form class='flex flex-col gap-5'>
                    <input type="text" name="name" id="name"placeholder="Name" />
                    <input type="email" name="email" id="email" placeholder="Email"/>
                    <textarea name="textarea" id="textarea" placeholder="Text" class="w-500 h-400"></textarea>
                    <button class="bg-black text-white flex self-center">Submit</button>
                </form>
            </div>
            <div className="right" class="">
                <img src="/src/images/Service.svg" alt="" />
            </div>
        </div>
    </div>
}