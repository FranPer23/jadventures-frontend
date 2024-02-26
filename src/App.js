import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import AllQuests from './components/quests/AllQuests';
import Login from './components/login/Login';
import { atom } from 'jotai';
import HomepageGuild from './components/guild/HomepageGuild';
import QuestDetails from './components/quests/QuestDetails';

export const partyLogged = atom();
export const guildLogged = atom();

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<AllQuests />}/>
        <Route path='login' element={<Login />}/>
        <Route path='guilds/:id/quests' element={<HomepageGuild />}/>
        <Route path='questdetails/:id' element={<QuestDetails />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;