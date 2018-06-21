import React, { Component } from 'react';
import questions from './questions.json';
import './Form.css';
import QuestionMsg from './components/QuestionMsg/QuestionMsg';
import Hints from './components/Hints/Hints';
import Input from './components/Input/Input';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '', 
      questions: [],
      step: 0,
      hits: 0      
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.setState({questions: questions.questions});
    let step =  localStorage.getItem('step');
    if(step != null) {
      this.setState({step: step});
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event, value) {
    this.setState({hits: this.state.hits + 1});

    let anser = questions.questions[this.state.step].anser.toUpperCase();
    if(value.toUpperCase() === anser) {
      this.setState({step: parseInt(this.state.step, 10) + 1, value: ''}, () => {
        localStorage.setItem('step', this.state.step);
      });
      this.setState({hits: 0});
    }
    event.preventDefault();
  }

    render() {

    const styles = {
        form: {
          display: 'flex',
          flex: '1',
          minHeight: '100vh',
          maxHeight: '100vh',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
        },
        mainWrapper: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'start',
          width: '100%'
        },
        inputWrapper: {
          paddingTop: '5em',
          marginLeft: 'auto',
          marginRight: 'auto'
        },
        step: {
          top: '0',
          right: '0',
          position: 'absolute',
          color: 'green',
          padding: '20px'
        }
    }

    let question = questions.questions[this.state.step];
    return (
      <div style={styles.form}>
        <div style={styles.step} className={question ? '' : 'hidden'}>
          lvl - {parseInt(this.state.step, 10) + 1}
        </div>
        <div>
          <Hints hits={this.state.hits} />
        </div>
        <div style={styles.mainWrapper}>
          <div className={'msgWrapper'}>
          <audio autoPlay loop>
            <source src="../assets/horse.ogg" type="audio/mpeg" />
          </audio>
            <QuestionMsg key={this.state.step} msg={question ? question.question : "Good Job..."} />
          </div>
          <div style={styles.inputWrapper} className={question ? '' : 'hidden'}>
            <Input key={this.state.step} onSubmit={this.handleSubmit}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;