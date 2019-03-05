import React, {Component} from 'react'
import Content from '../Content'
import PropTypes from 'prop-types'
import { Link } from "gatsby"


class Patents extends Component{

  
  render(){
    
    return (
      <div>
        <section className='hero is-primary is-bold'>
          <div className='hero-body'>
            <div className='container'>
              <div className='columns'>
                <div className='column is-10 is-offset-1'>
                  <div className='section'>
                    <h1 className='title'>
                      Examples of Patents
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='section section--gradient'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='section'>
                
                  <table id = "patent-data">
                    <th></th><th>PAT. NO</th><th>TITLE</th>
                    <tr>
                      <td>2</td><td>6,543,210</td><td>Computer Keyboard</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
export default Patents
