import React, {Component} from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import "./css/Home.css";
import { Column, Row } from 'simple-flexbox';
import Profile from './Profile.js'

class Home extends Component {
  constructor(){
    super();
    this.state = ({ selectedItem: 'Home' });
  }
  
  render(){
    const { selectedItem } = this.state;
    return (
      // BEM
      <div className="home" >
        <Row flexGrow={1} breakpoints={{ 768: 'column' }}>
          <Sidebar selectedItem={selectedItem} onChange={(selectedItem) => this.setState({ selectedItem })}/>
          <Column flexGrow={1}>
            {(() => {
                            if(selectedItem==="Home")
                                return <Feed/>;
                            else if(selectedItem==="Profile")
                                return <Profile />;

            })()}
          </Column>
          <Column flexGrow={1}>
            <Widgets />
          </Column>
        </Row>
      </div>
    );
  };
}

export default Home;
