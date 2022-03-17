import styled from "styled-components";

import Top from "../components/Top";
import CardForm from "../components/CardForm";
import Card from "../components/Card";


const creditCardsEmpty = [
    {
    id: "0",
    cardNumber: "XXXX XXXX XXXX XXXX",
    cardHolderName: "FIRSTNAME LASTNAME",
    cardValidDate: "MM/YY",
    vendorColor: "#D0D0D0" 
    }    
]


function AddCard ({creditCards, setCreditCards}) {


    return (
        // <h1> Detta är AddCard sidan</h1>
        <AddCardWrapper>
        <Top headline="ADD A NEW BANK CARD" />
        <p>NEW CARD</p>
        { creditCardsEmpty.map((card) => (
            <Card  key={card.id}
            {...card}/>
        )) }
        <CardForm creditCards={ creditCards } setCreditCards={ setCreditCards }/>
        
        </AddCardWrapper>
    )
}

const AddCardWrapper = styled.section`
 min-height: 80vh;
  min-width: 100%;
  background-color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  
  flex-direction: column; 
  
  .addCardButton {
    
  }
    
`
export default AddCard;