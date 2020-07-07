
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

class App extends Component {
  componentDidMount(){
    window.localStorage.setItem("userToken", "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNjA1MmY3Y2MzYWNjOTZmYTc0NzhkZTlhMDA4ZjI1ZmE3YTdiZjdjM2I1NzE5MDQyYWE5Nzg5MTFmYTEzN2ZlOWNhNTMwNzhiMWFkZjkxOTQiLCJpYXQiOjE1OTM5MTg2NTIsIm5iZiI6MTU5MzkxODY1MiwiZXhwIjoxNjI1NDU0NjUyLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.V6Nrkyem7tp9F4MTzKAHdk6V33p-wtqyeGqrGKZcYvVLZBWF5CLOfMM013ZpZvZLtrRNIQtjc2L9usl_V-Hy-IYgqmpAkGMMbx5zZWXZL8Lug3YtAp4Dj9vP--AooYJIKQpKSmGjGod_fPXy761Lol1zI3E6_5WNQRqPeVJnubFAqav5I0j3fAg_9MRt6dkwJfDt8JKPdeu63rxazAZLL2yS8VxqS_kPjn7OGdlVkAobRHW4C4U0MXykQwtcCAfM4VeqC1sTA2OQmykixXYLG6l3kDOpwAKqVbYPS3fgAzSWyQFqoYpqZyy6JgvB7rBnyemr1TceM9fSd_xBRwuPh2tTRopGzDPasNzXlZpW_uxP06eFceDW4A_7nBpy5GPPXs60x9zf2yfplZuRvQ6C94Z0lQ9HElL3guIdoIXmd4R0WLYtNU1eyiiEFSsUytUBk9FVcupxJfRjHkmst2WOsO8APJkypifS6GlcvkH6K2T8g1diQgp5A5l1-EjTP1COe2v8ejMk1ixMvlERyJ9iVPBRdNR4g4WR9j8L4RzLA_fM_YSLcQHOuAGyw-Ye4DRdFqMIc_YK_soMla9aFKF2b8MW4FSalO7uN9CRClGhE_mlIgdtuCfKe9Z5Z2kvZN5uwDaykEFihuuVpE5DmS5mIq0DgdqB3GmjavRf1sXpGrI");
  }
  render() {
    return (
      <>
        <ToastContainer />
        <Router>
          <React.Suspense fallback={loading()}>
            <Switch>
              <Route path="/" name="Home" component={DefaultLayout} />
            </Switch>
          </React.Suspense>
        </Router>
      </>
    );
  }
}

export default App;