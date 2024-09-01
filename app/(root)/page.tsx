import React from 'react'
import  HeaderBox from "@/components/HeaderBox";
import  TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSidebar from "@/components/RightSidebar";

const Home = () => {
  const loggedIn = {
    firstName: 'Haider Ali ',
    lastName: 'Hadi',
    email:'hadideralihadi@mail.me',
  }
  return (
    <section className='home'>
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and Manage your account and Transactions"
          />
          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={12333.90}
          />
        </header>
        Recent Transactions

      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance:12222},{currentBalance:2313}]}
      />  
    </section>
  )
}

export default Home
