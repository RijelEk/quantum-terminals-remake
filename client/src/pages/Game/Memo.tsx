import React, {useEffect, useState} from 'react'
import useGenerateLevelMemo  from "@/utils/terminal_1/useGenerateLevelMemo";
import { Board, Cell } from "@/UI/Terminals/Terminal_1/Board";

const size = 30;

const Memo = () => {

  const [loading, setLoading] = useState(true);
  const [level, setLevel] = useState(null);

  useEffect(() => {
    let result = [undefined];
    do {
     
      const level_get = useGenerateLevelMemo(1);
      result = [...level_get];

      if (!level_get.includes(undefined)) {
              setLoading(false);
              setLevel(level_get);
      }
    } while(result.includes(undefined))
    // if (level) {
 
    // }
  }, [])


  const CellGen = () => {
    let components = [];
    for (let i = 1; i < size+1; i++){
      components = [...components,
        <Cell key={i} data-attr={i} active={level.includes(i)} first={level[0] === i}>
          {level.includes(i) ? level.indexOf(i) : ""}
        </Cell>
      ];
    }
    return components;
  }
  

  if (loading) {
    return (
      <div>
        Loading ... 
      </div>
    )
  }

  return (
    <div>
      <Board>
        {CellGen().map((el) => (
           el
         ))}
      </Board>
    </div>
  )
};

export default Memo;
