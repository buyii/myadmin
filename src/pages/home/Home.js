import React, { useEffect } from 'react'
import { Button } from 'antd';
import { queryTaskList } from '../../api/Task.js'
function Home(props){
  console.log(props)
  const onCheck = () => {
    getTableLists()
  }

  const getTableLists = async() => {
      const result = await queryTaskList()
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
