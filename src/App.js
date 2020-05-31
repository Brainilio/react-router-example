import React from 'react';
import './App.css';
import Nav from './Nav'
import About from './About'
import Shop from './Shop';
import {CSSTransition} from 'react-transition-group';
import {gsap} from 'gsap';
import {Switch, Route} from 'react-router-dom'
import ItemDetail from './ItemDetail'

const Home = () => ( 
  <div>
    <h1>home page!</h1>
  </div>
)


const routes = [ 
  { path: "/", name: "Home", Component: Home },
  { path: "/about", name: "About", Component: About },
  { path: "/shop", name: "Shop", Component: Shop }
]

const App = () => {

  const onEnter = node => { 
    console.log(node);
    gsap.from(node.children, .6, { 
      ease: "power3.InOut",
      opacity: 0,
      delay: .6,
    })

  }
  const onExit = node => { 
    console.log(node)
    // exit animation
    gsap.to(node, .8, { 
      y: -30, 
      opacity: 0, 
      ease: "power3.InOut",
      stagger: {  
        amount: 0.2
      }
    })

  }


  return (
 
    <div className="App">
      <Nav />
      {/* Its going to render out home because its checking if everything has a / so it keespr endering even if youre in about for example */}
      <Switch> 
      <Route path="/shop/:id" component={ItemDetail}/>
      </Switch>


      {routes.map(({ path, Component}) => ( 

          <Route key={path} exact path={path}> 

            {({ match }) => (

            <CSSTransition 
            in={match != null} 
            timeout={200}
            classNames="page"
            unmountOnExit
            onExit={onExit}
            > 
            <Component />
            </CSSTransition>
            )}
          </Route>
          ))}
    </div>

  );
}



export default App;
