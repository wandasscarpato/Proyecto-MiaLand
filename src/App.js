import './App.css';
import React from 'react';
//Components
import "./components/Header/Header";
import Header from "./components/Header/Header";
import "./components/Footer/Footer";
import Footer from "./components/Footer/Footer";

import "./components/ItemListContainer/ItemListContainer";
import Item from "./components/ItemListContainer/ItemListContainer";


import "./data/post";
import PostData from "./data/post";

class App extends React.Component {
  render(){
  return (
        <div>
        <Header/>
        <section className="productos">
        {PostData.map((postDetail)=>{
          return (
            <div>
            <Item title={postDetail.title} image={postDetail.Image} description={postDetail.description} price={postDetail.price}/>
            </div>
          )  
      })}
        </section>
        <Footer/>
        
        </div>
  );
  }
}

export default App;