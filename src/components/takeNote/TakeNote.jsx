import React, { Component } from 'react'

import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import '../takeNote/TakeNote.scss'
import Icons from '../icons/Icons';
import NoteService from '../../service/notesservice';

const noteService = new NoteService();

export class TakeNote extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: true,
      title: '',
      description: '',
      color:'#ffffff'
    }
  }

  handleOpen = () => {
    this.setState({
      open: false
    })
  }

  handleClose = () => {

    let data = {
      "title": this.state.title,
      "description": this.state.description,
      "color":this.state.color
      
    }

    
    noteService.addNote(data)
      .then(res => {
        // refreshDisplaynote
        this.props.refreshDispNote(); 
        this.setState({
          open: true,
          title: '',
          description: '',
          color:'#ffffff'
        })
      })
      .catch(err =>{
        console.log(err)
      })

  }

  getNotesChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  changeColor=(val)=>{
    this.setState({
        color: val
    })
}

  render() {
    return (
      <div className='take-container'>
        {
          this.state.open ?
            <div className="title-container">
              <input type="text" name="note" placeholder='Take a Note' onClick={this.handleOpen} />
              <div className="title-icons">
                <AssignmentTurnedInOutlinedIcon />
                <BrushOutlinedIcon />
                <InsertPhotoOutlinedIcon />
              </div>    
            </div>
            :
            <div className="discp-container" style={{backgroundColor:this.state.color}}>
              <input type="text" name="title" placeholder='Take a Note' onChange={(e) => this.getNotesChange(e)} />
              <input type="text" name="description" placeholder='Discription' onChange={(e) => this.getNotesChange(e)} />

              <div className="discp-icons">
                <div className="icon-list">
                  <Icons changeColor={this.changeColor} />
                </div>
                <button onClick={this.handleClose}>close</button>
              </div>
            </div>
           
        }
         </div>
      
    )
  }
}

export default TakeNote
