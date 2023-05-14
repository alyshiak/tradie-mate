import { useState } from "react";

function Cards() {
    const [cards] = useState ([
    {
      title: 'Card-1',
      text: 'tradie info'
    },
    {
        title: 'Card-2',
        text: 'tradie info'
      },  
      {
        title: 'Card-3',
        text: 'tradie info'
      }, 
       {
        title: 'Card-4',
        text: 'tradie info'
      },
      {
        title: 'Card-5',
        text: 'tradie info'
      },
      {
        title: 'Card-6',
        text: 'tradie info'
      },
])
    return (
         <div>
             <section>
                 <div className="container">
                    <h1> Resposonsive Cards</h1>
                    <div className="cards">
                        {cards.map((card, i) => (
                        <div key={i} className="card">
                        <h3>{ card.title}</h3>
                        <p>{card.text}</p>
                        <button className="btn"></button>
                       </div>
                        ))}
                     </div>
                   </div>
                </section>
             </div>
    );
}

export default Cards