import React from 'react';
import Responsice from '../components/common/Responsive';
import EditorContainer from '../containers/write/EditorContainer';
import TagBoxContainer from '../containers/write/TagBoxContainer';
import WriteActionButtonsContainer from '../containers/write/WriteActionButtonsContainer';

import {Helmet} from 'react-helmet-async';

const WritePage=()=>{
  return (
    <Responsice>
      <Helmet>
        <title>Neo's Write</title>
      </Helmet>
      <EditorContainer/>
      <TagBoxContainer/>
      <WriteActionButtonsContainer/>
    </Responsice>
  )
}

export default WritePage;