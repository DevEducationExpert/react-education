import React from 'react';
import ListItem from '../ListItem/index.js'

const List = () => {

  const data = [
    'Пройти курс react',
    'Написать компонент ToDo',
    'Сдать задание',
    'Радоваться жизни'
  ]

  return (
   data.map((item) => <ListItem>{item}</ListItem>
   )
  )
}

export default List