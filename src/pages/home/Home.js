import React, { useEffect } from 'react'
import { Button } from 'antd';
import { queryTaskList } from '../../api/Task.js'
import store from '../../store/index'
import { navTo } from '../../store/Action'
function Home(props){
  console.log(props)
  const onCheck = () => {
    store.dispatch(navTo("/login"))
  }

  const getTableLists = async() => {
      const result = await queryTaskList()
      console.log(result)
      if (result.data.success) {
        
      }
  }

  useEffect(() => {
    getTableLists()
  })

  return (
    <div>
        home
        <Button type="primary" onClick={onCheck}>
          Check
        </Button>
    </div>
  );
}

export default Home;
