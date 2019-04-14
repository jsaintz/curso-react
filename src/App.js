import React, { Component } from 'react';
import TextCounter from './components/TextCounter';
import Course from './components/Course';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      courses: [
        {
          id: 1,
          name: 'React',
          category: 'JavaScript',
          image: 'https://dwglogo.com/wp-content/uploads/2017/09/1460px-React_logo.png'
        },
        {
          id: 2,
          name: 'Angular',
          category: 'JavaScript',
          image: 'https://cms-assets.tutsplus.com/uploads/users/34/posts/22734/preview_image/angular-js-firebase.png'
        }
      ]
    }
    this.remove = this.remove.bind(this);
  }
  remove(courseId){
    const { courses } = this.state,
    courseIndex = courses.findIndex(course => course.id == courseId);
    courses.splice(courseIndex, 1);
    this.setState({courses});
  } 

  render() {
    const {state} = this;
    return(
        <div className="App">
          <ul className="courses-list">
              {
                state.courses.map(course => <Course course={course} onRemove={this.remove} />)
              }
          </ul>
          {/* <TextCounter limit={20} /> */}
        </div>
    );
  }
}

export default App;
