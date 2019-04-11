import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Page from "./components/Page/Page";
import 'react-perfect-scrollbar/dist/css/styles.css';
import LogoPath from './img/logo.svg';


import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import CssBaseline from '@material-ui/core/CssBaseline'

import './App.sass';
import './components/Navbar/Navbar.sass';
import { NavLink } from 'react-router-dom';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import PageContent from './components/PageContent/PageContent';
import VerticalMenu from './components/VerticalMenu/VerticalMenu';
import Form from './components/Form/Form';

import Home from './pages/Home';
import About from './pages/About';
import WeAre from './pages/WeAre';
import License from './pages/License';
import Projects from './pages/Projects';
import Numbers from './pages/Numbers';
import Team from './pages/Team';
import Contacts from './pages/Contacts';
import Default from './pages/Default';
import Logo from './components/Logo/Logo';

import Actionbar from './components/Actionbar/Actionbar';
import MobileMenu from './components/MobileMenu/MobileMenu';

class Field {
  constructor(label, type, id, required = false, autoFocus = false, multiline = false){
    return this.field = {
      label: label,
      type: type,
      id: id,
      required: required,
      autoFocus: autoFocus,
      multiline: multiline
    }
  }
}

const fields = {
  'name': new Field('Ваше имя', 'text', 'NAME', true, true),
  'companyName': new Field('Название компании', 'text', 'COMPANY_TITLE', true),
  'phone': new Field('Телефон', 'phone', 'PHONE', true),
  'email': new Field('Email', 'email', 'EMAIL', true),
  'detailText': new Field('Опишите суть проекта', 'text', 'COMMENTS', false, false, true),
}

class App extends Component {
  state = {
    isMainPage: false,
    isFormOpen: false,
    curForm: '',
    forms: {
      'new-project': {
        title: 'Заказ нового проекта',
        subtitle: 'Укажите данные в форме ниже, и наши специалисты свяжутся с Вами!',
        fields: [ 
          fields.name,
          fields.companyName,
          fields.phone,
          fields.email,
          fields.detailText,
        ]
      },
      'contact-us': {
        title: 'Свяжитесь с нами',
        subtitle: 'Отправьте нам свой запрос, и мы обязательно с Вами свяжемся. Это намного удобнее, чем электронная почта.',
        fields: [
          fields.name,
          fields.phone,
          fields.email,
          fields.detailText,
        ]
      },
      'call-us': {
        title: 'Заказ обратного звонка',
        subtitle: 'Оставьте свой номер, и мы Вам перезвоним!',
        fields: [ 
          new Field('Телефон', 'phone', 'phone', true, true),
        ]
      }
    },
    pathToImg: '/img/',
    logo: 'logo.svg',
    logoTypo: 'logo_typo.svg',
    menuItems: [
      { icon: '/img/icons/info.png', name: 'О компании', page: 'about' },
      { icon: '/img/icons/design.png', name: 'Что мы проектируем', page: 'we-are' },
      { icon: '/img/icons/copyright.png', name: 'Лицензия на проектные работы', page: 'license' },
      { icon: '/img/icons/briefcase.png', name: 'Наши проекты', page: 'our-projects' },
      { icon: '/img/icons/abacus.png', name: 'Компания в цифрах', page: 'company-in-numbers' },
      { icon: '/img/icons/team.png', name: 'Наша команда', page: 'our-team' },
      { icon: '/img/icons/contacts.png', name: 'Контакты и реквизиты', page: 'contacts' },
    ],
    actionBarItems: [
      {icon: '/img/icons/project.png', name: 'Заказать проект', href: 'new-project'},
      {icon: '/img/icons/envelope.png', name: 'Свяжитесь с нами', href: 'contact-us'},
      {icon: '/img/icons/phone.png', name: '+7 775 329 9432', href: 'call-us'},
    ],
    theme: createMuiTheme({
      palette: {
        type: "dark",
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#fff',
            dark: grey[900],
          // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
          light: '#0066ff',
          main: '#0044ff',
          // dark: will be calculated from palette.secondary.main,
          contrastText: '#ffcc00',
        },
        background: {
            paper: '#202020',
            default: '#202020',
        }
        // error: will use the default color
      },
      typography: {
          // Use the system font instead of the default Roboto font.
          fontWeightLight: '400',
          fontWeightMedium: '500',
          fontWeightRegular: '400',
          fontSize: 16,
          fontFamily: [
            'RopaSansPro',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
          useNextVariants: true,
          h1: {
            fontSize: '40pt',
            textTransform: 'uppercase',
            fontWeight: '500',
            marginBottom: '2rem'
          },
          body1: {
            marginBottom: '1.5rem'
          },
          ul: {
            marginBottom: '1.5rem'
          },
        },
      })
    }

    handleMainPage = () => {
      this.setState({ isMainPage: true })
    }
    componentWillMount = () => {
      this.setState({ isMainPage: false })
    }
  toggleForm = (e) => {
    const isFormOpen = !this.state.isFormOpen,
          curForm = e.currentTarget.getAttribute('data-handle');

    this.setState( { isFormOpen, curForm }, () => {
      console.log('e', this.state.isFormOpen);
    } ) ;
  }

  render() {
    const { isFormOpen, curForm, forms } = {...this.state};
    return (
      <Router>
          <CssBaseline>
            <MuiThemeProvider theme={this.state.theme}>
              <Page>
                {isFormOpen ? 
                <Form 
                  toggleForm={this.toggleForm} 
                  isFormOpen={isFormOpen} 
                  data={forms[curForm]}  /> : 
                false}
                <Sidebar>
                  <VerticalMenu items={this.state.menuItems}/>
                </Sidebar>
                <Main>
                  <Header>
                    <Route exact path="/:page" render={() => <><NavLink exact to='/'><Logo logo={LogoPath} size='s' /></NavLink></> } />
                    <Route exact path="/" render={() => <div></div>} />

                    <Actionbar handleClick={this.toggleForm} items={this.state.actionBarItems} />
                  </Header>
                  <PageContent>
                    <Switch>
                      <Route exact path="/" render={() => <Home />} />
                      <Route path="/about" component={About} />
                      <Route path="/we-are" component={WeAre} />
                      <Route path="/license" component={License} />
                      <Route path="/our-projects" component={Projects} />
                      <Route path="/company-in-numbers" component={Numbers} />
                      <Route path="/our-team" component={Team} />
                      <Route path="/contacts" component={Contacts} />
                      <Route component={Default} />
                    </Switch>
                  </PageContent>
                </Main>
                <MobileMenu />
              </Page>
            </MuiThemeProvider>
          </CssBaseline>
      </Router>
    );
  }
}

export default App;
