import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Page from "./components/Page/Page";

import './App.sass';
import './components/Navbar/Navbar.sass';
import { NavLink } from 'react-router-dom';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import PageContent from './components/PageContent/PageContent';
import VerticalMenu from './components/VerticalMenu/VerticalMenu';

import Home from './pages/Home';
import About from './pages/About';
import WeAre from './pages/WeAre';
import License from './pages/License';
import Projects from './pages/Projects';
import Actionbar from './components/Actionbar/Actionbar';

class App extends Component {
  state = {
    pathToImg: '/img/',
    logo: 'logo_black_bg_clean.png',
    menuItems: [
      { icon: '/img/icons/info.png', name: 'О компании', page: 'about' },
      { icon: '/img/icons/design.png', name: 'Что мы проектируем', page: 'we-are' },
      { icon: '/img/icons/copyright.png', name: 'Лицензия на проектные работы', page: 'license' },
      { icon: '/img/icons/briefcase.png', name: 'Наши проекты', page: 'our-projects' },
      { icon: '/img/icons/abacus.png', name: 'Компания в цифрах', page: 'compnany-in-numers' },
      { icon: '/img/icons/team.png', name: 'Наша команда', page: 'our-team' },
      { icon: '/img/icons/contacts.png', name: 'Контакты и реквизиты', page: 'contacts' },
    ],
    actionBarItems: [
      {icon: '/img/icons/project.png', name: 'Заказать проект'},
      {icon: '/img/icons/envelope.png', name: 'Свяжитесь с нами'},
      {icon: '/img/icons/phone.png', name: '+7 775 329 9432'},
    ]
  }
  render() {
    return (
      <Router>
        <Page>
          <Sidebar>
            <VerticalMenu items={this.state.menuItems}/>
          </Sidebar>
          
          <Main>
            <Header>
              <NavLink
                exact
                className="navbar__link navbar__link_white"
                activeClassName="navbar__link_active"
                title='На главную'
                to="/" >
                /На главную
              </NavLink>
              <Actionbar items={this.state.actionBarItems} />
            </Header>
            <PageContent>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/we-are" component={WeAre} />
              <Route path="/license" component={License} />
              <Route path="/our-projects" component={Projects} />
            </PageContent>
          </Main>
        </Page>
      </Router>
    );
  }
}

export default App;
