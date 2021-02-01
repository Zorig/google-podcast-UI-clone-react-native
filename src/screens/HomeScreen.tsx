import * as React from 'react';

import EpisodeList from 'components/EpisodeList';
import {Separator} from 'components';
import CardList from 'components/CardList';

const data = Array.from({length: 10}).map((x, i) => ({
  id: `'${i}`,
  title: `01/2${i}/21 Mental`,
  podcast: 'Example podcast',
  duration: `1${i}min`,
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam expedita consectetur reiciendis incidunt similique numquam velit tempora a veniam libero fugit odit ducimus soluta, voluptatibus maiores, debitis eos obcaecati vel?',
  createdAt: `${8 + i} hours ago`,
}));

const cardlist = Array.from({length: 10}, (i, j) => ({
  id: `'${j}'`,
  cover: '',
}));

export default function HomeScreen() {
  return (
    <EpisodeList
      ListHeaderComponent={() => (
        <>
          <CardList data={cardlist} />
          <Separator />
        </>
      )}
      data={data}
    />
  );
}
