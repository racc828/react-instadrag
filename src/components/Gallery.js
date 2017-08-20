import React, { Component } from 'react'
import Image from './Image'
import EditForm from './EditForm'
import { Grid } from 'semantic-ui-react'

export default class Gallery extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Grid.Row columns={3}>
        <div className="gallery">
            {this.props.allImages.map((img, i) => <Image id={img.id} key={i} url={img.url} caption={img.caption} deleteImg={this.props.deleteImg} editImg={this.props.editImg}/>)}
        </div>
    </Grid.Row>
    )
  }
}
