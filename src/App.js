import './App.css';
import Main from './pages/Main/Main';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import KnotList from './pages/KnotList/KnotList';
import KnotDescription from './pages/KnotDescription/KnotDescription';
import Language from './pages/Main/Lang';

function App() {
  let knotsDescription = store.getState()['knots']['knotDescription'],
    knotsCategory = store.getState()['knots']['categories']
  console.log();
  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          <Switch>
            <Route exact path='/'>
              <Main />
            </Route>
            {knotsCategory.map(el =>
              <Route path={`/${el.code}`} key={el.code}>
                <KnotList />
              </Route>)}
            {knotsDescription.map(el =>
              <Route path={`/knot_id_${el.knotennummer}`} key={el.knotennummer}>
                <KnotDescription />
              </Route>)}
            <Route path='/lang' component={Language} />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
