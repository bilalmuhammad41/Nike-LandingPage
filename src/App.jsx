import React from 'react'
import {Footer, Hero, PopularProducts, Services, SpecialOffers, Newsletter, SuperQuality, CustomerReviews} from './sections'
import Nav from './components/Nav';

const App = ()=> (
  <main className='relative'>
    <section className="xl: padding-l
    wide:padding-r padding-b">
      <Nav/>
      <Hero/>
    </section>
    <section className="padding">
      <PopularProducts/>
    </section>
    <section className="padding">
      <SuperQuality/>
    </section>
    <section className="padding"><Services/>
    </section>
    <section className="padding">
      <SpecialOffers/>
      </section>
    <section className="bg-pale-blue padding">
      <CustomerReviews/>
      </section>
    <section className="padding-x
    sm:py-32 py-16 w-full">
      <Newsletter/>
      </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer/>
      </section>

  </main>
);

export default App;