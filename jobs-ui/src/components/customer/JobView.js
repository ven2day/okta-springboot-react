import React, { Component } from 'react'
import Moment from 'react-moment'
import Logo from '../misc/Logo'

class JobView extends Component {
  state = {
    job: null
  }

  componentDidMount() {
    const id = this.props.match.params.job_id;
    fetch("http://localhost:8080/api/jobs/" + id)
      .then(res => res.json())
      .then(job => {
        this.setState({
          job
        })
      })
  }

  render() {
    const job = this.state.job;
    const jobInfo = this.state.job && (
      <div className="row" style={{ "marginTop": "30px" }}>
        <div className="col s12">
          <div className="row">
            <div className="col s3">
              <Logo logoUrl={job.logoUrl} />
            </div>
            <div className="col s3 offset-s6">
              <ul style={{ "margin": "0px" }}>
                <li><span>{job.company}</span></li>
                <li><span>{job.id}</span></li>
                <li><Moment fromNow>{job.createDate}</Moment></li>
              </ul>
            </div>
          </div>
          <div className="divider"></div>
          <div className="row" style={{ "marginTop": "30px", "marginBottom": "20px" }}>
            <div className="col s12">
              <span className="flow-text">{job.title}</span>
              <span className="waves-effect waves-light btn-small blue right">Apply</span>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <span>{job.description}</span>
            </div>
          </div>
        </div>
      </div>
    )
    return (
      <div className="container">
        {jobInfo}
      </div>
    )
  }
}

export default JobView