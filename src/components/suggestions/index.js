import React from 'react';

import { Container,Option,Img,Label } from './styles';

import Img1 from '../../assets/images/01.png'
import Img2 from '../../assets/images/02.png'
import Img3 from '../../assets/images/03.png'
import Img4 from '../../assets/images/04.png'
import Img5 from '../../assets/images/05.png'
import Img6 from '../../assets/images/06.png'
import Img7 from '../../assets/images/07.png'


const items =[
{
  key: String(Math.random()),
  img:Img1,
  label:'Doações'
},
{
  key: String(Math.random()),
  img:Img2,
  label:'Doações'
},
{
  key: String(Math.random()),
  img:Img3,
  label:'Doações'
},
{
  key: String(Math.random()),
  img:Img4,
  label:'Doações'
},
{
  key: String(Math.random()),
  img:Img5,
  label:'Doações'
},
{
  key: String(Math.random()),
  img:Img6,
  label:'Doações'
},
{
  key: String(Math.random()),
  img:Img7,
  label:'Doações'
},
]


export default function Suggestions() {
  return (
    <Container>
      
       {items.map(item=>(
       
       <Option key={item.key}> 
         <Img source={item.img}/>
        <Label>{item.label}</Label>
      </Option>     
       ))}     
    </Container>
  );
}
