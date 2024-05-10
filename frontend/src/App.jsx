import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'

import './App.css'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';

const API_KEY="sk-proj-sOFcEKF62Aq1N4nTGqjQT3BlbkFJix6sRReOOIQoWnLpHtPd";

function App() {

  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm ChatGPT! Ask me anything!",
      sentTime: "just now",
      sender: "ChatGPT"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  //const fro search bar and button
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const [regularText,setRegularText]=useState([]);


  const handleSearchInputChange = (event) => {
    const modifiedValue = event.target.value.replace(/(\s+)/g, ',');
    //setSearchQuery(event.target.value);
    setSearchQuery(modifiedValue);
    console.log(modifiedValue);
    
  };

  const handleSearch = async () => {
    // Perform search based on searchQuery
    // For example, you can make an API call here
    // Update searchResults state with the results
    // Reset searchQuery if needed
  };

/////////////////////////////////////////////////


  // const handleSend =async(message) => {

  //   const newMessage = {
  //     message:message,
  //     sender:"user",
  //     direction:"outgoing"
  //   }
  
  const regularSearch = async (value)=> {
    try{
      const response=await axios.get(`http://localhost:3000/texts/${value}`);
      setRegularText(response.data);
      //console.log(response.data);

  }catch(error){
      if(error.response){
          setMsg(error.response.data.msg);
      }
  }


  }

  const handleSend = async (value) => {
    const clusterMapping = {
      
      'Cluster 1': "Εργαλεία Ανάλυσης Δεδομένων",
      'Cluster 2': "Διαχείριση Υγειονομικών Ερευνών",
      'Cluster 3': "Ανάπτυξη και Διαχείριση Έργων",
      'Cluster 4': "Αξιολόγηση Δεδομένων Υγείας",
      'Cluster 5': "Δραστηριότητες και Συνεργασίες Έργων",
      'Cluster 6': "Λειτουργικό Σχεδιασμός Υγείας",
      'Cluster 7': "Λειτουργία Ερευνητικών Επιτροπών",
      'Cluster 8': "Κοινωνική και Υγειονομική Ενσωμάτωση",
      'Cluster 9': "Θέματα Δωρεάς Αίματος",
      'Cluster 10': "Διαχείριση Χρηματοοικονομικών Συναλλαγών",
      'Cluster 11': "Υπηρεσίες Συμβούλων Διοίκησης",
      'Cluster 12': "Υπηρεσίες Υγείας Αθήνας",
      'Cluster 13': "Εκπαίδευση Συμμόρφωσης",
      'Cluster 14': "Εκπαίδευση Επαγγελματιών Υγείας",
      'Cluster 15': "Επίσημες Διαδικασίες Έγγραφης",
      'Cluster 16': "Επαγγελματικοί Σύλλογοι και Δικαιώματα",
      'Cluster 17': "Όροι Συμφωνιών Έργων",
      'Cluster 18': "Υπηρεσίες Online Υποστήριξης",
      'Cluster 19': "Εργαλεία Σάρωσης Εγγράφων",
      'Cluster 20': "Διαχείριση Συμβολαίων Οικονομικών",
      'Cluster 21': "Χαρτογράφηση Δημόσιας Υγείας",
      'Cluster 22': "Προγράμματα Στοματικής Υγείας",
      'Cluster 23': "Αρχεία Πληροφοριών Υπαλλήλων",
      'Cluster 24': "Δήλωση Ποινικών Αδικημάτων",
      'Cluster 25': "Διαχείριση Ευρωπαϊκών Κοινωνικών Ταμείων",
      'Cluster 26': "Παρατηρήσεις Πιλοτικών Προγραμμάτων",
      'Cluster 27': "Αναφορές Προόδου Υποέργων",
      'Cluster 28': "Δημόσια Εκπαίδευση Υγείας",
      'Cluster 29': "Προγράμματα Εκπαίδευσης Λυκείου",
      'Cluster 30': "Ανάπτυξη Υπηρεσιών Ψυχικής Υγείας",
      'Cluster 31': "Περιφερειακά Κέντρα Υγείας",
      'Cluster 32': "Υπηρεσίες Online Τραπεζών",
      'Cluster 33': "Συνεισφορές Ασφαλιστικών",
      'Cluster 34': "Υπηρεσίες Πολιτών και Μεταναστών",
      'Cluster 35': "Προγράμματα Εκπαίδευσης Πανεπιστημίου",
      'Cluster 36': "Εγχειρίδια Νοσοκομείου",
      'Cluster 37': "Συμβατικές Υποχρεώσεις",
      'Cluster 38': "Επίλυση Διαφορών Συμβάσεων",
      'Cluster 39': "Διαχείριση Δημόσιου Χρέους",
      'Cluster 40': "Πολιτιστική Υποστήριξη Εκδηλώσεων",
      'Cluster 41': "Διαδικασίες Ποιότητας Υπηρεσιών",
      'Cluster 42': "Εργαλεία Ψηφιοποίησης Εγγράφων",
      'Cluster 43': "Συμβατικές Συμφωνίες",
      'Cluster 44': "Ψηφιακές Καινοτομίες Ανθρωπιστικών Επιστημών",
      'Cluster 45': "Αξιολόγηση Προγραμμάτων Εκπαίδευσης",
      'Cluster 46': "Θέματα και Σκέψεις για την Υγεία",
      'Cluster 47': "Προσαρμογή Παρουσιάσεων PowerPoint",
      'Cluster 48': "Ευρωπαϊκά Υγειονομικά Έργα",
      'Cluster 49': "Πιστοποίηση Καλών Πρακτικών",
      'Cluster 50': "Στρατηγικές Διορθωτικής Δράσης"
  };
  const clusterMappingString = JSON.stringify(clusterMapping);

  const newMessage = {
      message:'Mε βάση τις παρακάτω κατηγορίας:'+clusterMappingString+ " Πες μου σε ποιές 5 πιθανές κατηγοριες μπορει να ανήκει το παρακάτω ερώτημα:"+value,
      direction: 'outgoing',
      sender: "user"
    };

    const newMessages = [...messages, newMessage];
    
    setMessages(newMessages);

    // Initial system message to determine ChatGPT functionality
    // How it responds, how it talks, etc.
    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages){
    // chatmessages  
    let apiMessages = chatMessages.map((messageObject)=>{
      let role="";
      if (messageObject.sender === "ChatGPT"){
        role="assistant"
      } else {
        role="user"
      }
        return { role:role,content:messageObject.message}
    });

    const systemMessage = {
      role:"system",
      content:"Explain all concepts like an ai Assistant."
    }

    const apiRequestBody ={
      "model":"gpt-3.5-turbo",
      "messages":[
        systemMessage,
        ...apiMessages
      ]
    }

    await fetch("https://api.openai.com/v1/chat/completions",{
      method:"POST",
      headers:{
        "Authorization":"Bearer "+ API_KEY,
        "Content-Type":"application/json"
      },
      body:JSON.stringify(apiRequestBody)
    }).then((data)=>{
      return data.json();
    }).then((data)=>{
      console.log(data);
      console.log(data.choices[0].message.content);
      setMessages(
        [...chatMessages,{
          message:data.choices[0].message.content,
          sender:"ChatGPT"
        }]
      );
      setIsTyping(false);
    });
  }

  return (
    <div className="App">
      <div style={{ position:"relative", height: "800px", width: "700px"  }}>

      

        <MainContainer>
          <ChatContainer>       
           <MessageList 
              scrollBehavior="smooth" 
              typingIndicator={isTyping ? <TypingIndicator content="ChatGPT is typing" /> : null}
            >
              {messages.map((message, i) => {
                console.log(message)
                return <Message key={i} model={message} />
              })}

            </MessageList> 
            <MessageInput placeholder="Type message here" onSend={handleSend} />         
          </ChatContainer>
        </MainContainer>
        <div>
          <input type="text" value={searchQuery} onChange={handleSearchInputChange} />
          <button onClick={() => handleSend(searchQuery)}>Search</button>
          <button onClick={() => regularSearch(searchQuery)}>Q</button>
        </div>



        



        <button onClick={() => handleSend('Θελω να μου βρείς ολες τις μελέτες που εχουν να κάνουν με τους ΡΟΜΑ')}>Send Message to ChatGPT</button>

        <table className='table is-stripped is-fullwidth'>
            <thead>
                <tr>

                    <th>#</th>

                    <th>File Path</th>
                    <th>Occurencies</th>
                    

                </tr>
            </thead>
            <tbody>
                {regularText.map((regular,index)=>(
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{regular[0]}</td>
                        <td>{regular[1]}</td>
                        {console.log(regular[0])}
                        {console.log(regular[1])}
                    </tr>
                ))}
                
            </tbody>
        </table>

                {/* <button onClick={() => handleSend()}>Send Message to ChatGPT</button> */}

          {/* <h3>   {messages.map((message, i) => {
                console.log(message)
                return <Message key={i} model={message} />
              })}
              
            </h3> */}
      </div>
    </div>
  )

  
}

export default App
