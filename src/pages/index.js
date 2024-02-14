import Layout from "../components/layout/index";
import Image from 'next/image'
import logo from '../../public/img/logo-500.png'
import firebase from '../../public/img/stack/firebase.png'
import github from '../../public/img/stack/github.png'
import mysql from '../../public/img/stack/mysql.png'
import postgresql from '../../public/img/stack/postgresql.png'
import react from '../../public/img/stack/react.png'
import angular from '../../public/img/stack/angular.png'
import nextjs from '../../public/img/stack/nextjs.png'
import nodejs from '../../public/img/stack/nodejs.svg'
import HomeStrings from '../strings/home';

export default function Home() {
  return (
    <Layout pageId="home">
      <div className="container">
        <div className="flex flex-col pt-10 text-center">
          <div className="basis-full">
            <h1 className="text-8xl font-bold">{HomeStrings.headerTitle}</h1>
            <p className="text-4xl mt-4">{HomeStrings.headerSubtitle}</p>
          </div>
        </div>
        <div className="flex flex-row">
        <div className="basis-full"></div>
          <div className="basis-full">
            <Image  src={logo} alt="PanDEVbono logo"/>
          </div>
          <div className="basis-full"></div>
        </div>
        <div className="flex flex-row text-center">
          <div className="basis-full">
            <p className="text-2xl mt-4">{HomeStrings.headerDescription}</p>
          </div>
        </div>
        <div className="flex flex-row pt-10">
          <div className="basis-full">
            <h2 className="text-7xl font-bold">{HomeStrings.stackTitle}</h2>
            <p className="text-4xl mt-4">{HomeStrings.stackSubtitle}</p>
            <p className="mt-4">{HomeStrings.stackDescription}</p>
          </div>
          <div className="basis-full">
            <div className="grid grid-cols-3 gap-4">
              <div><Image src={firebase} width={100} height={100} alt="firebase logo"/></div>
              <div><Image src={github} width={100} height={100} alt="github logo"/></div>
              <div><Image src={mysql} width={100} height={100} alt="mysql logo"/></div>
              <div><Image src={postgresql} width={100} height={100} alt="postgresql logo"/></div>
              <div><Image src={react} width={100} height={100} alt="react logo"/></div>
              <div><Image src={angular} width={100} height={100} alt="angular logo"/></div>
              <div><Image src={nextjs} width={100} height={100} alt="nextjs logo"/></div>
              <div><Image src={nodejs} width={100} height={100} alt="nodejs logo"/></div>
            </div>
          </div>
        </div>
      </div>     
    </Layout>
  );
}
