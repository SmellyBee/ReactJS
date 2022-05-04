import React from 'react';
import { useEffect,useState} from 'react'

export let korpa = []

export default function Korpa (type,props){
    
    switch(type) { 
        case "vratiKorpu": { 
            return korpa; 
        } 
        case "izprazniKorpu": { 
            return korpa = [];
        } 
        case "izbaciProizvod": { 
            let celaKorpa = korpa;
            korpa = []
            celaKorpa.forEach((proizvod) => {
                if(proizvod === props)
                    korpa = [...korpa, props];
            
            } )
            return korpa;
        }
        case "dodajUKorpu": { 
            return korpa = [...korpa, props];
        }
        default: { 
            return korpa;
        } 
     }
}