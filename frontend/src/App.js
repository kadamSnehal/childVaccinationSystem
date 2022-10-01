
import './App.css';

import React from 'react';
import FirstPage from './components/FirstPage'
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import VaccineInfocopy from './components/VaccineInfocopy';
import ContactUs from './components/ContactUs';
import HospitalLogin from './components/HospitalLogin';
import ChildrenList from './components/ChildrenList';
import ChildAdd from './components/ChildAdd';
import ChildView from './components/ChildView';
import EditChild from './components/EditChild';
import VaccineSchedule from './components/VaccineSchedule';
import FindVaccine from './components/FindVaccine';
import VaccineView from './components/VaccineView';
import ChildLogin from './components/ChildLogin';
import NewSideEffects from './components/NewSideEffects';
import SaveVaccine from './components/SaveVaccine';

function App() {
  return (
    <div className="container">

      <Router>
        <Switch>
          <Route path="/" exact component={FirstPage}></Route>
          <Route path="/vaccines" exact component={VaccineInfocopy}></Route>
          <Route path="/vaccinationInformation" exact component={FindVaccine}></Route>
          <Route path="/sideEffect" exact component={NewSideEffects}></Route>
          <Route path="/contactUs" exact component={ContactUs}></Route>
          <Route path="/hospitallogin" exact component={HospitalLogin}></Route>
          <Route path="/hospital/service" exact component={ChildrenList}></Route>
          <Route path="/hospital/addChild" exact component={ChildAdd}></Route>
          <Route path="/update/:id" exact component={EditChild}></Route>
          <Route path="/view/:id" exact component={ChildView}></Route>
          <Route path="/calender/:id" exact component={VaccineSchedule}></Route>
          <Route path="/vaccine/:id" exact component={VaccineView}></Route>
          <Route path="/child/login" exact component={ChildLogin}></Route>
          <Route path="/savevaccine" exact component={SaveVaccine}></Route>
     


        </Switch>
      </Router>


    </div>
  );
}

export default App;
