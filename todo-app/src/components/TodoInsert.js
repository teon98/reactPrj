import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  //컴포넌트가 리렌더링될 때마다 함수를 새로 만드는 것이 아니라,
  //한번 함수를 만들고 재사용할 수 있도록 useCallback Hook을 사용
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue(''); //value 값 초기화

      //submit 이벤트는 브라우저에서 새로고침을 발생시킨다.
      //이를 방지하기 위해 아래 함수를 호출한다.
      e.preventDefault();
    },
    [onInsert, value],
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요 "
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default React.memo(TodoInsert);
