import "./CharactersList.css";
import { useEffect, useState } from "react";
import { CharList, Root } from '../../../Models/CharModel'
import axios from "axios";
function CharactersList(): JSX.Element {
    const [CharList ,setCharList] =useState<CharList[]>([])
    const [SelectedStatus,setSelectedStatus]  =useState<string>("")
    const [SelectedSpecies,setSelectedSpecies]  =useState<string>("")
    const TableHeaders =['Id','Name','Species','Status','Image']
    useEffect(()=>{ 
		axios.get<Root>('https://rickandmortyapi.com/api/character')
        .then(res =>{setCharList(res.data.results)})
        .catch(err => {console.log(err)})
    },[])
    return (
        <div className="CharactersList"> 
            <select name="Status" value="SelectedStatus" onChange={(e)=>{ setSelectedStatus(e.target.value)}}>
            <option value="" selected style={{ color: 'gray' }}>Select Status</option>
          <option  value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>

        <select name="Species" value="SelectedSpecies" onChange={(e)=>{ setSelectedSpecies(e.target.value)}}>
            <option value="" selected style={{ color: 'gray' }}>Select Species</option>
          <option  value="human">Human</option>
          <option value="alien">Alien</option>
        </select>
  
        <table>
       <thead>
        <tr>
         {TableHeaders.map(t=><th key={t}>{t}</th>)}   
            </tr>    
            </thead> 
            <tbody>
            {CharList
  .filter(char => {
    if (SelectedSpecies === "" && SelectedStatus === "") {
      return true; 
    } else if (SelectedSpecies !== "" && SelectedStatus === "") {
      return char.species.toLowerCase() === SelectedSpecies.toLowerCase();
    } else if (SelectedSpecies === "" && SelectedStatus !== "") {
      return char.status.toLowerCase() === SelectedStatus.toLowerCase();
    } else {
      return char.species.toLowerCase() === SelectedSpecies.toLowerCase() &&
             char.status.toLowerCase() === SelectedStatus.toLowerCase();
    }
  })
  .map(c=><tr key={'character'+c.id}><td>{c.name}</td>,<td>{c.species}</td>,<td>{c.status}</td>,<td><img src={c.image} alt={c.name} /></td></tr>)}




            </tbody>
            
            
            
            
            
            
            
            </table>   
		
        </div>
    );


    }
export default CharactersList;
