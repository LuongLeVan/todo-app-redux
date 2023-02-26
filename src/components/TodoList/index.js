import { Col, Row, Input, Button, Select, Tag } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../redux/actions';
import Todo from '../Todo';
import { v4 as uuidv4 } from 'uuid';
import {  todoRemainSelector } from '../../redux/selectors';



export default function TodoList() {
  const [name, setName] = useState('')
  const [priority, setPriority] = useState('Medium')

  const dispatch = useDispatch()
  const todoList = useSelector(todoRemainSelector)
  /* const searchTodoList = useSelector(SearchSelector)
  const status = useSelector(statusSelector) */


  const handleAdd = () => {
      dispatch(
        addTodo({
          id: uuidv4,
          name: name,
          priority: priority,
          completed: false,
        })
      )
      setName('')
      setPriority('Medium')
  }

  const handleSetPriority = (value) => {
      setPriority(value)
  }

  console.log(todoList);
  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {
          todoList.map((todo) => (
            <Todo key={todo.id} id={todo.id} name={todo.name} prioriry={todo.priority} completed={todo.completed}/>
          ))
        }
        
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={name} onChange={(e) => setName(e.target.value)}/>
          <Select value={priority} defaultValue="Medium" onChange={handleSetPriority}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAdd}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
