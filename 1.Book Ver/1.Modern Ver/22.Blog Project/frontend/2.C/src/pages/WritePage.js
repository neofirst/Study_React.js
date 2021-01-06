import React from 'react';
import Responsice from '../components/common/Responsive';
import EditorContainer from '../containers/write/EditorContainer';
import TagBoxContainer from '../containers/write/TagBoxContainer';
import WriteActionButtonsContainer from '../containers/write/WriteActionButtonsContainer';

const WritePage=()=>{
  return (
    <Responsice>
      <EditorContainer/>
      <TagBoxContainer/>
      <WriteActionButtonsContainer/>
    </Responsice>
  )
}

export default WritePage;