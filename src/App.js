
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Content from './components/Content';
import Layout from './layouts/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/information"
            render={() => (
              <div>
                <Navigation title="Thông tin" />
                <Content content="This is information" />
              </div>
            )
            }

          />
          <Route exact path="/history"
            render={() => (
              <div>
                <Navigation title="Lịch sử" />
                <Content content="This is history" />
              </div>
            )
            }
          />
          <Route exact path="/buy"
            render={() => (
              <div>
                <Navigation title="Mua Hàng" />
                <Content content="This is buy page" />
              </div>
            )
            }
          />
          <Route exact path="/sell"
            render={() => (
              <div>
                <Navigation title="Bán Hàng" />
                <Content content="This is sell page" />
              </div>
            )
            }
          />

          <Navigation />
          <Content />
        </Switch>
      </Layout>
    </Router>

  );
}

export default App;
