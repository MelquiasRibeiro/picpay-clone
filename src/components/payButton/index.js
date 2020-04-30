import React from 'react';
import {MaterialIcons} from '@expo/vector-icons'
import { TouchableWithoutFeedback} from 'react-native'

import { Button,Label } from './styles';

export default function PayButton({onPress, focused}) {
  return (
   <TouchableWithoutFeedback onPress={onPress}>
        <Button
            colors= {focused? 
                ['#fff','#ccc']
              : ['#00fc6c', '#00ac4a']}>
            <MaterialIcons 
            name="attach-money" 
            size={30}
            color={focused? '#00ac4a' : '#ffff'}
            start={[1,0.2]}/>
            <Label focused ={focused}>Pagar</Label>
        </Button>
   </TouchableWithoutFeedback>   
  );
}
