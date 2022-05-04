import React , {useEffect, useState} from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Muskarci';
import Products from './components/pages/Zene';
import SignUp from './components/FormSignup';
import Form from './components/Form';
import FormSignup from './components/FormSignup';
import Muskarci from './components/pages/Muskarci';
import Zene from './components/pages/Zene';
import Contact from './components/pages/Contact';
import Info from './components/pages/Info';
import Obuca from './components/pages/Obuca';
import Odeca from './components/pages/Odeca';
import Sprave from './components/pages/Sprave';
import Suplementi from './components/pages/Suplementi';
import Oprema from './components/pages/Oprema';
import Deca from './components/pages/Deca';
import FormLogin from './components/FormLogin';
import FormL from './components/FormL';
import HomeLogin from './components/pages/HomeLogin';
import User from './components/pages/User';
import Admin from './components/pages/Admin';
import AllUsers from './components/pages/AllUsers';
import AddP from './components/AddP';
import Proizvod from './components/pages/Proizvod';
import AllProducts from './components/pages/AllProducts';
import ObucaMen from './components/pages/MuskarciObuca';
import ClothesMen from './components/pages/MuskarciOdeca';
import ObucaWomen from './components/pages/ZeneObuca';
import ClothesWomen from './components/pages/ZeneOdeca';
import EquipmentWomen from './components/pages/ZeneOprema';
import EquipmentMen from './components/pages/MuskarciOprema';
import Decaci from './components/pages/Decaci';
import Devojcice from './components/pages/Devojcice';
import ShoesBoys from './components/pages/DecaciObuca';
import ClothesBoys from './components/pages/DecaciOdeca';
import ShoesGirls from './components/pages/DevojciceObuca';
import ClothesGirls from './components/pages/DevojciceOdeca';
import EquipmentBoys from './components/pages/DecaciOprema';
import EquipmentGirls from './components/pages/DevojciceOprema';
import UpdateProductForm from './components/UpdateProductForm';
import UpdateProdF from './components/UpdateProdF';
import ProductUpdate from './components/ProductUpdate';
import Korpa from './State/Korpa';
import Card from './components/pages/Card';
import UserProfile from './components/pages/UserProfile';
import ProizvodKorpa from './components/pages/ProizvodKorpa';


function App() {

  /*const [username, setUsername] = useState("");

    useEffect( () => {
        (
            async () => {
                await fetch( "https://localhost:44396/Sport/GetUserByUsername/"  + username, {
                    headers: {"Content-Type": "application/json"},
                    credentials: 'include',
                });
            }
        )();
    });*/

    const [isLogin, setIsLogin] = useState(false); 

  return (
    <>
      <Router>
        <Navbar isLogin={isLogin}/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='homeLogin' exact component={HomeLogin} />
          <Route path='/muskarci' component={Muskarci} />
          <Route path='/zene' component={Zene} />
          <Route path='/deca' component={Deca} />
          <Route path='/sign-up' component={Form} />
          <Route path='/login' component={() => <FormL setIsLogin={setIsLogin}/>} />
          <Route path='/kontakt' component={Contact} />
          <Route path='/info' component={Info}/>
          <Route path='/obuca' component={Obuca}/>
          <Route path='/odeca' component={Odeca}/>
          <Route path='/sprave' component={Sprave}/>
          <Route path='/suplementi' component={Suplementi}/>
          <Route path='/oprema' component={Oprema}/>
          <Route path='/user' component={User}/>
          <Route path='/admin' component={Admin}/>
          <Route path='/allusers' component={AllUsers}/>
          <Route path='/allproducts' component={AllProducts}/>
          <Route path='/addProduct' component={AddP}/>
          <Route path='/proizvod' component={Proizvod}/>
          <Route path='/obucaMen' component={ObucaMen}/>
          <Route path='/odecaMen' component={ClothesMen}/>
          <Route path='/obucaWomen' component={ObucaWomen}/>
          <Route path='/odecaWomen' component={ClothesWomen}/>
          <Route path='/equipmentMen' component={EquipmentMen}/>
          <Route path='/equipmentWomen' component={EquipmentWomen}/>
          <Route path='/decaci' component={Decaci}/>
          <Route path='/decaciObuca' component={ShoesBoys}/>
          <Route path='/decaciOdeca' component={ClothesBoys}/>
          <Route path='/devojciceObuca' component={ShoesGirls}/>
          <Route path='/devojciceOdeca' component={ClothesGirls}/>
          <Route path='/decaciOprema' component={EquipmentBoys}/>
          <Route path='/devojciceOprema' component={EquipmentGirls}/>
          <Route path='/devojcice' component={Devojcice}/>
          <Route path='/updateProducForm' component={UpdateProductForm}/>
          <Route path='/updateProdF' component={UpdateProdF}/>
          <Route path='/prodUpdate' component={ProductUpdate}/>
          <Route path='/korpa' component={Card}/>
          <Route path='/userProfile' component={UserProfile}/>
          <Route path='/proizvodKorpa' component={ProizvodKorpa}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;