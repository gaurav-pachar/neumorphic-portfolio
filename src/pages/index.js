import Head from 'next/head'
import MyGif from "../../public/AREmoji_20221029_123415_9044 (1).gif";
import DP from "../../public/20221115_212121(0).jpg"
import NavBar from 'components/navBa/NavBar';
import PictureFrame from "components/pictureFram/pictureFrame";
import SvgElements from "elements/SVG/SvgElements";
const socialLinksData = [
  {
    name: "linkedin",
    url: 'https://www.linkedin.com/in/gaurav-p-64b97b1bb/'
  },
  {
    name: "github",
    url: "https://github.com/gaurav-pachar"
  }
]
export default function Home() {
  return (
    <> 
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative">
        <div className="flex md:hidden flex-col mx-auto justify-between items-center py-2 h-screen max-w-lg">
          <div id='dp' className='px-6 mt-4 w-9/12'>
            <PictureFrame ImageSrc={MyGif.src}/>
          </div>
          <div id='text' className='text-center'>
            <h1 className='text-2xl font-bold tracking-wider text-gray-600 antialiased'>
              Hi I'm Gaurav
            </h1>
          </div>
          <div id='text' className='text-center'>
            <h3 className='font-bold text-gray-500 tracking-wider mb-4 antialiased'>
              (JavaScript Developer)
            </h3>
          </div>
          <div id='text' className='text-center'>
            <p className='text-center text-gray-400 font-semibold md:hidden antialiased px-2'>
              JavaScript | ReactJs | NextJs | Html | CSS | NodeJs | ExpressJs
            </p>
          </div>
          <SocailLinksCard/>
          <div className='py-3 w-full'>
            <NavBar page="homePage"/>
          </div>
        </div>
        <div className='hidden md:flex justify-center items-center w-full h-screen pb-24 pt-32'>
          <NavBar page="homePage"/>
          <div className='w-2/4 p-6'>
            <div className='w-4/5 m-auto'>
              <h1 className='text-4xl font-bold tracking-wider text-gray-600 antialiased text-start'>JavaScript</h1>
              <h1 className='text-4xl font-bold tracking-wider text-gray-600 antialiased text-end'>Developer</h1>
            </div>
            <p className='text-lg font-medium tracking-wider antialiased text-gray-500 text-justify'>
                Software Developer with 1+ years of experience developing scalable web applications incorporating JavaScript libraries and frameworks such as React.js, Next.js, and Vue.js. etc
            </p>
            <SocailLinksCard/>
          </div>
          <div className='w-2/4 p-6 flex flex-col'>
             <div className='px-6 mt-4 w-9/12 mx-auto'>
               <PictureFrame ImageSrc={DP.src} shape="square"/>
             </div>
             <div className=''>
               <h1 className='mx-auto mt-4 w-fit text-3xl font-bold tracking-wider text-gray-600 antialiased'>
                Hi I'm Gaurav
               </h1>
             </div>
          </div>
        </div>
      </main>
    </>
  )
}
const SocailLinksCard = ({}) => {
  return (
    <div id='socialLink' className='flex w-fit mt-4 mx-auto gap-4 shadow-protruding px-4 py-3 rounded-lg'>
    {socialLinksData.map((item) => {
        return (
          <a key={item.name} className='block drop-shadow-2xl cursor-pointer transition-all ease-in-out duration-700 hover:scale-125' href={item.url} target="_blank" rel="noreferrer">
        <SvgElements name={item.name}/>
        </a>
        )
      })}
  </div>
  );
}
/*

*/