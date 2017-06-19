import React, { Component } from 'react'
import { Grid, Header, Image, Item, Rail, Segment, Sticky } from 'semantic-ui-react'

const Placeholder = () => (
  <Image
    style={{ marginTop: 14, marginBottom: 14 }}
    className='wireframe paragraph image'
    src='/assets/images/wireframe/paragraph.png'
  />
)

class StickyAdjacentContextExample extends Component {
  constructor(props) {
    super(props)
    this.state = { contextRef: null }
  }

  handleContextRef = contextRef => {
    if (!this.state.contextRef) {
      this.setState({ contextRef })
    }
  }

  render() {
    return (
      <Grid centered columns={3}>
        <Grid.Column>
          <div ref={this.handleContextRef}>
            <Segment>
              {[...new Array(15)].map((v, i) => <Placeholder key={i} />)}

              <Rail position='left'>
                <Sticky context={this.state.contextRef}>
                  <Item.Group divided>
                    {[...new Array(12)].map((v, i) => (
                      <Item key={i}>
                        <Item.Image size='tiny' src='/assets/images/wireframe/image.png' />
                        <Item.Content>
                          <Item.Header as='a'>Followup Article</Item.Header>
                          <Item.Meta>By Author</Item.Meta>
                        </Item.Content>
                      </Item>
                    ))}
                  </Item.Group>

                </Sticky>
              </Rail>

              <Rail position='right'>
                <Sticky context={this.state.contextRef}>
                  <Header as='h3'>Stuck Content</Header>
                  <Image src='/assets/images/wireframe/image.png' />
                </Sticky>
              </Rail>
            </Segment>
          </div>
        </Grid.Column>
      </Grid>
    )
  }
}

export default StickyAdjacentContextExample