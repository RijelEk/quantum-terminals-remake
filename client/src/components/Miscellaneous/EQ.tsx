import React from 'react'
import { EqualiserContainer, Bar, EqualiserColumn } from "@/UI/Intro/EQ/EQ";


export default function EQ() {
  return (
    <EqualiserContainer>
    <EqualiserColumn>
      <Bar/>
    </EqualiserColumn>
    <EqualiserColumn>
    <Bar/>
    </EqualiserColumn>
    <EqualiserColumn>
    <Bar/>
    </EqualiserColumn>
    <EqualiserColumn>
    <Bar/>
    </EqualiserColumn>
    <EqualiserColumn>
    <Bar/>
    </EqualiserColumn>
  </EqualiserContainer>
  )
}
