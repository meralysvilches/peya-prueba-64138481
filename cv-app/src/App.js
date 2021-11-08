import Layout from './components/layout'
import { ProfileAside,UserInfo} from './components/section';
import './App.css'
function App() {
  return (
    <section className="app__container">
        <header className="app__title">Curriculum Vitae</header>
        <Layout>
          <ProfileAside/>
          <UserInfo/>
        </Layout>
    </section>
  );
}

export default App;
