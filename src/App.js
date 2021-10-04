import FooterPrimary from './components/footers/FooterPrimary';
import NavbarLogin from './components/navbars/NavbarLogin';
import Routes from './Routes';

function App() {
  return (
    <div>
      <NavbarLogin />
      <div>
        <Routes />
      </div>
      <FooterPrimary />
    </div>
  );
}

export default App;
