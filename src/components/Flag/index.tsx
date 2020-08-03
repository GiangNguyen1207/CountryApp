import React from 'react';

type Props = {
  link: string;
  name: string;
};

const Flag = ({ link, name }: Props) => {
  return <img src={link} alt={name} width="50px" height="auto"></img>;
};

export default Flag;
