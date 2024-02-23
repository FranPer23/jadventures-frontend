import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import AllQuests from './components/quests/AllQuests';
import Login from './components/login/Login';
import { atom } from 'jotai';
import HomepageGuild from './components/guild/HomepageGuild';

export const partyLogged = atom(null);
export const guildLogged = atom(null);

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<AllQuests />}/>
        <Route path='login' element={<Login />}/>
        <Route path='guilds/:id/quests' element={<HomepageGuild />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;