import React from 'react';
import styles from './CSSModule.module.css';
import classNames from 'classnames/bind';
import sassStyles from './CSSModule.module.scss';

const cx = classNames.bind(sassStyles);

const CSSModule = () =>{
  return(
    <div className = {styles.wrapper}>
      안녕하세요, 저는 <sapn className="somthing">CSS Module</sapn>
      <div className = {`${styles.wrapper} ${styles.inverted}`}>
        안녕하세요, 저는 <sapn className="somthing">CSS Module</sapn>
      </div>
      <div className = {cx('wrapper', 'inverted')}>
        안녕하세요, 저는 <sapn className="somthing">CSS Module</sapn>
      </div>
    </div>
  )
}

export default CSSModule;