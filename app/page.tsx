import Image from "next/image";
import link from "next/link";
import profilepic from '../public/images/profilepic.png'
import logo from '../public/images/logo.png'
import logos from '../public/images/logos.png'
import pro1 from '../public/images/pro1.png'
import pro2 from '../public/images/pro2.png'

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center h-screen">

        <div className="w-[80%] relative h-full">

          <div className="size-[200px] rounded-full shadow bg-gradient-to-br from-[#2c0b65] to-[#fb47ff] flex items-center justify-center text-white p-2 absolute top-10 right-10 cursor-pointer">

           <p className="text-xl">
            Start A<br />
            Project
           </p>

          </div>

          <div className="h-full flex items-center">

            <div>

              <p className="font-bold text-lg mb-4">Hello!</p>

              <p className="font-bold text-5xl text-purple-800">I'm Chisom</p>

              <p className="text-xl font-bold my-7">I'm a Front-end Web Developer.</p>

            </div>

            <div className="space-x-8 absolute pt-[250px] flex md:flex-row">

              <button className="bg-gradient-to-br from-[#2c0b65] to-[#fb47ff] text-white py-4 px-8 text-lg">View Resume</button>

              <button className="border-[3px] border-purple-800 py-3 px-8 text-lg text-purple-800">Learn More</button>

            </div>

          </div>

        </div>

      </section>

      <section className="min-h-[80vh] flex items-center justify-center pb-20">
        <div className="w-[80%] flex flex-col md:flex-row text-slate-800 space-y-10 gap-20">
          <div className="">
            <h1 className="text-5xl font-bold text-center py-2">About Me</h1> <br />
            <Image src={profilepic} alt="profilepic" />
          </div>

          <div className="w-full md:w-2/5 place-self-center">
            <div>
              <p>My name is Chisom Ugwu, I live in Port Harcourt <br /> Nigeria and I'm a front-end web developer.  My journey <br /> in to tech started with Graphic design which eventually <br /> evolved to a little stint in UI/UX. UI/UX exposed me to <br /> the world of front-end development which i have <br /> developed a great passion for this past year. <br /> <br /> I'm always excited to learn more about new <br /> technologies and how to use them. <br /> Would you like to know more about me and what i do?</p>
            </div>

            <div className="flex pt-8 gap-10">
              <button className="bg-gradient-to-br from-[#2c0b65] to-[#fb47ff] text-white py-4 px-8 text-lg">View Resume</button>
              <Image src={logo} alt="logo" className="size-6 w-2/6 place-self-center" />
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-[80vh] flex items-center justify-center pb-20">

        <div className="w-[80%] flex flex-col md:flex-row text-slate-800 space-y-10 gap-20">

          <div className="w-[80vh]">

            <h1 className="text-5xl font-bold py-2">What I Do</h1> <br />

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Auctor tortor erat amet pretium odio pellentesque. <br /> Imperdiet accumsan a amet nunc scelerisque dui dui, <br /> porta. Aliquet nunc lectus tempus cras elit phasellus <br /> nulla. Et aliquam vel a risus. <br /><br /> pellentesque id vivamus in.</p> <br />

            <p className="font-semibold">Frontend Development</p> <br />

            <p className="font-semibold">Backend Development</p> <br />

            <p className="font-semibold">Application Development</p>

          </div>

          <div className="w-full md:w-2/5 place-self-end">

            <p className="font-semibold pb-8">Technologies:</p>

            <Image src={logos} alt="" />

          </div>

        </div>

      </section>

      <section className="min-h-[80vh] flex items-center justify-center">

        <div className="w-[80%] flex flex-col md:flex-row gap-10 md:place-self-start">

          <div>

            <h1 className="text-5xl font-bold py-2 text-slate-800">Projects</h1> <br />

            <Image src={pro1} alt="ProjectPic" />

          </div>

          <div className="place-self-end">

            <Image src={pro2} alt="ProjectPic" />

          </div>

        </div>

      </section> <br />
  
      <section className="min-h-[80vh] flex items-center justify-center pb-20">

        <div className="w-[80%] h-full flex flex-col justify-between md:flex-row text-slate-800 space-y-10">

          <div className="w-full md:w-2/5 space-y-8">

            <h3 className="text-5xl font-bold ">Let's Talk</h3>

            <p>
              I'm a designer/ based in San Francisco. Currently a freelancer. You can see my hobbies on <span className="text-purple-800">@chysompax</span> and some photos on me too. 
            </p>

            <p className="text-lg font-semibold">info@chysompax.com</p>

            <p className="text-lg font-semibold">+234 901 2624 162 </p>

            <p className="text-lg font-semibold">Lagos, Nigeria</p>
          </div>

          <div className="w-full md:w-2/5 place-self-end">

            <form className="space-y-2">

              <div className="px-2 py-4 space-x-4 border-b-[2px] border-slate-800">
                <label>Name</label>
                <input type="text" placeholder="Name" className="bg-transparent outline-none text-slate-800" />
              </div>

              <div className="px-2 py-4 space-x-4 border-b-[2px] border-slate-800">
                <label>Email</label>
                <input type="text" placeholder="Email" className="bg-transparent outline-none text-slate-800" />
              </div>

              <div className="px-2 py-4 space-y-2  border-b-[2px] border-slate-800">
                <label>Message</label>
                <input type="text" className="bg-transparent outline-none text-slate-800" />

                <textarea name="" id="" className="bg-transparent outline-none text-slate-800 w-full"></textarea>
              </div>

              <div className="w-full flex justify-end mt-8">

                <button className="bg-gradient-to-br from-[#2c0b65] to-[#fb47ff] text-white py-2 px-8">Submit</button>

              </div>

            </form>

          </div>

        </div>

      </section>

      <footer className="h-[5px] flex items-center justify-center md:flex-row pb-20 bg-gradient-to-br from-[#ddd9e2] to-[#c2b5c2] mr-8">
        <div className="w-[80%] h-full flex flex-col justify-between md:flex-row text-slate-800 space-y-10">
          <div className="flex gap-8 pt-10">
            <p>Linked In</p>
            <p>Twitter</p>
            <p>GitHub</p>
          </div>

          <div>
            <p>@2022 - All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
}
