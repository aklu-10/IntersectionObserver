import React, { useEffect, useRef, useState } from 'react'
import Head from './Components/Head';
import Layout from './Components/Layout';
import Section from './Components/Section';
import StickyHead from './Components/StickyHead';
import './App.css';

const App = () => {


  const [isIntersecting, setIsIntersecting] = useState(false);
  const myRef = useRef();

  console.log("render")

  useEffect(()=>
  {

    let observer = new window.IntersectionObserver((entries)=>
    {
      let entry = entries[0];

      if(entry.isIntersecting)
      {
        setIsIntersecting(true);
      }
      else{
        setIsIntersecting(false);
      }
    })

    observer.observe(myRef.current);

  },[]);

  return (

    <>

      <Layout>

        <Head>Intersection Observer Demo</Head>
        <StickyHead><p>Section 2 container is Visible - <strong>{String(isIntersecting)}</strong></p></StickyHead>

        <Section>

          <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100%', flexDirection:'column'}}>
            
            <p style={{letterSpacing:'2px', fontSize:'1.5rem'}}>Scroll down</p>

          </div>

        </Section>


        <Section>

          <div ref={myRef}  className={isIntersecting ? 'slide-in' : ''} style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100%', flexDirection:'column'}}>
          
            <Head>Section 2</Head>
            
            <p style={{letterSpacing:'2px', fontSize:'1.5rem'}}>Section 2 is {isIntersecting ? '' : 'not'} visible</p>

          </div>

        </Section>

      </Layout>

    </>

  )
}

export default App