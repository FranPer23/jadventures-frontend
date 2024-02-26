import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import AllQuests from './components/quests/AllQuests';
import Login from './components/login/Login';
import { atom, useAtom } from 'jotai';
import HomepageGuild from './components/guild/HomepageGuild';
import QuestDetails from './components/quests/QuestDetails';
import { useEffect } from 'react';
import QuestEdit from './components/quests/QuestEdit';

export const partyLogged = atom();
export const guildLogged = atom();
export const details = atom ();

function App() {
  const [Gilda, setGilda] = useAtom(guildLogged);

    useEffect(
      ()=>{
        if (localStorage.getItem("logged")) {
          setGilda(JSON.parse(localStorage.getItem("logged")));
      
        } 
      },[]
    )

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<AllQuests />}/>
        <Route path='login' element={<Login />}/>
        <Route path='quest/:id'element={<QuestEdit/>}/>
        <Route path='guilds/:id/quests' element={<HomepageGuild />}/>
        <Route path='questdetails/:id' element={<QuestDetails />}/>
        <Route path='questupdate/:id' element={<QuestEdit />}/>
      </Routes>
    </BrowserRouter>
  );
}



export default App;